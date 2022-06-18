import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as dataArtists from './artists.json';

@Injectable({
  providedIn: 'root'
})
export class PlatziMusicService {

  private urlapi = 'https://platzi-music-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getArtists() {
    return dataArtists;
    }

  getNewReleases(): any{
    return this.http.get(`${this.urlapi}/browse/new-releases`);
  }

  getArtistTopTracks(artistId): any {
    return this.http.get(`${this.urlapi}/artists/${artistId}/top-tracks?country=EC`);
  }

}
