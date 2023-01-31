import { create } from "zustand";
import { persist } from "zustand/middleware";

// const CartStore = (set) => ({
//   cart: [],
//   totalPrice: 0,
//   addItem: (e) => {
//     set((state) => ({
//       cart: [e, ...state.cart],
//       totalPrice: Math.round(state.totalPrice + Number(e.price)),
//     }));
//   },
//   removeItem: (e) => {
//     set((state) => ({
//       cart: state.cart.filter((f) => f.id != e.id),
//       totalPrice: Math.round(state.totalPrice - Number(e.price)),
//     }));
//   },
//   emptyCart: () => {
//     set((state) => ({
//       cart: [],
//       totalPrice: 0,
//     }));
//   },
// });

// const useCartStore = create(
//   persist(CartStore, {
//     name: cart,
//   })
// );

// export default useCartStore;

const CartStore = (set) => ({
  cart: [],
  totalPrice: 0,
  addItem: (e) => {
    set((state) => ({
      cart: [e, ...state.cart],
      totalPrice: Math.ceil(state.totalPrice + Number(e.price)),
    }));
  },
  removeItem: (d) => {
    set((state) => ({
      cart: state.cart.filter((e) => e.id != d.id),
      totalPrice: Math.ceil(state.totalPrice - Number(e.price)),
    }));
  },
  emptyCart: () => {
    set((state) => ({
      cart: [],
      totalPrice: 0,
    }));
  },
});

const useCartStore = create(
  persist(CartStore, {
    name: "cart",
  })
);

export default useCartStore;
