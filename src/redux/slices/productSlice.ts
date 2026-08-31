import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// ✅ Note: Yahan 'import type' lagaya gaya hai
import type { Product } from '../../types';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=100');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      return data.products as Product[];
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { Product } from '../../types';

// interface ProductState {
//   products: Product[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: ProductState = {
//   products: [],
//   loading: false,
//   error: null,
// };

// export const fetchProducts = createAsyncThunk(
//   'product/fetchProducts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch('https://dummyjson.com/products?limit=100');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       return data.products as Product[];
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   }
// );

// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default productSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { Product, ProductsResponse } from '../../types';

// interface ProductState {
//   products: Product[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: ProductState = {
//   products: [],
//   loading: false,
//   error: null,
// };

// // ✅ API se products fetch karne ke liye async thunk
// export const fetchProducts = createAsyncThunk(
//   'product/fetchProducts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch('https://dummyjson.com/products?limit=100');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data: ProductsResponse = await response.json();
//       return data.products;
//     } catch (error) {
//       return rejectWithValue((error as Error).message);
//     }
//   }
// );

// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.products = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export default productSlice.reducer;