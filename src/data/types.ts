import { ReactNode } from "react";

export interface Review {
  username: string;
  rating: number;
  comment: string;
}

export interface CartData {
  id: number;
  createdAt: string;
  updatedAt: string;
  items: CartItems[];
}

export interface CartProps {
  cart: {
    cart: CartData[];
  };
}

export interface CartItems {
  addedAt: string;
  id: number;
  product: Product;
  quantity: number;
  selectedColor: string;
}

export interface Wishlist {
  id: number;
  product: Product;
  productId: number;
  userId: number;
}

export interface Product {
  id: number;
  title: string;
  type: string;
  brandId: number;
  originalPrice: number;
  salePrice: string | number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  detailDescription: string;
  additionalInformation: string;
  colors: string[];
  imageUrls: string[];
  reviews: Review[];
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

export interface ProductState {
  category: number;
  brands: string[];
  filteredProducts: Product[];
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
  item?: Wishlist;
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

export interface ProfileInfoProps {
  userData: {
    name: string;
    email: string;
    imageUrl: string;
    address?: {
      street: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
  };
}

export interface JWTPayload {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  iat: number;
  exp: number;
}

export interface OrderItem {
  id: number;
  image: string;
  name: string;
  price: string;
  quantity: number;
}

export interface Order {
  date: string;
  estimatedDelivery: string;
  id: number;
  items: OrderItem[];
  paymentEmail: string;
  paymentLast4: string | null;
  paymentMethod: string;
  paymentStatus: string;
  shippingAddress: string;
  status: string;
}
