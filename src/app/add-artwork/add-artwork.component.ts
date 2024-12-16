import { Component, OnInit, Sanitizer } from '@angular/core';
import { ArtworkService } from '@app/services/artwork.service';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-artwork',
  imports: [ReactiveFormsModule],
  templateUrl: './add-artwork.component.html',
  styleUrl: './add-artwork.component.scss'
})
export class AddArtworkComponent implements OnInit {
  artworkForm: FormGroup;

  constructor(private _artworkService: ArtworkService,
    private _fb: FormBuilder
  ) {
    this.artworkForm = this._fb.group({
      Name: [""],
      Price: [""],
      Type: [""],
      Description: [""],
      Size: [""],
      ImagePath: [""]
    })
  }

ngOnInit(): void {
  
}

saveArtwork(){
  
}

}
