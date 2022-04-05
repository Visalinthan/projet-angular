import { Component, OnInit, Input, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from "@angular/forms";
import { PersonneService } from "../services/personne.service";
import { Residence } from "../model/residence";
import { ParrainageComponent } from "../parrainage/parrainage.component";
import { Parrain } from "../model/parrain";
import { ParrainService } from "../services/parrain.service";
import { EmailService } from "../services/email.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  PersonneFormGroup: FormGroup;
  AdresseFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private personneService: PersonneService,
    private parrainService: ParrainService,
    private _emailService: EmailService,
    private Parrainage: ParrainageComponent,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.PersonneFormGroup = this.fb.group({
      personne: this.fb.group({
        civilite: ["", Validators.required],
        nom: ["", Validators.required],
        prenom: ["", Validators.required],
        tel: ["", Validators.required],
        mail: ["", Validators.required],
        code_client:  this.personneService.generateCode(),
        id_user: 0,
      }),
    });
    this.AdresseFormGroup = this.fb.group({
      adresse: this.fb.group({
        rue: ["", Validators.required],
        cp: ["", Validators.required],
        ville: ["", Validators.required],
        pays: ["", Validators.required],
      }),
    });
  }

  addPers() {
    this.personneService
      .addPersonne(this.PersonneFormGroup.value.personne)
      .subscribe((reponse) => {
        const pers_id = reponse.id;
        this.personneService
          .addAdresse(this.AdresseFormGroup.value.adresse)
          .subscribe((reponse) => {
            const adresse_id = reponse.id;
            const residenceValue: Residence = {
              id_personne: pers_id,
              id_adresse: adresse_id,
              type_residence: "principale",
            };
            this.personneService
              .addResidence(residenceValue)
              .subscribe((reponse) => {
                if ((this.route.component = ParrainageComponent)) {
                  const pers_mail = reponse.mail;
                  const ParrainValue: Parrain = {
                    id: pers_id,
                    code_parrain: this.parrainService.generateCode(),
                    date_inscript: new Date().toLocaleString(),
                  };
                  this.parrainService
                    .addParrain(ParrainValue)
                    .subscribe((reponse) => {
                      const client_code = reponse.code_client;
                      this.Parrainage.msg = "newParrain";
                      this.Parrainage.Popup.openPopeUp(this.Parrainage.msg);
                      //this._emailService.sendEmail(pers_mail,'Inscription parrainnage',client_code);
                    });
                }
              });
          });
      });
  }
}
