import { CommonModule } from '@angular/common';
import { Component, HostListener, AfterViewInit  } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-a-propos',
  standalone: true,
  imports: [NgbModule, CommonModule, NgbCarouselModule],
  templateUrl: './a-propos.component.html',
  styleUrl: './a-propos.component.css'
})
export class AProposComponent implements AfterViewInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 8000; 
    config.wrap = true;     
    config.keyboard = true; 
    config.pauseOnHover = true; 
  }

  public showBlocks = {
   Titre : false,
  };

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkBlocksVisibility();
  }

  ngAfterViewInit() {
    this.checkBlocksVisibility(); 
    window.addEventListener('resize', () => this.checkBlocksVisibility()); 
  }

  private checkBlocksVisibility() {
    this.showBlocks.Titre = this.isVisible('.Titre');
  }

  private isVisible(selector: string): boolean {
    const element = document.querySelector(selector);
    return element ? element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0 : false;
  }

}
