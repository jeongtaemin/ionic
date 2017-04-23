import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class Highlight {

	constructor(el: ElementRef, renderer: Renderer){
		// renderer.setElementStyle(el.nativeElement, 'background-color', 'blue');
		// renderer.setElementStyle(el.nativeElement, 'color', '#ffffff');

		el.nativeElement.style.color = "orange";
		el.nativeElement.style.backgroundColor = "gray";
	}


}
