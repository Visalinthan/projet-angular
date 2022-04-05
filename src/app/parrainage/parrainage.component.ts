
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { PersonneService} from '../services/personne.service'
import { ParrainService } from '../services/parrain.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Parrain } from '../model/parrain';
import { EmailService } from '../services/email.service';
import { PopupComponent } from '../popup/popup.component';
import { from } from 'rxjs';
import { Client } from '../model/client';
import { FormComponent } from '../form/form.component';



@Component({
  selector: 'app-parrainage',
  templateUrl: './parrainage.component.html',
  styleUrls: ['./parrainage.component.scss']
})
export class ParrainageComponent implements OnInit {

  title="Parrainage";
  ClientFormGroup: FormGroup;
  PersonneFormGroup: FormGroup;
  AdresseFormGroup: FormGroup;
  ParrainFormGroup: FormGroup;
  CodePerduFormGroup: FormGroup;
  parrain : Parrain;
  client : Client;
  popup = false;
  msg = '';
  quest: string;

  @ViewChild(PopupComponent) Popup: PopupComponent;

  constructor(
    private fb: FormBuilder,
    private personneService : PersonneService,
    private parrainService : ParrainService,
    private router: Router,
    private datePipe: DatePipe,
    private _emailService: EmailService
    ) { }


  ngOnInit(): void {

  this.ClientFormGroup = this.fb.group({

    client : this.fb.group({
      "codeclient" : ['', Validators.required],
    }),

  });


  this.ParrainFormGroup = this.fb.group({
    parrain : this.fb.group({
    "codeParrain":  ['', Validators.required],
  }),

  });
  this.CodePerduFormGroup = this.fb.group({
    "mail" : ['', Validators.required],
  })


}


setRequired() {
  return [Validators.required];
}

  mailClientForm: boolean = false;
  mailParrainForm: boolean = false;
  ParrainForm: boolean = false;

  CodePerdu(){
    this.msg ='codeperdu';
    this.Popup.openPopeUp(this.msg)
  }

  Inscription(){
    alert('ok')
  /* this.personneService.addPersonne(this.ClientFormGroup.value.inscription).subscribe(
      (reponse) => {
        const pers_id = reponse.id;
        const pers_mail = reponse.mail;
        const ParrainValue: Parrain = {id: pers_id, code_client: this.parrainService.generateCode(), code_parrain: this.parrainService.generateCode(), date_inscript: new Date().toLocaleString()};
        this.parrainService.addParrain(ParrainValue).subscribe(
          (reponse) => {
            const client_code = reponse.code_client;
            this.msg ='newParrain';
            this.Popup.openPopeUp(this.msg);
            this._emailService.sendEmail(pers_mail,'Inscription parrainnage',client_code);
          }
        );
      }
    );*/

  }

  LoginClient(){
    if(this.ClientFormGroup.get('client').get('codeclient').valid){
      this.parrainService.check_Code_Client(this.ClientFormGroup.get('client').get('codeclient').value).subscribe(
        (parrain)=>{
            if(Object.keys(parrain).length>0){
              this.parrain = parrain;
              this.personneService.getId_Personne(this.parrain.id).subscribe(
                (client)=>{
                  this.client = client
                },
                (error)=>{
                  alert('Pb acces api');
                  console.log(error)
                }
              );

              //this.ParrainForm = true;
            }else{
              alert("Erreur ! Le code client saisie n'existe pas.");
            }

        },
        (error)=>{
          alert('Pb acces api');
          console.log(error);
        }
      );
    }

}



}
