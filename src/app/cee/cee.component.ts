import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cee',
  templateUrl: './cee.component.html',
  styleUrls: ['./cee.component.scss']
})
export class CeeComponent implements OnInit {

  title="CEE";

  constructor() { }

  onglets= ['Particuliers' ,'Professionnels'];

  ngOnInit(): void {
  }

  isShow1 = false;
  isShow2 = false;
 
  selectedIndex: number;
  select(index: number) {
      this.selectedIndex = index;
      if(index == 0){
        this.isShow1 = true;
        this.isShow2 = false;
      }else{
        this.isShow1 = false;
        this.isShow2 = true;
      }
  }

}
