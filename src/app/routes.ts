import {Routes} from '@angular/router';
import {NailPolishDetailComponent} from './gallery/nail-polish/nail-polish-detail/nail-polish-detail.component';
import {GalleryComponent} from './gallery/gallery.component';

export const appRoutes: Routes = [
    {path: 'gallery', component: GalleryComponent},
    {path: 'polish/:id', component: NailPolishDetailComponent},
    {path: '', redirectTo: '/gallery', pathMatch: 'full'},
]