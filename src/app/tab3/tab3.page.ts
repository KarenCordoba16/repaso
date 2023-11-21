import { Component } from '@angular/core';


interface UserProfile {
  username: string;
  followers: number;
  favoriteMusic: string;
  birthdate: string;
  location: string;
  isFollowing: boolean;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userProfile: UserProfile = {
    username: 'Nombre de Usuario',
    followers: 100000,
    favoriteMusic: 'Rock',
    birthdate: '01/01/1990',
    location: 'Ciudad, País',
    isFollowing: false
  };

  constructor() {}

  toggleFollow(): void {
    this.userProfile.isFollowing = !this.userProfile.isFollowing;
    // Aquí podrías realizar una acción adicional, como enviar una solicitud al servidor para actualizar el estado de seguimiento.
  }
}

