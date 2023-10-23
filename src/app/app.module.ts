import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { RecordsService } from 'src/app/Services/records.service';

import { ClinicGetAllComponent } from './Components/clinic-get-all/clinic-get-all.component';
import { FormsModule } from '@angular/forms';
import { AddToClincComponent } from './Components/add-to-clinc/add-to-clinc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ClinicGetAllComponent,
    AddToClincComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
 
  providers: [RecordsService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
