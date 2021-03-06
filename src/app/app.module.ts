import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {GalleryComponent} from './gallery/gallery.component';
import {NailPolishComponent} from './gallery/nail-polish/nail-polish.component';
import {NailPolishDetailComponent} from './gallery/nail-polish/nail-polish-detail/nail-polish-detail.component';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NailPolishService} from './gallery/nail-polish/shared/nail-polish.service';
import {FilterSeriesPipe} from './gallery/nail-polish/shared/filterSeries.pipe';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {Globals} from './gallery/nail-polish/shared/globals';
import {FilterService} from './gallery/nail-polish/shared/filter.service';


@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        GalleryComponent,
        NailPolishComponent,
        NailPolishDetailComponent,
        FilterSeriesPipe
        // FilterSeriesPipe

    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [Globals, NailPolishService, FilterSeriesPipe, FilterService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
