import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../../models/Note';
import { AlertService } from '../../services/alert.service';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.scss']
})
export class NotesListItemComponent implements OnInit
{

  @Input()
  note: Note = new Note();
  @Output()
  emitter: EventEmitter<Note>= new EventEmitter<Note>();
  backgroundColor = "background-color: " + this.note.color;
  readStatus = (this.note.readFlag) ? "Read" : "Unread";
  constructor(private noteService: NoteService, private router: Router, private alert: AlertService) { }
  
  ngOnInit(): void
  {
    this.backgroundColor = "background-color: " + this.note.color;
    this.readStatus = (this.note.readFlag) ? "Read" : "Unread";
  }
  viewNote()
  {
    this.noteService.currentNote = this.note;
    this.router.navigate(['/note/', { viewing: 'true' }]);
  }
  deleteNote()
  {
    if (this.note.id != undefined)
    {
      let obs = this.noteService.deleteNote(this.note.id);
      obs.subscribe(val => 
      {
        if(val)
        {
          this.alert.alert("Note deleted", 1000, false, 'center', 'success');
          this.emitter.emit(this.note);
        }
        else
        {
          this.alert.alert("Failed to delete...", 1000, false, 'center', 'error');
        }
      })
    }
  }
}
