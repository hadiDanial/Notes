import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './notes/components/note/note.component';
import { NotesListComponent } from './notes/components/notes-list/notes-list.component';
import { NotesListItemComponent } from './notes/components/notes-list-item/notes-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { ColorBoxComponent } from './notes/components/color-box/color-box.component';
import { ColorPickerComponent } from './notes/components/color-picker/color-picker.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
    NotesListItemComponent,
    ColorBoxComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatSliderModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
