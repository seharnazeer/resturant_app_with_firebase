import React,{useState} from 'react';
import { AppBar, Toolbar, Box, styled, Typography, IconButton, Avatar,Badge } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config.js"
import { useNavigate } from 'react-router-dom';
import { useStatevalue } from '../context/stateProvider.js';
import { motion } from 'framer-motion';
import { CartItems } from './cartItems.jsx';
import { ShoppingBasket,DensitySmall } from '@mui/icons-material';

const StyledApp = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: "1rem"
}))
const Typographystyle = styled(Typography)({
    cursor: "pointer",
    padding: ".6rem",
    textAlign: 'center',
    color:"#F8B525"
})
const ResponsiveBox=styled(Box)(({theme})=>({
    display:'flex',
    [theme.breakpoints.down("md")]:{
        padding:'2rem',
        position:'absolute',
        zIndex:'2',
        backgroundColor:'white',
        height:'100vh',
        top:'0',
        left:'0',
        width:'150px',
        flexDirection:"column",
        boxShadow: "0 .2rem .7rem #F8B525"
    }
}))
const Icon=styled(Box)(({theme})=>({
    display:'none',
    [theme.breakpoints.down("md")]:{
        display:'block'
    }
}))
export const Header = () => {
    const [open,setopen]=useState(false);
    const [display,setdisplay]=useState('none');
    const [{ user,cartNo }, dispatch] = useStatevalue();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider()
    const login = async () => {
            const { user: { 
                 providerData } } = await signInWithPopup(auth, provider);
            dispatch({
                type: "SET_USER",
                user: providerData[0]
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));

    }
    const navigate = useNavigate();
    const navelem = [{ title: 'Home', path: '/' }, { title: 'Menu', path: '/menu' }, { title: 'About', path: 'about' },{ title: 'Add to item', path: '/add' }];

    return (
        <>
        <AppBar sx={{position:"static",height:"20vh", boxShadow: "0 .2rem .7rem #F8B525",backgroundColor:"black",color:"#F8B525"}}>

            <StyledApp>
                <Box>
                    <Box component="img" sx={{ width: '4rem', height: "4rem" }} src="pictures/logo-1.png" />
                    <Box>
                        <Typography variant='h6'>Big Bite</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center"}}>
                    <ResponsiveBox sx={{display:{"lg":"flex","xl":"flex", "md":"flex","sm":`${display}`,"xs":`${display}`}}}>
                    {
                        navelem.map((elem, index) => (
                            <IconButton key={index} onClick={() => elem.title!=="Menu"?navigate(elem.path):window.scrollTo({
                                top:1200,
                                behaviour:"smooth"
                            })} >
                                <Typographystyle variant="h5">
                                    {elem.title}
                                </Typographystyle>
                            </IconButton>
                        ))
                    }
                    </ResponsiveBox>
                    <Badge badgeContent={cartNo} sx={{marginRight:'.6rem'}} onClick={()=>setopen(true)}>
                        <ShoppingBasket color="secondary"/>
                    </Badge>
                    <Icon onClick={()=>display==="none"?setdisplay("block"):setdisplay("none")}> <DensitySmall sx={{width:'2rem',height:'2rem',margin:'.6rem'}}/></Icon>
                    <motion.div
                        className="animatable"
                        whileTap={{ scale: 0.8 }}
                    >
                        <Avatar className="animatable" src={user?user.photoURL:"pictures/avatar.png"} referrerPolicy="no-referrer" sx={{ marginBottom: ".4rem" }} onClick={() => login()}></Avatar>
                    </motion.div>
                </Box>
            </StyledApp>
        </AppBar>
        <CartItems open={open} setopen={setopen} />
        </>
    )
}
