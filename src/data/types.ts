import { ReactNode } from "react";

export interface Review {
  username: string;
  rating: number;
  comment: string;
}

export interface Cart {
  id: number;
  imageUrl: string;
  title: string;
  color: string;
  price: number;
  cartQuantity: number;
  total: number;
}

export interface Wishlist {
  id: number;
  imageUrl: string;
  title: string;
  type: string;
  originalPrice: number;
  salePrice: number;
  colors: string[];
  listQuantity: number;
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

export interface FilterState {
  category: string;
  priceRange: [number, number];
  brands: string[];
  sortBy: string;
}

export type SortOption =
  | "popularity"
  | "price-low"
  | "price-high"
  | "name-asc"
  | "name-desc";

export interface FilterSidebarProps {
  isMobile: boolean;
  onClose?: () => void;
  categories: Categories[];
  isLoading: Boolean;
  selectedCategory: number;
  selectedBrands: string[];
  priceRange: [number, number];
  onCategoryChange: (category: number) => void;
  onBrandChange: (brands: string[]) => void;
  onPriceChange: (range: [number, number]) => void;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface ShopHeroProps {
  title: string;
  subtitle: string;
  onFilterClick?: () => void;
  sortBy: string;
  onSortChange: (value: SortOption) => void;
}

export interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export interface cartItemsSchema {
  cartItems: Cart[];
  totalCartQuantity: number;
  totalCartAmount: number;
}

export interface ProductState {
  items: Product[];
  filters: FilterState;
  searchTerm: string;
}

export interface wishListType {
  list: Wishlist[];
  listQuantity: number;
}

export interface ProductCardProps {
  product: Product;
  isLoading: Boolean;
}

export interface shopCardData {
  id: number;
  name: string;
  label: string;
  imageUrl: string;
}

export interface ShopCardProps {
  data: shopCardData | null;
  onClick: () => void;
  isLoading: Boolean;
}

export interface ListCardProps {
  product: Wishlist;
}

export interface FilterParams {
  page?: number;
  search?: string;
  category?: number;
  priceRange?: [number, number];
  brands?: string[];
  sortBy?: SortOption;
}

export interface CarouselComponentProps {
  carouselData: Product[];
}

export interface PrivateRouteProps {
  children: ReactNode;
  redirectTo?: string;
}

export interface Brand {
  id: number;
  name: string;
  categoryId: number;
}
export interface Categories {
  id: number;
  name: string;
  label: string;
  imageUrl: string;
  brands: Brand[];
}

export interface AuthState {
  isAuthenticated: boolean;
  user: {
    id?: number;
    name?: string;
    email?: string;
    imageUrl?: string;
  } | null;
  token: string | null;
}

export type contactUser = {
  name?: string;
  email?: string;
  phone?: number;
  subject?: string;
  message?: string;
};
