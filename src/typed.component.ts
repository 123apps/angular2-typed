import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'typed',
  template: 'Typed component'
})
export class TypedComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
  ) { }


  ngOnInit(): void {
    
  }


  
}
