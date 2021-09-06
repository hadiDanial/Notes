import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  static path = "assets/icons/"
  static fileType = ".svg"
  // src\assets\icons\1.svg
  @Input()
  priority:number = 1
  imageSource:string = IconComponent.path + this.priority + IconComponent.fileType;
  constructor() { }

  ngOnInit(): void {
    this.imageSource =  IconComponent.path + this.priority + IconComponent.fileType;
  }

}
