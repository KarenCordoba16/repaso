import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Usuarios {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  usuario: Usuarios[] = [
    {
      nombre: "",
      apellido: "",
      email: "",
      password: "",
    },
  ];

  usuarioAgregar: Usuarios = {
    nombre: '',
    apellido: '',
    email : '',
    password: ''
  };

  constructor(private router: Router) {}

  
  loginFormSubmit(): void {

    const usuarioEncontrado = this.usuario.find((u)  => u.email === this.usuarioAgregar.email);

    if (usuarioEncontrado && usuarioEncontrado.password === this.usuarioAgregar.password) {
      alert('¡Acceso concedido!')
      this.router.navigate(['../tabs/']);

    } else {

      alert('Acceso denegado, inténtelo nuevamente');
    }
  }
}
