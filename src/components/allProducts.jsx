/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useStatevalue } from '../context/stateProvider';
import { Typography, Box, styled, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { ShoppingBasket } from '@mui/icons-material';
import { getData } from '../utils/firebase'
import { useState } from 'react';
import { Options } from "./index"
const Styled = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '80%',
  margin: '1rem auto'
}))
const StyledText = styled(Typography)(({ theme }) => ({
  margin: '2rem auto',
  textAlign: 'center',
  width: '20rem',
}))

export const AllProducts = () => {
  let number = 1;
  const [display, setdisplay] = useState(true);
  const [{ data = [], cartItems = [] }, dispatch] = useStatevalue();
  let cartdata = [];
  const Data = async () => {
    await getData().then(data => {
      dispatch({
        type: "SET_DATA",
        data: data
      }); setdisplay(false)
    });
  };
  const setcart = (imageassest, title, price) => {
   cartItems.map((elem) => elem.title === title ? elem.quantity >= 1 ? number = elem.quantity + 1 : number = 1 : elem)
    cartdata = cartItems.filter((elem) => elem.title !== title);
    cartdata.push({ imageassest, title, price, quantity: number });
    localStorage.setItem("cart", JSON.stringify(cartdata));
    dispatch({
      type: "SET_CART",
      cartItems: cartdata
    })
  }
  useEffect(() => {
    Data();
  }, []);
  const [{ categorytype }] = useStatevalue();

  return (
    <>
      <StyledText variant='h4'>All Products</StyledText>
      <Options />

      <Styled>
        {display ? <CircularProgress color="secondary" /> : <>
          {
         data.map((elem, index) => {
              const { title, imageassest, price, category } = elem;
              return (
                category === categorytype ? <div className="cards-data" key={index}>
                  <div className="images-data">
                    <img src={imageassest} alt="ice cream" />
                  </div>
                  <div className="content-data">
                    <Typography variant='h3'>{title}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
                      <Typography variant="h4">Price</Typography>
                      <Typography variant="h5">${price}</Typography>
                      <motion.div
                        className="animatable"
                        whileTap={{ scale: 0.8 }}
                      >
                        <ShoppingBasket className='animateable' color="secondary" sx={{ width: '2rem', height: '2rem' }} onClick={() => setcart(imageassest, title, price)} />
                      </motion.div>
                    </Box>

                  </div>
                </div> : ''
              )
            }

            )
          }
        </>
        }
      </Styled>
    </>

  )
}

