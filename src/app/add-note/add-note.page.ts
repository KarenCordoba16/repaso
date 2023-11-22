import { Component } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage {
  title: string = '';
  content: string = '';

  constructor(private notesService: NotesService, private router: Router) {}

  saveNote() {
    if (this.title && this.content) {
      this.notesService.addNote(this.title, this.content);
      this.router.navigate(['/notas']);
    }
  }
  back() {
    this.router.navigate(['/notas'])
  }
}
