import { Injectable } from '@angular/core';
import '../../assets/smtp.js';
declare let Email : any


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendEmail(mailto,object,content) {
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username :'visalinthan@gmail.com',
      Password : '2DABA351C914FEBC5A209FD17B7EB21849E6',
      To : mailto,
      From : 'visalinthan@gmail.com',
      Subject : object,
      Body : content,
     
      });//.then( message => {alert(message); } );
  }

}
