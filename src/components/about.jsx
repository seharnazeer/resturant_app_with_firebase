import React from 'react'
import {Box,styled,Grid} from "@mui/material"
import "./styles/about.css"
export const About = () => {
  return (
    <div>
        <Grid container spacing={3} mt={5} direction={{md:"column",sm:"column",xs:"column",lg:"row",xl:"row"}} sx={{alignItems:"center",justifyContent:"center"}}>
            <Grid xs={10} md={4}className="about-content" p={7}>
            A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.
            <br />
            All great deeds and all great thoughts have a ridiculous beginning. Great works are often born on a street corner or in a restaurant's revolving door.
            </Grid>
            <Grid xs={12} md={4} p={0} >
                <Box className="about-picture">
              <img src="pictures/about/about-one.png" />
              </Box>
            </Grid>

        </Grid>
        <Grid container spacing={3} mt={5} direction={{md:"column-reverse",sm:"column-reverse",xs:"column-reverse",lg:"row",xl:"row"}}  sx={{alignItems:"center",justifyContent:"center"}}>
        <Grid xs={12} md={4} p={0} >
                <Box className="about-picture">
              <img src="pictures/about/about-two.png" />
              </Box>
            </Grid>
            <Grid xs={10} md={4} className="about-content" p={7} >
            Going to a restaurant is one of my keenest pleasures. Meeting someplace with old and new friends, ordering wine, eating food, surrounded by strangers, I think is the core of what it means to live a civilised life.
            <br />
            All tastes have the quality of being in some way artificial and invented. The secret of life is to have enough detachment from your tastes and your values to see that they are a little bit absurd.
            </Grid>
           

        </Grid>
    </div>
  )
}
