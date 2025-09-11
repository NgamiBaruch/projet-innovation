import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { EquipeComponent } from "./equipe/equipe.component";
import { LoginComponent } from "./connexion/login/login.component";
import { RegisterComponent } from "./connexion/register/register.component";
import { FooterComponent } from "./footer/footer.component";
import { FormationComponent } from "./formation/formation.component";
import { ServicesComponent } from "./services/services.component";
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EIS-Web';

  isScrolled = false;
  Scrolled = false;

 @HostListener('window:scroll', [])
 onWindowScroll() {
   this.isScrolled = window.scrollY > 200;
   this.Scrolled = window.scrollY > 0;
 }


 scrollToTop() {
   window.scrollTo({ top: 0, behavior: 'smooth' });
 }
}
