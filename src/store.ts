// hook components pages
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "@/types/ProductType";

// estado do carrinho
type CartState = {
    cart: ProductType[];
    //  addToCart: (product: ProductType) => void;
    //  removeFromCart: (productId: string) => void;
    isOpen: boolean;
    toogleCart: () => void;
};

export const useCartStore = create <CartState>()(
    persist(
        (set) => ({
            cart: [],
            isOpen: false,
            toogleCart: () => set((state) => ({ isOpen: !state.isOpen }))
        }),

        { name: 'cart-storage' }
    )
);