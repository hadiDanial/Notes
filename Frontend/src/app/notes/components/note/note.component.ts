import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  editing = true;
  viewing = (this.route.snapshot.paramMap.get('viewing')) == "true";
  backgroundColor = "background-color: " + Color.Grey;
  title = "Create Note";
  buttonText = "Create";
  constructor(private alert: AlertService, private noteService: NoteService, private route : ActivatedRoute, private router: Router) { }

  ngOnInit(): void
  {
    if(this.viewing)
    {
      this.note = this.noteService.currentNote;
      this.note.readFlag = true;
      if(this.note.id != undefined)
      { 
        this.noteService.setReadFlag(this.note.id).subscribe(()=>{});
      }
      if(this.note.id == undefined)
      {
        this.router.navigate(['/home']);
      }
      this.title = "View Note";
      this.buttonText = "Update"
    }
    else if(this.note.id != undefined)
    {
      this.title = (this.editing) ? "Edit Note" : "View Note";
    }
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
    if(this.editing)
    {
      this.note.color = color;
      this.backgroundColor = "background-color: " + this.note.color + ";"
    }
  }
  setPriority(priority: any)
  {
    this.note.priority = priority.value;
  }
  saveNote()
  {
    if (this.note.title == "" || this.note.body == "")
    {
      this.alert.alert("Please fill out all the fields", 2000, false, 'center', 'warning');
    }
    else
    {
      let obs;
      if(this.viewing)
      {
        obs = this.noteService.updateNote(this.note);
      }
      else
      {
        obs = this.noteService.createNote(this.note);
      }
      obs.subscribe(res =>
      {
        if (res)
        {
          this.alert.alertWithCallback("Note saved successfully", 1500, false, ()=>{
            this.router.navigate(['/notes/']);
          }, 'center', 'success');
        }
        else
        {
          this.alert.alert("Failed to save", 2000, false, 'center', 'error');
        }
      });
    }
  }
}
