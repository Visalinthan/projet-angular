import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { PersonneService} from '../services/personne.service'
import { TesteurService} from '../services/testeur.service'

import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper'
import { Residence } from '../model/residence';
import { Impot } from '../model/impot';
import { Chauffage } from '../model/chauffage';
import { Logement } from '../model/logement';
import { Testeur } from '../model/testeur';
import { Client } from '../model/client';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class FormTestComponent implements OnInit {
  LogementFormGroup: FormGroup;
  SituationFormGroup: FormGroup;
  CoordonneesFormGroup : FormGroup;
  RecapFormGroup : FormGroup;
  popup = false;
  msg = 'test'


  title = 'Éligibilité';

  date: number = new Date().getFullYear();
  constructor(
    private fb: FormBuilder,
    private personneService : PersonneService,
    private testeurService : TesteurService,
    ) {}

  modeChauffeList: string[] = ['Gaz', 'Électricité', 'Fioul', 'Bois', 'Autre'];
  ageLogements: string[] = ['Moins de 2 ans', 'Entre 2 et 10 ans', 'Plus de 10 ans'];
  nbMurs: number[]= [1,2,3,4,5,6,7,8,9,10];

  ngOnInit() {

   // this.LogementFormGroup.get('chauffage').value.toLocaleString

    this.SituationFormGroup = this.fb.group({

      personne : this.fb.group({
        civilite:  ['', Validators.required],
        nom :  ['', Validators.required],
        prenom: ['', Validators.required],
        tel :['', Validators.required],
        mail : ['', Validators.required],
        code_client:  this.personneService.generateCode(),
        id_user: 0,
      }),

      impot : this.fb.group({
        ref_fiscal : ['', Validators.required],
        ref_avis : ['', Validators.required],
        revenu : ['', Validators.required],
        annee : this.date-1
       }),

    });

    this.CoordonneesFormGroup = this.fb.group({
      adresse : this.fb.group({
        rue : ['', Validators.required],
        cp :  ['', Validators.required],
        ville :  ['', Validators.required],
        pays :  ['', Validators.required],
      }),
    });

    this.LogementFormGroup = this.fb.group({
      logement : this.fb.group({
        type_logement:['', Validators.required],
        age_logement:['', Validators.required],
        statut_logement:['', Validators.required],
        nb_pers : ['', Validators.required],
      }),

      chauffage : this.fb.group({
        mode_chauffe:['', Validators.required],
        autre_chauffe : ['',Validators.required],
        type_chauffe : ['',Validators.required],
      }),

      checkArray: this.fb.array([]),


      isolation : this.fb.group({
        comble : false,
        sous_sol: false,
        cave: false,
        mur: false,
        garage: false,
        vide_sanitaire: false,
        mur_int: false,
        mur_ext: false,
        comble_perdu: false,
        comble_amenage: false,
        nbMur_int:[''],
        nbMur_ext:[''],
        surfaceMur:[''],
        surfaceCombleP:[''],
        surfaceCombleA:[''],
        surfaceSousSol:[''],
        surfaceCave:[''],
        surfaceGarage:[''],
        surfaceVideSanitaire:[''],

    }),


    });
    this.RecapFormGroup = this.fb.group({

    });
  }

  setRequired() {
    return [Validators.required];
  }


  isOtherChauffe(event) {

   if(this.LogementFormGroup.get('chauffage').get('mode_chauffe').value.includes('Autre')) {
     this.LogementFormGroup.controls.chauffage.get('autre_chauffe').setValidators(this.setRequired());
    } else if (!this.LogementFormGroup.get('chauffage').get('mode_chauffe').value.includes('Autre'))  {
     this.LogementFormGroup.controls.chauffage.get('autre_chauffe').clearValidators();
    }
    this.LogementFormGroup.controls.chauffage.get('autre_chauffe').updateValueAndValidity();
  }

  setOther(event){
    const modeChauffe = this.LogementFormGroup.get('chauffage').get('autre_chauffe').value;
    this.modeChauffeList[this.modeChauffeList.map((x, i) => [i, x]).filter(x => x[1] == 'Autre')[0][0]] = modeChauffe;
  }

  isnbMurInt(event) {
    if(this.LogementFormGroup.value.isolation.mur_int==true) {
      this.LogementFormGroup.controls.isolation.get('nbMur_int').setValidators(this.setRequired());
      this.LogementFormGroup.controls.isolation.get('surfaceMur').setValidators(this.setRequired());
    } else if(!this.LogementFormGroup.value.isolation.mur_int==false){
      this.LogementFormGroup.controls.isolation.get('nbMur_int').clearValidators();
      this.LogementFormGroup.controls.isolation.get('surfaceMur').clearValidators();
    }
    this.LogementFormGroup.controls.isolation.get('nbMur_int').updateValueAndValidity();
    this.LogementFormGroup.controls.isolation.get('surfaceMur').updateValueAndValidity();
  }

  isnbMurExt(event) {
    if(this.LogementFormGroup.value.isolation.mur_ext==true) {
      this.LogementFormGroup.controls.isolation.get('nbMur_ext').setValidators(this.setRequired());
      this.LogementFormGroup.controls.isolation.get('surfaceMur').setValidators(this.setRequired());
    } else if(this.LogementFormGroup.value.isolation.mur_ext==false){
      this.LogementFormGroup.controls.isolation.get('nbMur_ext').clearValidators();
      this.LogementFormGroup.controls.isolation.get('surfaceMur').clearValidators();
    }
    this.LogementFormGroup.controls.isolation.get('nbMur_ext').updateValueAndValidity();
    this.LogementFormGroup.controls.isolation.get('surfaceMur').updateValueAndValidity();
  }

  isCombleP(event) {
    if(this.LogementFormGroup.value.isolation.comble_perdu==true) {
      this.LogementFormGroup.controls.isolation.get('surfaceCombleP').setValidators(this.setRequired());
    } else if(this.LogementFormGroup.value.isolation.comble_perdu==false) {
      this.LogementFormGroup.controls.isolation.get('surfaceCombleP').clearValidators();
    }
    this.LogementFormGroup.controls.isolation.get('surfaceCombleP').updateValueAndValidity();
  }

  isCombleA(event) {
    if(this.LogementFormGroup.value.isolation.comble_amenage==true) {
      this.LogementFormGroup.controls.isolation.get('surfaceCombleA').setValidators(this.setRequired());
    } else if(this.LogementFormGroup.value.isolation.comble_amenage==false) {
      this.LogementFormGroup.controls.isolation.get('surfaceCombleA').clearValidators();
    }
    this.LogementFormGroup.controls.isolation.get('surfaceCombleA').updateValueAndValidity();

  }

  isSousSol(event) {
    if(this.LogementFormGroup.value.isolation.sous_sol==true) {
      this.LogementFormGroup.controls.isolation.get('surfaceSousSol').setValidators(this.setRequired());
    } else if(this.LogementFormGroup.value.isolation.sous_sol==false){
      this.LogementFormGroup.controls.isolation.get('surfaceSousSol').clearValidators();
    }
    this.LogementFormGroup.controls.isolation.get('surfaceSousSol').updateValueAndValidity();
  }


  isCave(event) {
    if(this.LogementFormGroup.value.isolation.cave==true) {
      this.LogementFormGroup.controls.isolation.get('surfaceCave').setValidators(this.setRequired());
    } else if(this.LogementFormGroup.value.isolation.cave==false){
      this.LogementFormGroup.controls.isolation.get('surfaceCave').clearValidators();
    }
    this.LogementFormGroup.controls.isolation.get('surfaceCave').updateValueAndValidity();
  }

  isGarage(event) {
    if(this.LogementFormGroup.value.isolation.garage==true) {
      this.LogementFormGroup.controls.isolation.get('surfaceGarage').setValidators(this.setRequired());
    } else if(this.LogementFormGroup.value.isolation.garage==false){
      this.LogementFormGroup.controls.isolation.get('surfaceGarage').clearValidators();
    }
    this.LogementFormGroup.controls.isolation.get('surfaceGarage').updateValueAndValidity();
  }

  isVide_sanitaire(event) {
    if(this.LogementFormGroup.value.isolation.vide_sanitaire==true) {
      this.LogementFormGroup.controls.isolation.get('surfaceVideSanitaire').setValidators(this.setRequired());
    } else if(this.LogementFormGroup.value.isolation.vide_sanitaire==false) {
      this.LogementFormGroup.controls.isolation.get('surfaceVideSanitaire').clearValidators();
    }
    this.LogementFormGroup.controls.isolation.get('surfaceVideSanitaire').updateValueAndValidity();
  }


  onCheckboxChange(e) {
    const checkArray: FormArray = this.LogementFormGroup.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  Tester(){
  this.personneService.addPersonne(this.SituationFormGroup.value.personne).subscribe(
      (reponse) => {
        const pers_id = reponse.id;
        this.personneService.addAdresse(this.CoordonneesFormGroup.value.adresse).subscribe(
          (reponse) => {
            const adresse_id = reponse.id;
            const residence: Residence = {id_personne : pers_id, id_adresse : adresse_id, type_residence : ' principale'};
            this.personneService.addResidence(residence).subscribe(
              (reponse) => {
                this.testeurService.addImpot(this.SituationFormGroup.value.impot).subscribe(
                  (reponse) => {
                    const impot_id = reponse.id;
                    const chauffe = this.LogementFormGroup.get('chauffage').get('mode_chauffe').value
                    const chauffage: Chauffage = {
                      type_chauffe : this.LogementFormGroup.get('chauffage').get('type_chauffe').value,
                      mode_chauffe : chauffe.toString(),
                    };
                    console.log("type:" + this.LogementFormGroup.get('chauffage').get('type_chauffe').value);
                    console.log("mode:" + chauffe.toString());
                    this.testeurService.addChauffage(chauffage).subscribe(
                      (reponse) => {
                        const chauffage_id = reponse.id;
                        const logement: Logement = {
                          statut_logement : this.LogementFormGroup.get('logement').get('statut_logement').value,
                          type_logement : this.LogementFormGroup.get('logement').get('type_logement').value,
                          age_logement : this.LogementFormGroup.get('logement').get('age_logement').value,
                          nb_pers : this.LogementFormGroup.get('logement').get('nb_pers').value,
                          id_chauffe : chauffage_id
                        };
                        this.testeurService.addLogement(logement).subscribe(
                          (reponse) => {
                            const logement_id = reponse.id;
                            const testeur: Testeur = {
                             date_test : new Date().toLocaleString(),
                             resultat : null,
                             id_impot : impot_id,
                             id_logement : logement_id

                            };
                            this.testeurService.addTesteur(testeur).subscribe(
                              (reponse) => {
                                alert('ok');
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );

              }
            );
          }
        );
      }
    );


  }


}
