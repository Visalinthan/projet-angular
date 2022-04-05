import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parrainez',
  templateUrl: './parrainez.component.html',
  styleUrls: ['./parrainez.component.scss']
})
export class ParrainezComponent implements OnInit {

  parrainForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.parrainForm = this.fb.group({
        "nom" :  new FormControl('', Validators.required),
        "prenom" :new FormControl('', Validators.required),
        "mail" : new FormControl('', Validators.required),
        "tel" : new FormControl('', Validators.required)
    });
  }

  

  popup: boolean = true;

  openPopeUp(){
    setTimeout(() => {
      this.popup = true;
    }, 2000);
  }

  closePopeUp(){
    this.popup = false;
  }

}
