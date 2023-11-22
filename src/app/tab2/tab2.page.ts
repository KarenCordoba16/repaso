import { Component, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  followers: any[] = [
    {cantidad: 100000, artista:'Sebastián Yatra', nacimiento: 'Nacimiento15 de octubre de 1994 (29 años)',
    proveniencia: 'Medellín, Colombia', ocupacion: 'Cantante y compositor', genero: 'Latina Pop'},
    {cantidad: 100000, artista:'Sebastián Yatra', nacimiento: 'Nacimiento15 de octubre de 1994 (29 años)',
    proveniencia: 'Medellín, Colombia', ocupacion: 'Cantante y compositor', genero: 'Latina Pop'},
    {cantidad: 100000, artista:'Sebastián Yatra', nacimiento: 'Nacimiento15 de octubre de 1994 (29 años)',
    proveniencia: 'Medellín, Colombia', ocupacion: 'Cantante y compositor', genero: 'Latina Pop'},
    {cantidad: 100000, artista:'Sebastián Yatra', nacimiento: 'Nacimiento15 de octubre de 1994 (29 años)',
    proveniencia: 'Medellín, Colombia', ocupacion: 'Cantante y compositor', genero: 'Latina Pop'},
    {cantidad: 100000, artista:'Sebastián Yatra', nacimiento: 'Nacimiento15 de octubre de 1994 (29 años)',
    proveniencia: 'Medellín, Colombia', ocupacion: 'Cantante y compositor', genero: 'Latina Pop'},
    {cantidad: 100000, artista:'Sebastián Yatra', nacimiento: 'Nacimiento15 de octubre de 1994 (29 años)',
    proveniencia: 'Medellín, Colombia', ocupacion: 'Cantante y compositor', genero: 'Latina Pop'},

  ]
  @ViewChild(IonContent)
  content!: IonContent;

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  photos: Array<string> = [
    'assets/fotos/Sebastian-Yatra.jpg',
    'assets/fotos/Michael-Jackson.jpg',
    'assets/fotos/Sofia-Reyes.jfif',
    'assets/fotos/Becky-G.jfif',
    'assets/fotos/Adele.jfif',
    'assets/fotos/Selena-Gomez.jpg',

  ];

  constructor(private router: Router) {}

  publicaciones() {
    this.router.navigate(['../notas/'])
  }

}

