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
  products: Product[];
  selectedCategory: string;
  selectedBrands: string[];
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
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
