import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artwork } from 'app/models/artwork.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  constructor(private _http: HttpClient) { }

  getArtworks(): Observable<Artwork[]> {
    return this._http.get<Artwork[]>(environment.ENDPOINT_ARTWORK);
  }

  addArtwork(artwork: Artwork): Observable<Artwork> {
    return this._http.post<Artwork>(environment.ENDPOINT_ARTWORK, artwork);
  }
}
