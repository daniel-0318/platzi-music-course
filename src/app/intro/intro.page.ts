import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IntroPage implements OnInit {

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

  constructor(private router: Router, private storage:Storage) { }

  finish(){
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl("/home")
  }

  async ngOnInit() {
    await this.storage.create();
  }
}
