import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AddArtworkComponent } from './add-artwork/add-artwork.component';

export const routes: Routes = [
    { path: 'gallery', component: GalleryComponent }, // gallery route
    { path: 'artwork/add', component: AddArtworkComponent }, // Add artwork route
];
