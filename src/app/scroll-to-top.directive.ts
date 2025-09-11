import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollToTop]'
})
export class ScrollToTopDirective {

  @HostListener('click')
  onClick(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
