import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCharactorOnly]'
})
export class CharactorOnlyDirective {

  constructor(private elementRef:ElementRef) { }
  
  @HostListener('input',['$event'])
  onInputChange(){
    console.log('hello share');
    
    let value = this.elementRef.nativeElement.value;
    console.log('value',value);
    this.elementRef.nativeElement.value = value.replace(/[^a-zA-Z]*/g , '');
  }
  }

