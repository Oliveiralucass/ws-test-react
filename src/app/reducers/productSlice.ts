import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductSlice, IProduct } from '../../utils/interfaces';





const initialState: IProductSlice = {
    products: [
        {
            name: "Red Apple",
            price: 1.99,
        },
        {
            name: "Green Salad",
            price: 4.66,
        },
        {
            name: "Water jar",
            price: 3.66,
        },
        {
            name: "Natural Supplement 1",
            price: 7.86,
        },
        {
            name: "Natural Supplement 2",
            price: 5.00,
        },
        {
            name: "Banana's Juice",
            price: 4.77,
        },
        {
            name: "Natural Orange Juice",
            price: 3.21,
        },
    ]
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: { 
        createNewProduct: (state, action:PayloadAction<IProduct>) => {
            let isInProductList = state.products.some(item => item.name === action.payload.name)

            if(!isInProductList) {
                return {
                    products: [...state.products, {...action.payload}]
                }
            } else {
                alert('Product alredy in the list')
            }
            
        },

        removeProduct: (state, {payload}) => {
            state.products = state.products.filter(product => product.name !== payload.name)
        },

        editProduct: (state, { payload }) => {
            state.products = state.products.map(product  => {
                if (product.name === payload.name) {
                    product.name = payload.newName
                    product.price = payload.newPrice
                }
                return product
            })
        }
    },
})

export const { createNewProduct, removeProduct, editProduct } = productSlice.actions;

export default productSlice.reducer;