import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


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

  // constructor() {}

}
