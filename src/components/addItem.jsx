import React, { useState } from 'react'
import { FileUpload } from '@mui/icons-material';
import Data from '../utils/data';
import { TextField, Box, styled, Select, MenuItem, FormControl, InputLabel, CircularProgress, Button, Snackbar, Alert } from '@mui/material';
import { Close } from '@mui/icons-material';
import {ref,getDownloadURL,uploadBytesResumable} from "firebase/storage";
import { storage } from '../firebase.config';
import { uploadData } from '../utils/firebase';

const StyledBox = styled(Box)(({ theme }) => ({
    padding: '2rem',
    display: "flex",
    width: '80vw',
    alignItems: "center",
    flexDirection: "column",
    margin: '3rem auto',
    backgroundColor:"#232323",
    border: "2px solid lightgrey",
    [theme.breakpoints.up("sm")]: {
        width: '65vw',
    }
}))
const Inner = styled(Box)(({ theme }) => ({
    width: '95%',
    display: 'flex',
    border: "2px solid lightgrey",
    height: '45vh',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        height: '45vh',
    }
}))
const StyledImage = styled(Box)(({ theme }) => ({
    width: '300px',
    height: '300px',
    objectFit: 'contain',
    [theme.breakpoints.up("md")]: {
        width: '800px',
        height: '300px',
    }
}))
export const AddItem = () => {
    const [category, setcategory] = useState("");
    const [title, settitle] = useState("")
    const [price, setprice] = useState("")
    const [loading, setloading] = useState(false);
    const [open, setopen] = useState(false);
    const [message, setmessage] = useState("");
    const [type, settype] = useState("error");
    const [imageassest, setimage] = useState("");
    const Upload = async () => {
         await (uploadData({ title, price, category, imageassest }))
        settitle("");
        setprice("");
        setcategory("");
        setimage("");
        setopen(true);
        settype("success");
        setmessage("Item added successfully :)")
    }
    const handleChange = ({ target: { files } }) => {
        setloading(true);
        const refstorage = ref(storage, `images/${Date.now()}-${files[0].name}`);
        const upload = uploadBytesResumable(refstorage, files[0]);

        upload.on("state_changed", (snapshot) => {
        }, (error) => {
            setopen(true);
            settype("error");
            setmessage("File is not uploaded succesfully:Try Again :(")
        }, () => {
            getDownloadURL(upload.snapshot.ref).then(downloadURL => {
                setimage(downloadURL);
                setloading(false);
                setopen(true);
                settype("success");
                setmessage("File is uploaded successfully :)")
            })
        })
    }
    return (
        <>
            <StyledBox>
                <Snackbar sx={{ width: '90%' }} open={open}
                    autoHideDuration={6000}
                    onClose={() => setopen(!open)}
                    message="Note archived" action={<Close onClick={() => setopen(false)} />}><Alert severity={type}>{message}</Alert></Snackbar>
                <FormControl sx={{ width: "95%"}}>
                    <InputLabel sx={{textShadow:"2px 7px #FFFFFF",backgroundColor:"transparent",color:"#000000"}}>Select Category</InputLabel>
                    <Select value={category} label="Select Category" color='info' sx={{backgroundColor:"#FFFFFF"}} onChange={({ target }) => setcategory(target.value)}>
                        {
                            Data.map((elem, i) => (
                                <MenuItem sx={{backgroundColor:"#000000","&:active":{
                                    backgroundColor:"#000000"
                                }}}value={elem.name} key={i}>{elem.name}</MenuItem>
                            ))

                        }
                    </Select>
                </FormControl>
                <Inner>
                    <input type="file" accecpt="image/*" name="imagefile" id="imagefile" onChange={handleChange} style={{ display: 'none' }}
                    />
                    {
                        loading ? <CircularProgress color="secondary" /> :
                            <label htmlFor="imagefile">{imageassest !== "" ? <StyledImage component="img" src={imageassest} /> : <><FileUpload sx={{ display: "block", margin: 'auto' }} /> Import image or file</>}</label>
                    }

                </Inner>
                <Box sx={{ width: '95%' }}>
                    <TextField key="title" value={title} placeholder="Title" color="primary" onChange={({ target: { value } }) => settitle(value)} sx={{ margin: '.6rem 0', width: '100%',backgroundColor:"#FFFFFF"}} />
                    <TextField value={price} key="price" placeholder="Price" type="number" color="primary" onChange={({ target: { value } }) => setprice(value)} sx={{ margin: '.6rem 0', width: '100%',backgroundColor:"#FFFFFF" }} />
                </Box>
                <Button sx={{ width: '95%' }} variant="contained" color="secondary" onClick={() => title === "" || price === "" || category === "" ? alert("All fields are required") : Upload()}>Add Item</Button>
            </StyledBox>
        </>
    );
}


