import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})
export class ReproductorComponent  implements OnInit {
  audioFiles: string[] = [];
  audio = new Audio();
  currentIndex: number = 0;
  currentSong: any = {};

  songs: any[] = [
    {
      nombre: 'Me voy enamorando - ',
      artista: 'Chino & Nacho',
    },
    {
      nombre: 'La Gozadera - ',
      artista: 'Gente de Zona',
    },
    {
      nombre: 'Reggaeton Lento - ',
      artista: 'CNCO',
    },
    {
      nombre: 'Despacito - ',
      artista: 'Luis Fonsi',
    },
    {
      nombre: 'Hey DJ - ',
      artista: 'CNCO',
    },
    {
      nombre: 'New Divide - ',
      artista: 'Linkin Park',
    },
  ]

  constructor() {
    this.cargarArchivosDeAudio();

  }

  cargarArchivosDeAudio() {
    const numeroDeArchivos = 6; 

    for (let i = 1; i <= numeroDeArchivos; i++) {
      const nombreArchivo = `audio${i}.mp3`; 
      this.audioFiles.push(nombreArchivo);
    }


    this.cargarAudio(this.currentIndex);
  }

  cargarAudio(indice: number) {
    if (indice >= 0 && indice < this.audioFiles.length) {
      const rutaArchivo = `../../../assets/audio/${this.audioFiles[indice]}`;
      this.audio.src = rutaArchivo;
      this.audio.load();
      this.currentSong = this.songs[indice];

      console.log(`Archivo cargado: ${rutaArchivo}`);
    } else {
      console.log('Todos los archivos de audio han sido cargados');
    }
  }

  play() {
    this.audio.play();
    this.songs.length;
  }

  pause() {
    this.audio.pause();
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.audioFiles.length;
    this.cargarAudio(this.currentIndex);
    this.play();
  }

  previous() {
    this.currentIndex = (this.currentIndex - 1 ) % this.audioFiles.length;
    this.cargarAudio(this.currentIndex);
    this.play();
  }
  ngOnInit() {}

}

