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
      image: 'URL de la imagen 1',
    },
    {
      name: 'Rock',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Cumbia',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Cuarteto',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Reggaeton',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Rock & Pop',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Trap',
      image: 'URL de la imagen 2',
    },
    {
      name: 'Rap',
      image: 'URL de la imagen 2',
    },
  ];

  constructor() {}


}