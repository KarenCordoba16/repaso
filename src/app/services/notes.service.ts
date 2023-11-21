// src/app/services/notes.service.ts
import { Injectable } from '@angular/core';
import { Note } from '../notas.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notes: Note[] = [];

  getNotes() {
    return this.notes.slice();
  }

  addNote(title: string, content: string) {
    const newNote: Note = {
      id: Math.random().toString(),
      title,
      content,
      createdAt: new Date(),
    };
    this.notes.push(newNote);
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((note) => note.id !== id);
  }
}
