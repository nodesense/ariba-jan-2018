import { Directive,
         Input,
         OnInit,
         HostListener,
         ElementRef,
         Renderer // DOM manipulation
} from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  // hostElement is h1, input, etc
  constructor(private hostElement: ElementRef,
              private render: Renderer
  ) { 
    console.log('highlight directive created');
  }

  ngOnInit() {
     //this.setColor('lightblue');
  }


  setColor(color: string) {
    this.render.setElementStyle(this.hostElement.nativeElement,
                                'background',
                                color);
  }

  @HostListener('mouseenter')
  onEnter() {
    this.setColor('lightblue');
  }

  @HostListener('mouseleave')
  onLeave() {
    this.setColor('');
  }



}
