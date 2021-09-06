import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './notes/components/note/note.component';
import { NotesListComponent } from './notes/components/notes-list/notes-list.component';
const routes: Routes = [
  {
    path: '',
    component: NotesListComponent,
    children: [
      {
        path: '',
        redirectTo: 'notes',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'note',
    component: NoteComponent
  },
  {
    path: '**',
    component: NotesListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
