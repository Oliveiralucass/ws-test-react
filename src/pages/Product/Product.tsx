import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { ProductStyled, ProductStyledForm } from './Product.styled';
import { useForm } from "react-hook-form";
import { IProduct } from '../../utils/interfaces';
import { useAppDispatch } from '../../app/store';
import { editProduct } from '../../app/reducers/productSlice';

export const Product = () => {

    const { state } = useLocation();
    const { register, handleSubmit } = useForm<IProduct>();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const onSubmit = (data:IProduct) => {
        dispatch(editProduct({name: state.name, newName: data.name, newPrice: Number(data.price)}))
        navigate('/')
    }

  return (
    <ProductStyled>
        <Header />

        <ProductStyledForm>
           <form onSubmit={handleSubmit((data:IProduct) =>  onSubmit(data))}>
                <input type='text' id='name' {...register('name')} defaultValue={state?.name}/>
                <input type='text' id='price' {...register('price')} defaultValue={state?.price}/>

                <button type='submit'>Enviar</button>
           </form>
        </ProductStyledForm>
        
        <Footer />
    </ProductStyled>
  )
}
