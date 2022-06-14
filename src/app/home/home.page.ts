import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage {

  slides = [
    {
      imageSrc:"../../assets/img/logo.png",
      imageAlt:"Platzi Music Logo",
      title:"Escucha tu musica",
      subTitle:"EN CUALQUIER LUGAR",
      description:"los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.",
      icon:"play"
  },
  {
    imageSrc:"../../assets/img/logo.png",
    imageAlt:"Platzi Music Logo",
    title:"Disfruta de nuestro reproductor",
    subTitle:"de videos increibles",
    description:"Entra al modo video de nuestro reproductor y obtén acceso a documentales y making offs increíbles de tu artista favorito",
    icon:"videocam"
  },
  {
    imageSrc:"../../assets/img/logo.png",
    imageAlt:"Platzi Music Logo",
    title:"Accede al exclusivo",
    subTitle:"Modo deporte",
    description:"Crea una playlist basada en tu actividad física. Ten reportes y acceso a lo que necesites, integrado con GPS!",
    icon:"bicicle"
  },

]

  constructor() {}

}
