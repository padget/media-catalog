import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MediaCatalogComponent } from './media/media-catalog/media-catalog.component'

@NgModule({
    declarations: [
        AppComponent,
        MediaCatalogComponent
    ],
    imports: [
        FormsModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
