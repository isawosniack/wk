import { CommonModule } from '@angular/common';
import { Component, inject, Input, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { ArtworkType } from '@app/models/artwork-type.model';
import { Artwork } from '@app/models/artwork.model';
import { CategoryType } from '@app/models/category-type.model';


@Component({
  selector: 'app-image-modal',
  imports: [CommonModule, MatDialogModule, MatDialogContent],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss'
})


export class ImageModalComponent {

  readonly dialogRef = inject(MatDialogRef<ImageModalComponent>);
  readonly data: Artwork = inject<Artwork>(MAT_DIALOG_DATA);
  // readonly imagePath = model(this.data.imagePath);
  // readonly name = model(this.data.name);
  // readonly description = model(this.data.description);
  // readonly category = model(this.data.categoryDescription);
  // readonly type = model(this.data.type.Description);
  
  constructor() {
    // console.log(this.data.categoryDescription)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  moreInformation(): void {
    
  }

}
