import { createTheme } from "@mui/material/styles";
const Theme=createTheme({
    palette:{
        primary:{
            main:"#FFFFFF"
        },
        secondary:{
            main:"#F60000",
        },
        info:{
            main:"#000000"
        }
    },
    typography:{
        allVariants:{
            fontFamily:"cursive",
        },
        h2:{
            color:"#F60000"
        },
        h4:{
            borderBottom:"5px solid #F60000",
            borderTop:"5px solid #F60000",
        }
  
      },
})
export default Theme;