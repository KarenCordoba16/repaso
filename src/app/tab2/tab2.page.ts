import { Component, ViewChild, EventEmitter, Output, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotasPage } from '../notas/notas.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
    'assets/fotos/Becky-G.jfif'

  ];

  constructor(private router: Router) {}

  publicaciones() {
    this.router.navigate(['../notas/'])
  }

}

