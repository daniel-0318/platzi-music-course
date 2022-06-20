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
  current_song: any = {};
  newTime;

  song: any = {};

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
      const modal = await this.modalController.create({
        component: SongsModalPage,
        componentProps: {
          songs: songs_art,
          artist: artist.name
        }
      });

      modal.onDidDismiss().then(dataReturned=>{
        this.song = dataReturned.data;
      });

      return await modal.present();
    });
    
   }

   play(){
    this.current_song = new Audio(this.song.preview_url)
    this.current_song.play();
    this.current_song.addEventListener("timeupdate",()=>{
      this.newTime = (this.current_song.currentTime / this.current_song.duration);
    });
    this.song.playing=true;
   }

   pause(){
    this.current_song.pause();
    this.song.playing=false;
   }

   parseTime(time="0.00"){
    if(time){
      const parTime = parseInt(time.toString().split(".")[0], 10);
      let minutes = Math.floor(parTime/60).toString();
      if(minutes.length==1){
        minutes="0"+minutes;
      }
      let seconds = (parTime%60).toString();
      if(seconds.length==1){
        seconds= "0"+ seconds;
      }
      return minutes+ ":" + seconds;
    }
   }

   showAlbums(album) {
    this.musicService.getAlbumTracks(album.id).subscribe(songs => {
      this.modalAlbum(songs, album);
    }, error => {
      console.error(error);
    });
  }

  async modalAlbum(songs, album) {
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.items,
        artist: album.name
      }
    });
  
    modal.onDidDismiss().then(dataReturned => {
      this.song = dataReturned.data;
      });
      return modal.present();
    }

}
