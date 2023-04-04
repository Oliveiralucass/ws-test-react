import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { useForm } from "react-hook-form";
import { IProduct } from '../../utils/interfaces';
import { useAppDispatch } from '../../app/store';
import { createNewProduct } from '../../app/reducers/productSlice';
import { NewProductStyled, NewProductStyledForm } from './NewProduct.styled';

export const NewProduct = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<IProduct>();


    const onSubmit = (data:IProduct) => {
        dispatch(createNewProduct({name: data.name, price: Number(data.price)}))
        navigate('/')
    }

  return (
    <NewProductStyled>
        <Header />

        <NewProductStyledForm>
           <form onSubmit={handleSubmit((data:IProduct) =>  onSubmit(data))}>
                <input type='text' id='name' {...register('name')}/>
                <input type='text' id='price' {...register('price')}/>

                <button type='submit'>Enviar</button>
           </form>
        </NewProductStyledForm>
        
        <Footer />
    </NewProductStyled>
  )
}
