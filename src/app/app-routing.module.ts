import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { JsonEditComponent } from './json-edit/json-edit.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'editjson',
    component:JsonEditComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
