import { Component, ViewEncapsulation } from '@angular/core';
import { PlatziMusicService } from '../services/platzi-music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  artists: any[] = [];
  songs: any[] = [];
  albums: any[] = [];

  slideOps = {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 4,
    grabCursor: true,
    spaceBetween: 30,
    speed: 400,
  };

  constructor(private musicService: PlatziMusicService) {}
  
  // renderiza cambios en la entrada directamente en la vista
  ionViewDidEnter(){
    this.fetchNewReleases();
  }

  fetchNewReleases() {
    this.musicService.getNewReleases().subscribe(release => {
      this.artists = release.albums.items;
      console.log(this.artists);
      this.songs = this.artists.filter(e => e.album_type ==='single');
      this.albums = this.artists.filter(e => e.album_type ==='album');
    });
   }

}
