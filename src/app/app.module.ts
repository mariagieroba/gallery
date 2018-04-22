import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {GalleryComponent} from './gallery/gallery.component';
import {NailPolishComponent} from './gallery/nail-polish/nail-polish.component';
import {NailPolishDetailComponent} from './gallery/nail-polish/nail-polish-detail/nail-polish-detail.component';
import {NailPolishEditComponent} from './gallery/nail-polish/nail-polish-edit/nail-polish-edit.component';
import {NailPolishItemComponent} from './gallery/nail-polish-item/nail-polish-item.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NailPolishService} from './gallery/nail-polish.service';
import { FilterPipe } from './filter.pipe';


@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        GalleryComponent,
        NailPolishComponent,
        NailPolishDetailComponent,
        NailPolishEditComponent,
        NailPolishItemComponent,
        FilterPipe

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [NailPolishService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
