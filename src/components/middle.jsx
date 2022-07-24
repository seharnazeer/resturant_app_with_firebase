import React from 'react';
import "./styles/middle.css"
import {Typography,styled} from "@mui/material";

const Styled=styled(Typography)(({theme})=>({
  margin:'2rem auto',
  textAlign:'center',
  width:'20rem',
}))
export const Middle = () => {
  return (
    <>
    <Styled variant='h4'>Our Feature Products</Styled>
   <div className="upper">
            <div className="cards-data">
              <div className="images-data">
                <img src="pictures/f8.png" alt="ice cream" />
              </div>
              <div className="content-data">
                <Typography variant='h3'>Strawberry</Typography>
              </div>
             </div>
            <div className="cards-data">
              <div className="images-data">
                <img src="pictures/7.png" alt="ice cream" />
              </div>
              <div className="content-data">
                <Typography variant='h3'>Pine-Apple</Typography>
             
              </div>

            </div>
            <div className="cards-data">
              <div className="images-data">
                <img src="pictures/15.png"  alt="ice cream"/>
              </div>
              <div className="content-data">
                <Typography variant='h3'>Black Cherry</Typography>
        

              </div>
             </div>
             <div className="cards-data">
              <div className="images-data">
                <img src="pictures/f4.png" alt="ice cream" />
              </div>
              <div className="content-data">
                <Typography variant='h3'>grapes</Typography>
            
              </div>
             </div>
             <div className="cards-data">
              <div className="images-data">
                <img src="pictures/f5.png" alt="food" />
              </div>
              <div className="content-data">
                <Typography variant='h3'>Strawberry</Typography>
          

              </div>
             </div>

          </div>
          </>
  )
}
