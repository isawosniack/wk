import { Component, OnInit, Sanitizer } from '@angular/core';
import { ArtworkService } from '@app/services/artwork.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, NgSelectOption } from '@angular/forms';
import { ArtworkType } from '@app/models/artwork-type.model';
import { CategoryType } from '@app/models/category-type.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-artwork',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-artwork.component.html',
  styleUrl: './add-artwork.component.scss'
})
export class AddArtworkComponent implements OnInit {
  artworkForm: FormGroup;
  artworkType: ArtworkType[] = [];
  categoryType: CategoryType[] = [];

  constructor(private _artworkService: ArtworkService,
    private _fb: FormBuilder
  ) {
    this.artworkForm = this._fb.group({
      Name: [""],
      Price: [""],
      Type: [""],
      Category: [""],
      Description: [""],
      Size: [""],
      ImagePath: [""]
    })
  }

  ngOnInit(): void {
    this.loadArtworkType();
    this.loadCategoryType();
  }

  saveArtwork() {

  }

  loadArtworkType() {
    this._artworkService.getTypes().subscribe(data => {
      this.artworkType = data;
      console.log(data);
    });
  }

  loadCategoryType() {
    this._artworkService.getCategory().subscribe(data => {
      this.categoryType = data;
      console.log(data);
    });
  }

}
