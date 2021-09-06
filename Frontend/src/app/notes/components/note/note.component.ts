import { Component, OnInit } from '@angular/core';
import { Color } from '../../models/Color';
import { Note } from '../../models/Note';
import { AlertService } from '../../services/alert.service';
import { NoteService } from '../../services/note.service';

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
  constructor(private alert: AlertService, private noteService: NoteService) { }

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
  setPriority(priority: any)
  {
    this.note.priority = priority.value;
  }
  createNote()
  {
    if (this.note.title == "" || this.note.body == "")
    {
      this.alert.alert("Please fill out all the fields", 2000, false, 'center', 'warning');
    }
    else
    {
      let obs = this.noteService.createNote(this.note.title, this.note.body, this.note.priority, false, this.note.color, this.note.icon);
      // this.alert.loadingMenu("Saving...", obs, ()=>
      // {
      //   this.alert.alert("Note saved successfully", 2000,false,'center','success');
      // }
      // ,()=>
      // {
      //   this.alert.alert("Failed to save", 2000,false,'center','error');
      // })
      obs.subscribe(res =>
      {
        if (res)
        {
          this.alert.alert("Note saved successfully", 2000, false, 'center', 'success');
        }
        else
        {
          this.alert.alert("Failed to save", 2000, false, 'center', 'error');

        }
      })
    }
  }
}
