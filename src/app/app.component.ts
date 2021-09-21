import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = '';
  nombre = '';
  apellido = '';
  blogs = ['Titulo1', 'Titulo2', 'Titulo3', 'Titulo4', 'Titulo5', 'Titulo6'];
  cargo: string = '';
  registrado = false;

  registrarUsuario() {
    this.registrado = true;
    this.mensaje = `Usuario Registrado con exito: ${this.nombre} - ${this.apellido}`;
  }
}
