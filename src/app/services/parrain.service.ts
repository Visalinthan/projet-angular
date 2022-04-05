import { Injectable } from '@angular/core';
import { Parrain } from 'src/app/model/parrain';
import { Filleul } from 'src/app/model/filleul';
import { HttpClient} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ParrainService {

  
  private parrain: Parrain[];
  private filleul: Filleul[];

  
  linkPa= 'http://localhost:3000/api/parrains';
  linkF= 'http://localhost:3000/api/filleuls';


ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

ID_LENGTH = 8;

constructor(private http: HttpClient) {}


generateCode() {
  var rtn = '';
  for (var i = 0; i < this.ID_LENGTH; i++) {
    rtn += this.ALPHABET.charAt(Math.floor(Math.random() * this.ALPHABET.length));
  }
  return rtn;
}

 UNIQUE_RETRIES = 9999;

 generateUnique(previous) {
  previous = previous || [];
  var retries = 0;
  var id;

  // Try to generate a unique ID,
  // i.e. one that isn't in the previous.
  while(!id && retries < this.UNIQUE_RETRIES) {
    id = this.generateCode();
    if(previous.indexOf(id) !== -1) {
      id = null;
      retries++;
    }
  }

  return id;
};


getParrain(): Observable<Parrain[]>{
  return this.http.get<Parrain []>(this.linkPa);
}

getId_Parrain(id:number): Observable<Parrain>{
  return this.http.get<Parrain>(this.linkPa + '/${id}');
}

check_Code_Client(code:string): Observable<Parrain>{
  const obj = {
    where:{'code_client': code}
  };
  return this.http.get<Parrain>(this.linkPa+'/findOne?filter='+JSON.stringify(obj));
  
}

addParrain(parrain: Parrain): Observable<any>{
  return this.http.post(this.linkPa, parrain);
}

getFilleul(): Observable<Filleul[]>{
   return this.http.get<Filleul []>(this.linkF);
}
  
addFilleul(filleul: Filleul): Observable<any>{
   return this.http.post(this.linkF, filleul);
}


}


