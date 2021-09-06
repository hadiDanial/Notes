import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Color } from '../models/Color';
import { Note } from '../models/Note';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService
{
  currentNote: Note = new Note();
  constructor(private webService: WebService) { }
  public getAllNotes(): Observable<Note[]>
  {
    let data = new Map<string, any>();
    return this.webService.get<Note[]>("notes/getAllNotes", data);
  }
  public getAllNoteTitles(): Observable<string[]>
  {
    let data = new Map<string, any>();
    return this.webService.get<string[]>("notes/getAllNoteTitles", data);
  }

  
  public createNote(note:Note): Observable<boolean>
  {
    return this.webService.postJSON<boolean>("notes/createNote", JSON.stringify(note));
  }
  public updateNote(note: Note): Observable<boolean>
  {
    return this.webService.putJSON<boolean>("notes/updateNote", JSON.stringify(note));
  }
  public deleteNote(id: number)
  {
    return this.webService.deleteJSON<boolean>("notes/deleteNote",JSON.stringify(id));
  }
  public setReadFlag(id: number)
  {
    return this.webService.putJSON<boolean>("notes/setReadFlag", JSON.stringify(id));
  }
  public getAllColors(): Observable<Color[]>
  {
    let data = new Map<string, any>();
    return this.webService.get<Color[]>("notes/getAllColors", data);
  }
}
