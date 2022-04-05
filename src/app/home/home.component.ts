import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor() {}

  title = "Accueil";

  ngOnInit(): void {
  }

  popup = true;
  msg = 'home'


  openPopeUp(){
    setTimeout(() => {
      this.popup = true;
    }, 2000);
  }

  closePopeUp(){
    this.popup = false;
  }
}

