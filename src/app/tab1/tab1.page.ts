import { Component } from '@angular/core';

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
      name: 'Pop',
      description: 'Descripción de la canción',
      image: 'URL de la imagen 1',
    },
    {
      name: 'Rock',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Cumbia',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Cuarteto',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Reggaeton',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Rock & Pop',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Trap',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Rap',
      description: 'Descripción de la Playlist 2',
      image: 'URL de la imagen 2',
    },
  ];

  constructor() {}


}