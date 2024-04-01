export interface PropertyData {
    id: string;
    name: string;
    description: string;
    host_name: string;
    host_thumbnail_url: string;
    host_picture_url: string;
    smart_location: string;
    accommodates: number;
    bathrooms: number;
    bedrooms: number;
    beds: number;
    price: number;
    number_of_reviews: number;
    review_scores_rating: number;
    guestFavorite: boolean;
    images: string[];
  }