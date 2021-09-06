import { Component, Input, OnInit } from '@angular/core';
import { Color } from '../../models/Color';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {
  @Input()
  public color: string = Color.Cream;
  colorStyle:string = "background-color:" + Color.Cream;
  constructor() { }

  ngOnInit(): void {
    this.colorStyle = "background-color:" + this.color + ";";
  }

}
