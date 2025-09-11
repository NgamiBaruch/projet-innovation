import { Component,HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations: [
    trigger('changeColor', [
      state('default', style({
        backgroundColor: '#88DFAB'
      })),
      state('clicked', style({
        backgroundColor: 'white'
      })),
      transition('default => clicked', [
        animate('0.5s')
      ]),
      transition('clicked => default', [
        animate('0.5s')
      ])
    ]),
  ]
})
export class HeaderComponent {
  
  @Input() log1: boolean = false;
  
  isCollapsed = true;
  navbarColor: string = '#fff';
log: any;
public languages: any[] = [
  {
    icone: "flag.png",
    langue: "English"
  },
  {
    icone: 'france.png',
    langue: 'Français'  
  }
];

public lang = this.languages[0];  

changeLang() {
  this.lang = this.lang === this.languages[0] ? this.languages[1] : this.languages[0];
}



  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrolling = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.navbarColor = scrolling > 250 ? 'white' : '#fff';
    //logo = scrolling > 250;
  }
  closeMenu() {
    this.isCollapsed = true;
    console.log(this.isCollapsed);
  }

  onLinkClick() {
    this.isCollapsed = true;
    console.log(this.isCollapsed);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}