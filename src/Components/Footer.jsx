import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';


import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme)=> {
    return {

    appBar: {
        position: "absolute",
        top: "auto",
        backgroundColor: "transparent",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        paddingInline: theme.spacing(1),
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: theme.spacing(1),
    },
    avatar: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    link: {
        marginLeft: theme.spacing(1)
    },
    btn: {
        [theme.breakpoints.up('sm')]: {
            display: "none"
        },
        marginTop: theme.spacing(1)
    }
}
});

function Footer(props) {

    const classes = useStyles();
    
    return (
        // footer   
       <AppBar
       className={classes.appBar}
       >   
       <div className={classes.footer}>

           <Link
           color="secondary"
           component="button"
           variant="h6"
           className={classes.link}
           onClick={()=>window.open("https://github.com/ishanExtreme/Portfolio-React")}
           >
               Source Code
           </Link>
        
       </div>

       </AppBar>
    );
}

export default Footer;