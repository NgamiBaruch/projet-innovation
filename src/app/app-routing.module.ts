import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EquipeComponent } from './equipe/equipe.component';
import { FormationComponent } from './formation/formation.component';
import { LoginComponent } from './connexion/login/login.component';
import { RegisterComponent } from './connexion/register/register.component';
import { ServicesComponent } from './services/services.component';
import { AdministrationComponent } from './administration/administration.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: '',
    component: AcceuilComponent
  },  
  {
    path: 'accueil',
    component: AcceuilComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'a-propos',
    component: AProposComponent
  },
  {
    path: 'formation',
    component: FormationComponent
  },
  {
    path: 'equipe',
    component: EquipeComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
