import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[practice]'
})
export class PracticeDirective {
  @HostBinding('class.is-practice') isPractice = true;
  @Input() set practice(value){
    this.isPractice = value==="Backpack" ? true : false;
  }
}