import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';


const useStyles = makeStyles((theme)=>{
    return {
       
        card: {
            backgroundColor: "#ffea00",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(3),
            maxHeight: "400px",
            maxWidth: "250px"
        },
        dateIcon: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3)
        },
        qoute: {
            fontStyle: "italic"
        }
    }
});

const theme = createMuiTheme({
    palette: {
        type: "dark",
    }
});


function QuoteCard({quote}) {

    const classes = useStyles();

    return (
    <ThemeProvider theme={theme}>
       <Paper elevation={3} className={classes.card}>
           <Typography
           variant="h5"
           color="secondary"
           >
            This Week's Quote
           </Typography>

            <FormatQuoteIcon color="primary" fontSize="large" className={classes.dateIcon}/>

            <Typography
            variant="h6"
            color="secondary"
            className={classes.quote}
            >
                "{quote}"
            </Typography>
              
          
       </Paper>
    </ThemeProvider>
    );
}

export default QuoteCard;