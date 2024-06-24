import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  tags: string[];
  sales: SalesData[];
}

interface SalesState {
  product: Product | null;
}

const initialState: SalesState = {
  product: null,
};

const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction<Product>) {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = salesSlice.actions;
export default salesSlice.reducer;
