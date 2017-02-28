import { Directive, ElementRef, forwardRef, HostListener } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[typed]',
  
})
export class TypedDirective {

  constructor(
    private elementRef: ElementRef,
  ) {
    console.log('Typed directive');
  }

}
