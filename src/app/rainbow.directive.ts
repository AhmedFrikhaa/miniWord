import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  private colors: string[] = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ];

  @HostBinding('style.color') textColor!: string;
  @HostBinding('style.borderColor') borderColor!: string;

  @HostListener('keyup') onKeyUp() {
    this.changeColor();
  }
  @HostListener('click') onChange() {
    this.changeColor();
  }

  private changeColor() {
    const randomColorIndex = Math.floor(Math.random() * this.colors.length);
    this.textColor = this.colors[randomColorIndex];
    this.borderColor = this.colors[randomColorIndex];
  }
}
