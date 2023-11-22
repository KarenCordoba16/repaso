import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.scss'],
})
export class ReproductorComponent  implements OnInit {
  audioFiles: string[] = [];
  audio = new Audio();

  songs: any[] = [
    {
      nombre: 'Me voy enamorando - ',
      artista: 'Chino & Nacho'
    },
    {

    },
  ]

  constructor() {
    this.cargarArchivosDeAudio();
    // this.audio.src = '../../../assets/audio';
  }

  cargarArchivosDeAudio() {
    const numeroDeArchivos = 6; // Cambia esto según la cantidad de archivos que tengas

    // Utilizamos un ciclo for para construir los nombres de los archivos
    for (let i = 1; i <= numeroDeArchivos; i++) {
      const nombreArchivo = `audio${i}.mp3`; // Asumiendo que los archivos tienen nombres como "audio1.mp3", "audio2.mp3", etc.
      this.audioFiles.push(nombreArchivo);
    }

    // Cargamos el primer archivo de audio
    this.cargarAudio(0);
  }

  cargarAudio(indice: number) {
    if (indice < this.audioFiles.length) {
      const rutaArchivo = `../../../assets/audio/${this.audioFiles[indice]}`;
      this.audio.src = rutaArchivo;
      this.audio.load();

      // Puedes agregar más lógica aquí si es necesario

      console.log(`Archivo cargado: ${rutaArchivo}`);
    } else {
      console.log('Todos los archivos de audio han sido cargados');
    }
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }
  next() {
    this.audioFiles.length = (this.audioFiles.length + 1) % this.audioFiles.length;
    // this.audio.src = this.audioFiles
    
    
    
  }
  ngOnInit() {}

}

// currentSongIndex = 0;

// playNextSong() {
//   this.songs[this.currentSongIndex].pause();
//   this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
//   this.songs[this.currentSongIndex].play();
// }
