export interface Review {
    username: string;
    rating: number;
    comment: string;
  }
  
  export interface Product {
    id: number;
    title: string;
    type: string;
    category: string;
    brand: string;
    originalPrice: number;
    salePrice: number;
    rating: number;
    reviewCount: number;
    shortDescription: string;
    detailDescription: string;
    additionalInformation: string;
    colors: string[];
    reviews: Review[];
    imageUrls: string[];
  }