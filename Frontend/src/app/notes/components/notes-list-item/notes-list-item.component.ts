import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../models/Note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes-list-item',
  templateUrl: './notes-list-item.component.html',
  styleUrls: ['./notes-list-item.component.scss']
})
export class NotesListItemComponent implements OnInit {

  @Input()
  note: Note = new Note();
  backgroundColor = "background-color: " + this.note.color;
  constructor(private noteService: NoteService) { }
  
  ngOnInit(): void {
    this.backgroundColor = "background-color: " + this.note.color;
  }
  viewNote()
  {

  }
  deleteNote()
  {
    this.noteService.deleteNote(this.note.id);
  }
}
