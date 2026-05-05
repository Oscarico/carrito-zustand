import { create } from "zustand";
import type { Automovil, CartItem } from "../types";
import { persist } from "zustand/middleware";

const MAX_QUANTITY = 10;

type CartState = {
  cart: CartItem[];
  addToCart: (automovi: Automovil) => void;
  deleteFromCart: (automoviId: number) => void;
  clearCart: () => void;
  updateQuantity: (automoviId: number, adjustQuantity: number) => void;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      // Iniciamos el carrito como un arreglo vacio
      cart: [],
      // Agregamos un elemento al carrito
      addToCart: (automovil) =>
        set((state) => {
          // Verificamos si el automóvil ya existe en el carrito
          const automovilExiste = state.cart.find(
            (item) => item.id === automovil.id,
          );

          // Si el automóvil ya existe, lo incrementamos en el carrito
          // Si no, lo agregamos al carrito
          return {
            cart: automovilExiste
              ? // El item ya existe, incrementamos su cantidad
                state.cart.map((item) =>
                  item.id === automovil.id
                    ? {
                        ...item,
                        quantity: Math.min(item.quantity + 1, MAX_QUANTITY),
                      }
                    : item,
                )
              : // El item no existe, agregamos al carrito 1
                [
                  ...state.cart,
                  {
                    ...automovil,
                    quantity: 1,
                  },
                ],
          };
        }),

      // Eliminamos un elemento del carrito
      deleteFromCart: (automoviId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== automoviId),
        })),

      // Limpiamos el carrito
      clearCart: () =>
        set({
          cart: [],
        }),

      // Actualizamos la cantidad de un elemento del carrito
      updateQuantity: (automoviId, adjustQuantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === automoviId
              ? {
                  ...item,
                  quantity: Math.min(
                    Math.max(item.quantity + adjustQuantity, 1),
                    MAX_QUANTITY,
                  ),
                }
              : item,
          ),
        })),

      // obtenemos el costo total del carrito
      totalPrice: () =>
        get().cart.reduce(
          (total, { price, quantity }) => total + price * quantity,
          0,
        ),
    }),
    {
      name: "cart-storage",
    },
  ),
);
