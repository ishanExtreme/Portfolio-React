import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import DateRangeIcon from '@material-ui/icons/DateRange';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core'


// temp data
const plans = [
    "Participating in Hackbout2.0",
    "Preparing article about TCP and UDP",
    "Preparing youtube video about github"
];

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
        plans: {
            marginBottom: theme.spacing(3),
        }
    }
});

const theme = createMuiTheme({
    palette: {
        type: "dark",
    }
});


function PlanCard(props) {

    const classes = useStyles();

    return (
    <ThemeProvider theme={theme}>
       <Paper elevation={3} className={classes.card}>
           <Typography
           variant="h5"
           color="secondary"
           >
            Weekly Plan
           </Typography>
           <DateRangeIcon color="primary" fontSize="large" className={classes.dateIcon}/>
           {plans.map((plan, index)=>{
               return (
                <Typography
                key={index}
                variant="subtitle2"
                color="secondary"
                className={classes.plans}
                >
                    {plan}
                </Typography>
               );
           })}
       </Paper>
    </ThemeProvider>
    );
}

export default PlanCard;