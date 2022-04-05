import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PopupComponent } from '../popup/popup.component';
import { ParrainService } from '../services/parrain.service';
import { Parrain } from '../model/parrain';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-sav',
  templateUrl: './sav.component.html',
  styleUrls: ['./sav.component.scss']
})
export class SavComponent implements OnInit {

  savForm: FormGroup;
  popup = false;
  msg = '';

  @ViewChild(PopupComponent) Popup: PopupComponent;

  constructor(
    private fb: FormBuilder,
    private parrainService : ParrainService,
  ) { }

  title = "SAV";

  parrain : Parrain;

  ngOnInit(): void {
    this.savForm = this.fb.group({
      "quest" : ['oui', Validators.required],

      client : this.fb.group({
        "codeclient" : ['',Validators.required],
      }),
  
      particulier : this.fb.group({
        "civilite":  ['', Validators.required],
        "nom" :  ['', Validators.required],
        "prenom" : ['', Validators.required],
        "tel" : ['', Validators.required],
        "mail" : ['', Validators.required],
      }),

      "objet" : ['', Validators.required],
      "msg" : ['', Validators.required],

    });
  }

  setRequired() {
    return [Validators.required];
  }

  isRequired(event){
    if(this.savForm.value.quest == 'oui') {
      this.savForm.controls.client.get('codeclient').setValidators(this.setRequired());
      this.savForm.controls.particulier.get('civilite').clearValidators();
      this.savForm.controls.particulier.get('nom').clearValidators();
      this.savForm.controls.particulier.get('prenom').clearValidators();
      this.savForm.controls.particulier.get('mail').clearValidators();
      this.savForm.controls.particulier.get('tel').clearValidators();
    } else if (this.savForm.value.quest == 'non' )  {
      this.savForm.controls.particulier.get('civilite').setValidators(this.setRequired());
      this.savForm.controls.particulier.get('nom').setValidators(this.setRequired());
      this.savForm.controls.particulier.get('prenom').setValidators(this.setRequired());
      this.savForm.controls.particulier.get('mail').setValidators(this.setRequired());
      this.savForm.controls.particulier.get('tel').setValidators(this.setRequired());
     this.savForm.controls.client.get('codeclient').clearValidators();
    }
    this.savForm.controls.client.get('codeclient').updateValueAndValidity();
    this.savForm.controls.particulier.get('civilite').updateValueAndValidity();
      this.savForm.controls.particulier.get('nom').updateValueAndValidity();
      this.savForm.controls.particulier.get('prenom').updateValueAndValidity();
      this.savForm.controls.particulier.get('mail').updateValueAndValidity();
      this.savForm.controls.particulier.get('tel').updateValueAndValidity();
  }


  onSubmit(){
  
    
    if(this.savForm.get('client').valid && this.savForm.value.quest == 'oui' ) {
        this.parrainService.check_Code_Client(this.savForm.get('client').get('codeclient').value).subscribe(
          (parrain)=>{ 
              this.parrain = parrain;
              console.log(Object.keys(parrain).length);
              if(Object.keys(parrain).length>0){
                this.msg ='sav';
                this.Popup.openPopeUp(this.msg);
              }else{
                alert("Erreur ! Le code client saisie n'existe pas.");
              }
              
          },
          (error)=>{
            alert('Pb acces api');
            console.log(error);
          }
        );

        
    }else if(this.savForm.get('particulier').valid && this.savForm.value.quest == 'non') {
        this.msg ='sav';
        this.Popup.openPopeUp(this.msg);
    }
  }

}
