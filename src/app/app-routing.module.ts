import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';



const routes: Routes =[
  {path:'' , component:LoginComponent},
  {path:'table' ,component: TableComponent},
  {path: 'login',component:LoginComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
