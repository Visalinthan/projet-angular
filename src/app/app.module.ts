import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReplaceLineBreaksPipe } from './services/replace-line-breaks.pipe';;
import { CeeComponent } from './cee/cee.component';
import { FormTestComponent } from './eligibilite/form-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './services/material-module';
import { ParrainageComponent } from './parrainage/parrainage.component';
import { CommonModule } from '@angular/common';
import { SavComponent } from './sav/sav.component';
import { ServicesComponent } from './srv/services.component';
import { ParrainezComponent } from './parrainez/parrainez.component';

import {DatePipe} from '@angular/common';
import { EmailService } from './services/email.service';
import { PopupComponent } from './popup/popup.component';
import { ClientComponent } from './parrainage/client/client.component';
import { FormComponent } from './form/form.component';
import { PlancherComponent } from './plancher/plancher.component';
import { CalorifugeComponent } from './calorifuge/calorifuge.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ReplaceLineBreaksPipe,
    CeeComponent,
    FormTestComponent,
    ParrainageComponent,
    SavComponent,
    ServicesComponent,
    ParrainezComponent,
    PopupComponent,
    ClientComponent,
    FormComponent,
    PlancherComponent,
    CalorifugeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    //CmspageRoutingModule
  ],

  providers: [DatePipe,EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
