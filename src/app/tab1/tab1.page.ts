import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  email: string = '';
  password: string = '';

  playlists: any[] = [
    {
      name: 'Nombre Canción',
      description: 'Descripción de la canción',
      image: 'URL de la imagen 1',
    },
    {
      name: 'Playlist 2',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Playlist 2',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Playlist 2',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Playlist 2',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Playlist 2',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Playlist 2',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Playlist 2',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
  ];

  constructor(private router: Router) {}

  goToTab2(): void {
    this.router.navigate(['/tab2']);
  }
}