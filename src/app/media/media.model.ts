/**
 *
 */
export enum MediaType { film, jeux, livre, musique }
/**
 *
 */
export enum SupportType { dvd, livre, cd }
/**
 *
 */
export class Media {
    public constructor(
        public title: string,
        public type: MediaType,
        public support: SupportType,
        public author: string) {
    }

    typeName(): string {
        return MediaType[this.type];
    }

    supportName(): string {
        return SupportType[this.support];
    }
}
