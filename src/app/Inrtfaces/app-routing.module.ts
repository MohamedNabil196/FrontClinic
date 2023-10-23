import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ClinicGetAllComponent } from '../Components/clinic-get-all/clinic-get-all.component';
import { AddToClincComponent } from '../Components/add-to-clinc/add-to-clinc.component';

const routes:Routes= [
  {path:'',redirectTo:'/Home',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'Records',component:ClinicGetAllComponent},
  {path:'Records/Add',component:AddToClincComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,[RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
