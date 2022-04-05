import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adresse } from '../model/adresse';
import { Residence } from '../model/residence';


@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  private personne: Client[];
  private adresse: Adresse[];
  private residence: Residence[];


  linkPe= 'http://localhost:3000/api/clients';
  linkA= 'http://localhost:3000/api/adresses';
  linkR= 'http://localhost:3000/api/residences';

  ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  ID_LENGTH = 8;

  constructor(private http: HttpClient) { }

  generateCode() {
    var rtn = '';
    for (var i = 0; i < this.ID_LENGTH; i++) {
      rtn += this.ALPHABET.charAt(Math.floor(Math.random() * this.ALPHABET.length));
    }
    return rtn;
  }


    get_Personne(): Observable<Client[]>{
      return this.http.get<Client []>(this.linkPe);
    }

    getId_Personne(id:number): Observable<Client>{
      return this.http.get<Client>(this.linkPe +'/'+ id);
    }

    addPersonne(personne: Client): Observable<any>{
      return this.http.post(this.linkPe, personne);
    }

    get_Adresse(): Observable<Adresse[]>{
      return this.http.get<Adresse []>(this.linkA);
    }

    getId_Adresse(id:number): Observable<Adresse>{
      return this.http.get<Adresse>(this.linkA + id);
    }

    addAdresse(adresse: Adresse): Observable<any>{
      return this.http.post(this.linkA, adresse);
    }


    get_Residence(): Observable<Residence[]>{
      return this.http.get<Residence []>(this.linkR);
    }

    getId_Residence(id:number): Observable<Residence>{
      return this.http.get<Residence>(this.linkR + '/${id}');
    }

    addResidence(residence: Residence): Observable<any>{
      return this.http.post(this.linkR, residence);
    }




}
