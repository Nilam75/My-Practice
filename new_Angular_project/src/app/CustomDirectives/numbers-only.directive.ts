import { AnimateTimings } from '@angular/animations';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private elementRef:ElementRef) { }
  onInputChange(){
    console.log('hello share');
   let value= this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value= value.replace(/[^0-9]*/g, '')
   
 // let replecValue =value.replace(/[^0-9]*/g , '');
   
  }
}

