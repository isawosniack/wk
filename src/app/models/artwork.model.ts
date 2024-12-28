import { ArtworkType } from "./artwork-type.model";
import { CategoryType } from "./category-type.model";

export interface Artwork {
    ArtworkId?: number,
    Category?: CategoryType,
    Type?: ArtworkType,
    Name?: string,
    Price?: number,
    Description?: string,
    Size?: string,
    ImagePath?: string
}
