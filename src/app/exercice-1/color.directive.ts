import { Directive, ElementRef, Renderer2, OnInit, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

@HostBinding('style.color') textColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { 
    
  }
  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement,'background-color','lightgrey');
  }

  
  @HostListener('window: keyup', ['$event']) keyEvent(event) {
    switch (event.key) {
      case 'ArrowUp':
        this.textColor = 'blue';
        break;
      case 'ArrowDown':
      this.textColor = 'red';
        break;
      case 'ArrowLeft':
      this.textColor = 'yellow';
        break;
      case 'ArrowRight':
      this.textColor = 'green';
        break;
      default:
        break;
    }
  }

}
