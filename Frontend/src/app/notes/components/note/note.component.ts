import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/Color';
import { Note } from '../../models/Note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit
{
  note: Note = new Note();
  editing = false;
  backgroundColor = "background-color: " + Color.Grey;
  constructor() { }

  ngOnInit(): void
  {
    if (this.note.color != undefined)
    {
      this.updateBackgroundColor(this.note.color);
    }
    else
    {
      this.updateBackgroundColor(Color.Grey);
    }
  }
  updateTitle(title: any)
  {
    this.note.title = title.target.value;
  }
  updateBody(body: any)
  {
    this.note.body = body.target.value;
  }
  updateBackgroundColor(color: Color)
  {

    this.note.color = color;
    this.backgroundColor = "background-color: " + this.note.color + ";"

  }
  setPriority(priority:any)
  {
    this.note.priority = priority.value;
  }
  createNote()
  {
    if(this.note.title == "" || this.note.body == "")
    {
      
    }
    alert(JSON.stringify(this.note))
  }
}
