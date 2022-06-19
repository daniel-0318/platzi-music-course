import { Component, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlatziMusicService } from '../services/platzi-music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

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

  constructor(private musicService: PlatziMusicService, private modalController: ModalController) {}
  
  // renderiza cambios en la entrada directamente en la vista
  ionViewDidEnter(){
    this.fetchNewReleases();
  }

  fetchNewReleases() {
    this.musicService.getNewReleases().subscribe(release => {
      this.artists = this.musicService.getArtists().items;
      this.songs = release.albums.items.filter(e => e.album_type ==='single');
      this.albums = release.albums.items.filter(e => e.album_type ==='album');
    });
   }

   async showSongs(artist){
    let songs_art;
    this.musicService.getArtistTopTracks(artist.id).subscribe(async release => {
      songs_art = release.tracks;
      console.log("--------------");
      console.log(release.tracks);
      console.log("--------------");
      const modal = await this.modalController.create({
        component: SongsModalPage,
        componentProps: {
          songs: songs_art,
          artist: artist.name
        }
      });
      return await modal.present();
    });
    
   }

}
