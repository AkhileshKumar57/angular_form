import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlightColor]'
})
export class HighlightColorDirective {
    constructor(
        private elementRef: ElementRef,
        private renderer: Renderer2
    ){
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    }

}