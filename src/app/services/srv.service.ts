import { Injectable } from '@angular/core';
import { Sous_Service  } from 'src/app/model/sous_service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrvService {
  private sous_services: Sous_Service[];
  link = './assets/text.json';

  constructor(private http: HttpClient) {}
  
  get_Sous_Serv(): Observable<Sous_Service[]>{
    return this.http.get<Sous_Service []>(this.link);
  };
  getId_Sous_Serv(id:number): Observable<Sous_Service>{
    return this.http.get<Sous_Service>(this.link + '/${id}');
  }
} 