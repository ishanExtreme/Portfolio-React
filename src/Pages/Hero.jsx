import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Particles from 'react-particles-js';

const useStyles = makeStyles((theme)=>{
    return {
        hero: {
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            width: "100%",
            backgroundColor: "black",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            minHeight: "600px",
        },
        logo: {
            position: "absolute",
            top: "20%",
            zIndex: 1,
            maxWidth: "100%",
            height: "auto"
        },
        button: {
            position: "absolute",
            top: "70%",
            zIndex: 1,
        },
        particle: {
            height: "100%",
            width: "100%"
        },
        particleContainer: {
            width: "90%"
        },
        scroll: {
            position: "absolute",
            zIndex: 1,
            top:"93%",
            [theme.breakpoints.down('xs')]: {
                top:"90%",
            },
        },
        avatar: {
            width: theme.spacing(5),
            height: theme.spacing(5)
        }
    }
});

const theme = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            default: "black"
        }
    }
});

function Hero(props) {

    const classes = useStyles();
    

    return (
    <ThemeProvider theme={theme}>
        <div className={classes.hero}>

            {/* logo */}
            <img
            className={classes.logo}
            src="images/logo.png" 
            />

            <Button
            variant="outlined"
            color="secondary"
            size="large"
            className={classes.button}
            onClick={()=>window.open("https://drive.google.com/file/d/14UA8_P8BEgSf0lM9Gp7u55uqOMXEAGkm/view?usp=sharing")}
            >
            Resume.pdf
            </Button>
            {/* floating particles */}
            <div className={classes.particleContainer}>
                <Particles
                className={classes.particle}
                params={{
                    "particles": {
                        "number": {
                            "value": 15,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 1,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "image",
                                "circle"
                            ],
                            "image": [
                                {
                                    "src": "images/floating/1.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "images/floating/2.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "images/floating/3.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "images/floating/4.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "images/floating/5.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "images/floating/6.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "images/floating/7.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "images/floating/8.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "images/floating/9.svg",
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": "images/floating/10.svg",
                                    "height": 20,
                                    "width": 23
                                },
                            ]
                        },
                        "color": {
                            "value": "#fb2673"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 10,
                                "sync": true
                            }
                        }
                    },
                    "retina_detect": false
                }} />
            </div>
            {/* floating particles end */}

            {/* scroll down indicator */}
            <div className={classes.scroll}>
                <Avatar alt="arrow" src="images/scroll.gif" className={classes.avatar}/>
            </div>
        </div>
    </ThemeProvider>
    );
}

export default Hero;