import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/Color';
import { Note } from '../../models/Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  note: Note = new Note();
  editing = false;
  backgroundColor = "background-color: " + Color.Grey;
  constructor() { }

  ngOnInit(): void {
    this.updateBackgroundColor();
  }

  updateBackgroundColor()
  {
    if(this.note != null && this.note.color != undefined)
    {
      this.backgroundColor = "background-color: " + this.note.color + ";"
    }
  }

}
