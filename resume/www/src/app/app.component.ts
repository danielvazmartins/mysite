import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contato = {
    name: 'Daniel Vaz Villalobos Martins',
    occupation: 'Analista / Desenvolvedor de Sistemas',
    mobile: '(11) 96450-0218',
    email: 'danielvazmartins@gmail.com'
  };
}
