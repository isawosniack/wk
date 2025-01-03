import { CommonModule } from '@angular/common';
import { Component, inject, Input, model } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';


export interface DialogData {
  imagePath: string;
  name: string;
}

@Component({
  selector: 'app-image-modal',
  imports: [CommonModule, MatDialogModule, MatDialogContent, MatDialogActions, MatDialogTitle],
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.scss'
})


export class ImageModalComponent {

  readonly dialogRef = inject(MatDialogRef<ImageModalComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly imagePath = model(this.data.imagePath);
  readonly name = model(this.data.name);

  constructor() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  moreInformation(): void {
    
  }
}
