import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}

  bgColor = "";
  nomBtn = "Espace Pro";
  @Input() change = false;

  btnChange() {
    this.change = !this.change;
    if (this.change) {
      this.nomBtn = "Particulier";
      this.bgColor = "green";
    } else {
      this.bgColor = "";
      this.nomBtn = "Espace Pro";
    }
    const link = ["home"];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    console.log(this.change);
  }
}
