import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Parrain } from 'src/app/model/parrain';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input() parrain:  Parrain;
  @Input() client:  Client;

  AjoutFormGroup: FormGroup;
  filleul = new FormArray([]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {


    this.AjoutFormGroup = this.fb.group({

      AjoutParrain : this.fb.group({
      "mail" : ['', Validators.required],

    }),
  });
  }

  addFilleul() {
    this.filleul.push( this.fb.group({"mail" : ['', Validators.required],}));
  }
  removeFilleul(index: number) {
    this.filleul.removeAt(index);
  }

}
