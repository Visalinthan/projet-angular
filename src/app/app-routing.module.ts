import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { CeeComponent } from "./cee/cee.component";
import { FormTestComponent } from "./eligibilite/form-test.component";
import { SavComponent } from "./sav/sav.component";
import { ParrainageComponent } from "./parrainage/parrainage.component";
import { ServicesComponent } from "./srv/services.component";
import { PlancherComponent } from "./plancher/plancher.component";
import { CalorifugeComponent } from "./calorifuge/calorifuge.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "cee", component: CeeComponent },
  { path: "test", component: FormTestComponent },
  { path: "contact", component: ContactComponent },
  { path: "services", component: ServicesComponent },
  { path: "calorifuge", component: CalorifugeComponent },
  { path: "plancher", component: PlancherComponent },
  { path: "sav", component: SavComponent },
  { path: "parrainage", component: ParrainageComponent },

  { path: "", redirectTo: "/home", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
