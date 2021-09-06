import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Color } from '../models/Color';
import { Icon } from '../models/Icon';
import { Note } from '../models/Note';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService
{
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

  
  public createNote(title: string, body: string, priority: number, readFlag: boolean, color: Color, icon: Icon): Observable<boolean>
  {
    let data = new Map<string, any>();
    let note : Note = new Note(title,body,priority,readFlag,color,icon);
    data.set("title", title)
    .set("body", body)
    .set("priority", priority)
    .set("readFlag", readFlag)
    .set("color", color.valueOf())
    .set("icon", icon.valueOf());
    alert(JSON.stringify(data))
    return this.webService.postJSON<boolean>("notes/createNote", JSON.stringify(note));
  }
  
  deleteNote(id: any)
  {
    throw new Error('Method not implemented.');
  }
  public getAllColors(): Observable<Color[]>
  {
    let data = new Map<string, any>();
    return this.webService.get<Color[]>("notes/getAllColors", data);
  }
}
