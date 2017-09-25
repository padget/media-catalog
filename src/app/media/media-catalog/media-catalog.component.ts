import { Component } from '@angular/core'
import * as _ from 'lodash'
import { Media, SupportType, MediaType } from '../media.model';


@Component({
    selector: 'media-catalog',
    templateUrl: './media-catalog.component.html',
    styleUrls: ['./media-catalog.component.css']
})
export class MediaCatalogComponent {

    selected_type: string;
    selected_support: string;
    typed_title: string;
    typed_author: string;

    medias: Array<Media> = [];
    medias_search_results: Array<Media> = [];

    private save_new_media(): void {
        if (this.typed_title
            && this.selected_support
            && this.selected_type) {

            this.medias.push(
                new Media(
                    this.typed_title,
                    MediaType[this.selected_type],
                    SupportType[this.selected_support],
                    this.typed_author));

            this.free_new_media_form();
        }
    }

    private search_a_media(): void {
        this.free_medias_search_results();
        _.forEach(
            this.medias,
            media => {
                if (media.title === this.typed_title) {
                    this.medias_search_results.push(media);
                }
            });
    }

    private free_new_media_form(): void {
        this.selected_support = null;
        this.selected_type = null;
        this.typed_title = "";
    }

    private free_medias(): void {
        this.medias = [];
    }

    private free_medias_search_results(): void {
        this.medias_search_results = [];
    }



    private media_types(): Array<string> {
        let types = new Array<string>();

        for (let typeKey in MediaType)
            if (!isNaN(Number(typeKey)))
                types.push(MediaType[typeKey]);

        return types;
    }

    private media_supports(): Array<string> {
        let types = new Array<string>();

        for (let typeKey in SupportType)
            if (!isNaN(Number(typeKey)))
                types.push(SupportType[typeKey]);

        return types;
    }
}
