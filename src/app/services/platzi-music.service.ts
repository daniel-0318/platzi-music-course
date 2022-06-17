import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as dataArtists from './artists.json';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  private urlapi = 'https://platzi-music-api.herokuapp.com/browse/new-releases';

  constructor(private http: HttpClient) { }

  getArtists() {
    return dataArtists;
    }

  getNewReleases(): any{
    return this.http.get(this.urlapi);
  }

}
