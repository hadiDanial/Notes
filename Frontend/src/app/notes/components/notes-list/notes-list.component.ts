import { Component, OnInit } from '@angular/core';
import { Note } from '../../models/Note';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    let obs = this.noteService.getAllNotes();
    obs.subscribe(notes => {
      this.notes = notes;
    })
  }
  updateList(noteToRemove: Note)
  {
    let index = this.notes.indexOf(noteToRemove);
    this.notes.splice(index, 1);
  }
}
