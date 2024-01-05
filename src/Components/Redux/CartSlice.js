import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      console.log(payload);
      console.log(state.cart);
      let find = state.cart.findIndex((item) => item.id === payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
        
      } else {
        state.cart.push(payload);
      }
      localStorage.setItem('cart',JSON.stringify(state))
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
      localStorage.setItem('cart',JSON.stringify(state))  
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      localStorage.setItem('cart',JSON.stringify(state))
    },
    increaseItemQuantity: (state, action) => {
        
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
           
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      localStorage.setItem('cart',JSON.stringify(state))
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if(item.quantity>=2){
            if (item.id === action.payload) {
                return { ...item, quantity: item.quantity - 1 };
                
              } 
        }

        return item;
      });
      localStorage.setItem('cart',JSON.stringify(state))
      
    },
    initCart: () => {
    
      localStorage.setItem('cart',JSON.stringify({cart: [],
        totalQuantity: 0,
        totalPrice: 0,}))
      return{cart: [],
        totalQuantity: 0,
        totalPrice: 0,}
          },
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  initCart
} = cartSlice.actions;

export default cartSlice.reducer;