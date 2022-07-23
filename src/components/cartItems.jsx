import React from 'react'
import { Drawer,styled,Box,Typography, Button } from '@mui/material'
import { useStatevalue } from '../context/stateProvider'
import { Delete } from '@mui/icons-material'

const StyledBox=styled(Box)(({theme})=>({
 dislay:'flex',
 flexDirection:'column',
 height:'80%',
 width:'22rem',
 borderRadius:'10px',
 overflowY:'auto'
}))
const Total=styled(Typography)(({theme})=>({
    width:'20rem',
    height:'3rem',
    fontSize:'22px',
    position:'absolute',
    bottom:'10%',
    left:'4%',
    margin:'1rem auto',
    borderRadius:'15px',
    color:'white',
    textAlign:'center',
    paddingTop:'1.5rem'
}))
const StyledText=styled(Typography)(({theme})=>({
    margin:'2rem auto',
    textAlign:'center',
    width:'12rem',
  }))
const InnerBox=styled(Box)(({theme})=>({
    height:'7rem',
    display:'flex',
    flexDirection:'row',
    backgroundColor:"#FFFFFF",
    boxShadow: '0 .2rem .7rem #F60000',
    width:'19rem',
    margin:'1rem auto',
    borderRadius:'10px',
    color:'#000000'
   }))
const Icon=styled(Button)(({theme})=>({
    width:'1rem',
    height:'1rem',
    margin:'2.5rem auto',
    fontSize:'26px',
    fontWeight:"bolder",
    padding:'.3rem',
    cursor:'pointer',
    color:'black'
    
}))
export const CartItems = ({open,setopen}) => {
    
    let data=[];
    let total=0;
    const [{cartItems},dispatch]=useStatevalue();
    const deleteitem=(i)=>{
       cartItems.splice(i,1)
       dispatch({
        type:'SET_CART',
        cartItems:cartItems
       })
       localStorage.setItem("cart",JSON.stringify(cartItems));
    }
    const decrement=(ele)=>{
     data=cartItems.filter((elem)=>elem.title!==ele.title)
     const index=cartItems.indexOf(ele);
     ele.quantity=ele.quantity-1;
     data.splice(index,0,ele);
     dispatch({
        type:'SET_CART',
        cartItems:data
       })
       localStorage.setItem("cart",JSON.stringify(data));
    }
    const increment=(ele)=>{
        data=cartItems.filter((elem)=>elem.title!==ele.title)
        const index=cartItems.indexOf(ele);
        ele.quantity=ele.quantity+1;
        data.splice(index,0,ele); //to insert value at the previous place where it is before updation
        dispatch({
           type:'SET_CART',
           cartItems:data
          })
          localStorage.setItem("cart",JSON.stringify(data));
       }
  return (
   <Drawer open={open} onClose={()=>setopen(!open)}>
      <StyledText variant='h4'>Cart Items</StyledText>
    <StyledBox>
    {   cartItems.length===0?
        <Box component="img" src="pictures/emptyCart.svg" sx={{width:'15rem',height:'20rem',objectFit:'contain',margin:'2rem 2.5rem'}} />:<>
    {
        cartItems.map((elem,i)=>{
            total=total+((parseInt(elem.price))*elem.quantity);
            return(
                <InnerBox key={i}>
                 
                <Box component="img" sx={{width:'7rem',height:'6rem',objectFit:'contain'}} src={elem.imageassest}/>
                <Box sx={{display:'flex'}}>
                    <Icon onClick={()=>elem.quantity===1?deleteitem(i):decrement(elem)}>-</Icon>
                <Typography sx={{margin:'2.5rem auto'}} variant='h5'>{elem.quantity}</Typography>
                <Icon onClick={()=>increment(elem)}>+</Icon>
                </Box>
                <Delete sx={{margin:'1rem auto'}} onClick={()=>deleteitem(i)}/>
          
                </InnerBox>

            )
        })

    }
     <Total bgcolor={'secondary.main'} variant="h1">Total:${total}</Total>
    </>
   
    }
</StyledBox>
   </Drawer>
  )
}
