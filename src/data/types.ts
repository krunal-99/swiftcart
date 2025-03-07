export interface Review {
    username: string,
    rating: number,
    comment: string,
  }

  export interface Cart {
    id:number,
    imageUrl: string,
    title: string,
    color: string,
    price: number,
    cartQuantity: number,
    total: number
  }

  export interface Wishlist {
    id:number,
    imageUrl: string,
    title:string,
    type:string,
    originalPrice: number,
    salePrice: number,
    colors: string[],
    listQuantity:number
  }
  
  export interface Product {
    id: number,
    title: string,
    type: string,
    category: string,
    brand: string,
    originalPrice: number,
    salePrice: number,
    rating: number,
    reviewCount: number,
    shortDescription: string,
    detailDescription: string,
    additionalInformation: string,
    colors: string[],
    reviews: Review[],
    imageUrls: string[],
  }

  export interface FilterState {
    category: string;
    priceRange: [number, number];
    brands: string[];
    sortBy: string;
  }
  
  export type SortOption = 'popularity' | 'price-low' | 'price-high' | 'name-asc' | 'name-desc';