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
  added_at: string;
  id: number;
  product: Product;
  quantity: number;
  selected_color: string;
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
  brand_id: number;
  original_price: number;
  sale_price: string | number;
  rating: number;
  review_count: number;
  short_description: string;
  detail_description: string;
  additional_information: string;
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

export interface Address {
  id: number;
  first_name: string;
  last_name: string;
  street_address: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  is_default: boolean;
}

export interface ProfileInfoProps {
  userData: {
    name?: string;
    email?: string;
    imageUrl?: string;
    addresses?: Address[];
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
  estimated_delivery: string;
  id: number;
  items: OrderItem[];
  payment_email: string;
  payment_method: string;
  payment_status: string;
  shipping_address: string;
  status: string;
}

export interface CheckoutFormProps {
  onSubmit: (formData: Record<string, any>) => void;
  loading: boolean;
}

export const requiredFieldsCheckOut = [
  "first_name",
  "last_name",
  "address",
  "city",
  "state",
  "pincode",
  "country",
  "userId",
];

export interface AdditionalInfoProps {
  info: string;
}

export interface SummaryItem {
  id: string;
  quantity: number;
  product: {
    id: number;
    title: string;
    sale_price: string;
    imageUrls: string[];
  };
}

export interface Summary {
  items: SummaryItem[];
  subtotal: number;
  shipping: number;
  total: number;
}
