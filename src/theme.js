import { createTheme } from "@mui/material/styles";
const Theme=createTheme({
    palette:{
        primary:{
            main:"#F8B525",
            light:"#000000"
        },
        secondary:{
            main:"#F8B525",
        },
        info:{
            main:"#000000"
        }
    },
    typography:{
        allVariants:{
            fontFamily:"cursive",
            color:"#F8B525",
        },
        p:{
            fontFamily:"cursive"
        },
        h2:{
            color:"#F8B525"
        },
        h4:{
            borderBottom:"5px solid #F8B525",
            borderTop:"5px solid #F8B525",
            color:"#F8B525"
        },
        h3:{
           color:"#F8B525"
        }
  
      },
})
export default Theme;