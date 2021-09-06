import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../models/Color';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  colors: Color[] = [];
  @Input()
  selectedColor: Color = Color.Grey;
  constructor(private noteService : NoteService) { }
  @Output()
  selectColor: EventEmitter<Color> = new EventEmitter<Color>();

  ngOnInit(): void {
    let obs = this.noteService.getAllColors();
    obs.subscribe(colors=>
      {
        this.colors = colors;
      })
  }

  changeColor(color:Color)
  {
    if(color != Color.Black)
    {
      this.selectedColor = color;
      this.selectColor.emit(this.selectedColor);
    }
  }

}
