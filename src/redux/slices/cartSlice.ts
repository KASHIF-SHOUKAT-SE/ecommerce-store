import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, Product } from '../../types';

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && action.payload.quantity >= 1) {
        const quantityDiff = action.payload.quantity - item.quantity;
        item.quantity = action.payload.quantity;
        state.totalQuantity += quantityDiff;
        state.totalAmount += quantityDiff * item.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CartItem, Product } from '../../types';

// interface CartState {
//   items: CartItem[];
//   totalQuantity: number;
//   totalAmount: number;
// }

// const initialState: CartState = {
//   items: [],
//   totalQuantity: 0,
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<Product>) => {
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//       state.totalQuantity += 1;
//       state.totalAmount += action.payload.price;
//     },
//     removeFromCart: (state, action: PayloadAction<number>) => {
//       const item = state.items.find(item => item.id === action.payload);
//       if (item) {
//         state.totalQuantity -= item.quantity;
//         state.totalAmount -= item.price * item.quantity;
//         state.items = state.items.filter(item => item.id !== action.payload);
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { CartItem, Product } from '../../types';

// interface CartState {
//   items: CartItem[];
//   totalQuantity: number;
//   totalAmount: number;
// }

// const initialState: CartState = {
//   items: [],
//   totalQuantity: 0,
//   totalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<Product>) => {
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//       state.totalQuantity += 1;
//       state.totalAmount += action.payload.price;
//     },
//     removeFromCart: (state, action: PayloadAction<number>) => {
//       const item = state.items.find(item => item.id === action.payload);
//       if (item) {
//         state.totalQuantity -= item.quantity;
//         state.totalAmount -= item.price * item.quantity;
//         state.items = state.items.filter(item => item.id !== action.payload);
//       }
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;