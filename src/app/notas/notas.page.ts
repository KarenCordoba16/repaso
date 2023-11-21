import { Component } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})

export class NotasPage {
  constructor(private notesService: NotesService, private router: Router) {}

  get notes() {
    return this.notesService.getNotes();
  }

  deleteNote(noteId: string) {
    this.notesService.deleteNote(noteId);
  }

  addNote() {
    this.router.navigate(['/add-note']);
  }
}
