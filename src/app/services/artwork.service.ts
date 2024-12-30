import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artwork } from 'app/models/artwork.model';
import { environment } from '@env/environment';
import { ArtworkType } from '@app/models/artwork-type.model';
import { CategoryType } from '@app/models/category-type.model';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {
  constructor(private _http: HttpClient) { }

  getArtworks(): Observable<Artwork[]> {
    return this._http.get<Artwork[]>(environment.ENDPOINT_ARTWORK);
  }

  // type: acrylic or oil
  getTypes(): Observable<ArtworkType[]> {
    return this._http.get<ArtworkType[]>(environment.ENDPOINT_TYPE);
  }

  // category: animal or landscape
  getCategory(): Observable<CategoryType[]> {
    return this._http.get<CategoryType[]>(environment.ENDPOINT_CATEGORY);
  }

  addArtwork(artwork: Artwork): Observable<Artwork> {
    return this._http.post<Artwork>(environment.ENDPOINT_ARTWORK, artwork);
  }
}

