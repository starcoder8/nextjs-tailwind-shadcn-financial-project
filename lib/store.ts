import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

export interface FilterState {
  category: string;
  priceRange: [number, number];
  rating: number;
  features: string[];
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  isFilterPanelOpen: boolean;
  selectedProducts: string[];
  viewMode: 'grid' | 'table' | 'list';
}

interface FilterActions {
  setCategory: (category: string) => void;
  setPriceRange: (range: [number, number]) => void;
  setRating: (rating: number) => void;
  setFeatures: (features: string[]) => void;
  setSortBy: (sortBy: string) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  toggleFilterPanel: () => void;
  setFilterPanelOpen: (open: boolean) => void;
  toggleProductSelection: (productId: string) => void;
  setSelectedProducts: (products: string[]) => void;
  setViewMode: (mode: 'grid' | 'table' | 'list') => void;
  resetFilters: () => void;
}

const initialState: FilterState = {
  category: 'all',
  priceRange: [0, 10000],
  rating: 0,
  features: [],
  sortBy: 'rating',
  sortOrder: 'desc',
  isFilterPanelOpen: false,
  selectedProducts: [],
  viewMode: 'table',
};

export const useFilterStore = create<FilterState & FilterActions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setCategory: (category) => set({ category }),
        setPriceRange: (priceRange) => set({ priceRange }),
        setRating: (rating) => set({ rating }),
        setFeatures: (features) => set({ features }),
        setSortBy: (sortBy) => set({ sortBy }),
        setSortOrder: (sortOrder) => set({ sortOrder }),
        toggleFilterPanel: () => set((state) => ({ isFilterPanelOpen: !state.isFilterPanelOpen })),
        setFilterPanelOpen: (isFilterPanelOpen) => set({ isFilterPanelOpen }),
        toggleProductSelection: (productId) => set((state) => ({
          selectedProducts: state.selectedProducts.includes(productId)
            ? state.selectedProducts.filter(id => id !== productId)
            : [...state.selectedProducts, productId]
        })),
        setSelectedProducts: (selectedProducts) => set({ selectedProducts }),
        setViewMode: (viewMode) => set({ viewMode }),
        resetFilters: () => set({
          ...initialState,
          isFilterPanelOpen: get().isFilterPanelOpen,
          selectedProducts: get().selectedProducts,
          viewMode: get().viewMode,
        }),
      }),
      {
        name: 'finance-compare-filters',
        partialize: (state) => ({
          category: state.category,
          priceRange: state.priceRange,
          rating: state.rating,
          features: state.features,
          sortBy: state.sortBy,
          sortOrder: state.sortOrder,
          viewMode: state.viewMode,
        }),
      }
    )
  )
);