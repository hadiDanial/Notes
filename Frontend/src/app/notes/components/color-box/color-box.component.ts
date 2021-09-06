import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../models/Color';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit
{
  @Input()
  public color : Color = Color.Cream;
  colorStyle: string = "background-color:" + Color.Cream;

  @Output()
  onClick: EventEmitter<Color> = new EventEmitter<Color>();

  constructor() { }

  ngOnInit(): void
  {
    this.colorStyle = "background-color:" + this.color + ";";
  }

  click()
  {
    this.onClick.emit(this.color);
  }
}
