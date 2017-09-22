import { Component } from '@angular/core';
import { MediaCatalogComponent } from './media/media-catalog/media-catalog.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    viewProviders: [MediaCatalogComponent]
})
export class AppComponent {
}
