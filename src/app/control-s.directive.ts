import { Directive,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[control-s]'
})
export class ControlSDirective {

  @Input() clickOn: string;
  @Input() delay?: number = 100; // ms

  //https://medium.com/claritydesignsystem/four-ways-of-listening-to-dom-events-in-angular-part-2-hostlistener-1b66d45b3e3d
  @HostListener('keydown', ['$event'])
  onKeyDown($event): void {
    if(navigator.platform.match('Mac')){
        this.handleMacKeyEvents($event);
    }
    else {
        this.handleWindowsKeyEvents($event); 
    }
  }

  handleMacKeyEvents($event) {
    let charCode = String.fromCharCode($event.which).toLowerCase();
    if ($event.metaKey && charCode === 's') {
        if(this.click()) {
          $event.preventDefault();
        }
    } 
  }

  handleWindowsKeyEvents($event) {
    let charCode = String.fromCharCode($event.which).toLowerCase();
    if ($event.ctrlKey && charCode === 's') {
        if(this.click()) {
          $event.preventDefault();
        }
    } 
  }

  click() {
    let ref = document.getElementById(this.clickOn);
    if(ref) {
      setTimeout(() => { ref.click() }, this.delay);
      return true;
    }
    console.log("Control+S:"+this.clickOn+" not found.");
    return false;
  }
}
