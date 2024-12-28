import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Artwork } from 'app/models/artwork.model';
import { ArtworkService } from 'app/services/artwork.service';
import { CommonModule } from '@angular/common'; // Import CommonModule


@Component({
  selector: 'app-gallery',
  imports: [HttpClientModule, CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{

  artworks: Artwork[] = [];

  constructor(private _artworkService: ArtworkService) {

  }

  ngOnInit(): void {
    this.loadArtworks();
  }

  loadArtworks() {
    this._artworkService.getArtworks().subscribe(data => {
      this.artworks = data;
      console.log(data);
    });
  }

}
