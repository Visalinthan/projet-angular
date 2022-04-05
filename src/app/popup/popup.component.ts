import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {

  @Input() popup: boolean = false;
  @Input() msg: string;

  constructor() { }

  ngOnInit(): void {
  }

  @Input() openPopeUp(msg){
    this.popup = true;
  }

  @Input() closePopeUp(){
    this.popup = false;
  }

}
