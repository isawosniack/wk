import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { Artwork } from 'app/models/artwork.model';
import { ArtworkService } from 'app/services/artwork.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ImageModalComponent } from '@app/image-modal/image-modal.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CategoryType } from '@app/models/category-type.model';
import { ArtworkType } from '@app/models/artwork-type.model';


@Component({
  selector: 'app-gallery',
  imports: [CommonModule, MatDialogModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit{
  @ViewChild('imageModal') imageModal: ImageModalComponent | undefined;
  artworks: Artwork[] = [];
  selectedImage: string | null = null;

  constructor(private _artworkService: ArtworkService,
    private _matDialog: MatDialog
  ) {
  
  }

  ngOnInit(): void {
    this.loadArtworks();
  }

  loadArtworks() {
    this._artworkService.getArtworks().subscribe(data => {
      this.artworks = data;
      // console.log(data);
    });
  }

  readonly dialog = inject(MatDialog);

  openDialog(artwork : Artwork): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: artwork,
      width: '30vw',
      maxWidth: '90vw',
      height: '70vh',
      maxHeight: '90vh'
    });
  }
}
