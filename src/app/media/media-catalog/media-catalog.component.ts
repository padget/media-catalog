import { Component } from '@angular/core'
import { Media, SupportType, MediaType } from '../media.model';


@Component({
    selector: 'media-catalog',
    templateUrl: './media-catalog.component.html',
    styleUrls: ['./media-catalog.component.css']
})
export class MediaCatalogComponent {
    medias: Array<Media> = [new Media('Harry Potter', MediaType.livre, SupportType.livre, "J.K. Rowling")];
}
