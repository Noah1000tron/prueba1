import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
      console.log("Spotify Service listo");
  }

  getQuery(query:string){
    const url =`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({'Authorization':'Bearer BQCEldQMC6y5pR6mNTDOTHzew-Ls4sZ3HChP0xsNLVdx3FYByJX4hbahB9fh7jKncMMLvLEYdIQ5S3ms6SFeZjd9oiDegUc7FcMERhsBvjEhLVxhbZk'})
    return this.http.get(url, {headers});
    }
    getArtistas(termino: string){
      console.log(termino);
    return this.getQuery(`search?q=${termino}&type=artist&limit=6`)
    .pipe( map ( (data:any) => (data.artists.items )));
    }
    getArtista(id: string){
      return this.getQuery(`artists/${id}`);
      }
      getTopTracks ( id:string){
      return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe( map ( (data:any) => data['tracks']));
      }

}
