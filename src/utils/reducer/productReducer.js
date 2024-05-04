import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: true,
    product: [],
    productObj: { email: "", password: "", repeatPassword: "" }
  },
  reducers: {
    getProduct: (state, action) => {
      state.product = action.payload;
    },
    changeLoadingTrue: (state, action) => {
      state.isLoading = true;
    },
    changeLoadingFalse: (state, action) => {
      state.isLoading = false;
    }
    // getEmail: (state, action) => {
    //   state.userObj.email = action.payload;
    // },
    // getPassword: (state, action) => {
    //   state.userObj.password = action.payload;
    // },
    // getRepeatPassword: (state, action) => {
    //   state.userObj.repeatPassword = action.payload;
    // }
  }
});

function loadProduct() {
  return {
    type: "apiCall",
    payload: {
      collection: "products",
      method: "GET",
      data: "",
      onSuccess: productSlice.actions.getProduct
    }
  };
}

export const productAction = {
  ...productSlice.actions,
  loadProduct
};

export default productSlice;
