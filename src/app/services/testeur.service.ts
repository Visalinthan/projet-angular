import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Logement } from '../model/logement';
import { Chauffage } from '../model/chauffage';
import { Testeur } from '../model/testeur';
import { Impot } from '../model/impot';

@Injectable({
  providedIn: 'root'
})
export class TesteurService {

  private logement: Logement[];
  private chauffage: Chauffage[];
  private testeur: Testeur[];
  private impot: Impot[];

  linkL= 'http://localhost:3000/api/logements';
  linkC= 'http://localhost:3000/api/chauffages';
  linkT= 'http://localhost:3000/api/testeurs';
  linkI= 'http://localhost:3000/api/impots';

  constructor(private http: HttpClient) { }

  get_Logement(): Observable<Logement[]>{
    return this.http.get<Logement []>(this.linkL);
  }

  getId_Logement(id:number): Observable<Logement>{
    return this.http.get<Logement>(this.linkL + '/${id}');
  }

  addLogement(logement: Logement): Observable<any>{
    return this.http.post(this.linkL, logement);
  }

  get_Chauffage(): Observable<Chauffage[]>{
    return this.http.get<Chauffage []>(this.linkC);
  }

  getId_Chauffage(id:number): Observable<Chauffage>{
    return this.http.get<Chauffage>(this.linkC + '/${id}');
  }

  addChauffage(chauffage: Chauffage): Observable<any>{
    return this.http.post(this.linkC, chauffage);
  }

  get_Testeur(): Observable<Testeur[]>{
    return this.http.get<Testeur []>(this.linkT);
  }

  getId_Testeur(id:number): Observable<Testeur>{
    return this.http.get<Testeur>(this.linkT + '/${id}');
  }

  addTesteur(testeur: Testeur): Observable<any>{
    return this.http.post(this.linkC, testeur);
  }

  get_Impot(): Observable<Impot[]>{
    return this.http.get<Impot []>(this.linkI);
  }

  getId_Impot(id:number): Observable<Impot>{
    return this.http.get<Impot>(this.linkI + '/${id}');
  }

  addImpot(impot: Impot): Observable<any>{
    return this.http.post(this.linkI, impot);
  }

}
