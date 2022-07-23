import React from 'react'
import "./styles/style.css"
import { Box, Typography, Button} from "@mui/material";
import { styled } from '@mui/system';

export const Main = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    height: "auto",
    paddingTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      paddingTop: '0rem',
      height: '85vh',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }
  }))
  const Right = styled(Box)(({ theme }) => ({

    marginTop: '3rem',
    padding: "1rem",
 
  }))
  const Styled = styled(Box)(({ theme }) => ({
    width: '70vw',
    [theme.breakpoints.up("md")]: {
      width: '40vw',
    }
  }))
  return (
    <StyledBox>
      <Styled>
        <Typography variant="h2">Fastest Food Delivery Service</Typography>
        <Typography variant="h3">in your area</Typography>
        <Button variant="contained" sx={{ width: "10rem", fontSize: '18px' }} color="secondary">Order Now</Button>
      </Styled>
      <Right>
          <div className="upper-card-box">
            <div className="cards">
              <div className="images">
                <img src="pictures/1.png" alt="food" />
              </div>
              <div className="content">
                <Typography variant='h3'>Ice Cream</Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
                  <Typography variant="h4">Price</Typography>
                  <Typography variant="h5">$10</Typography>
                </Box>

              </div>
             </div>
            <div className="cards">
              <div className="images">
                <img src="pictures/2.png" alt="food" />
              </div>
              <div className="content">
                <Typography variant='h3'>Ice Cream</Typography>
                <Box sx={{ display: 'flex', justifyContent: "space-around", alignItems: "center" }}>
                  <Typography variant="h4">Price</Typography>
                  <Typography variant="h5">$10</Typography>
                </Box>
              </div>

            </div>

          </div>

      </Right>


    </StyledBox>
  )
}
