import {Box,styled, Typography} from "@mui/material"
import { Fastfood } from "@mui/icons-material"
import  Data from "../utils/data"
import React from 'react'
import { useStatevalue } from "../context/stateProvider"
const UpperBox=styled(Box)(({theme})=>({
     display:'flex',
     overflowX:'auto',
     justifyContent:'center',
     width:'100%',
     margin:'2rem auto',
     [theme.breakpoints.up("md")]:{
        width:'70%'
     }
}))
const Inner=styled(Box)(({theme})=>({
  width:'100px',
  margin:'15px',
  height:'100px',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  borderRadius:'10px',
  border:'2px solid black',
  justifyContent:'center',
  backgroundColor:"#FFFFFF",
  "&:hover": {
    backgroundColor: "#F60000",
    color:'white',
    border:'2px solid #F60000',
  }
}))
export const Options = () => {
  const [{categorytype},dispatch]=useStatevalue();
  console.log(categorytype);
  const updatecategory=(name)=>{
    dispatch({
      type:"SET_CAT",
      categorytype:name,
    });

  }
  return (
    <UpperBox>
      {
        Data.map((elem,i)=>(
          <Inner key={i} onClick={()=>updatecategory(elem.name)}>
          <Fastfood  sx={{width:'2rem',height:'2rem'}}/>
          <Typography sx={{display:'block'}} >{elem.name}</Typography>
        </Inner>
        ))
    
}
    </UpperBox>
  )
}

