import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import PlanCard from '../Components/PlanCard';
import QuoteCard from '../Components/QuoteCard';
import useApi from '../hooks/useApi';
import plansApi from '../api/plans';
import quoteApi from '../api/quote';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles((theme)=>{
    return {
        centerDiv: {
            display: 'flex',
            justifyContent: "center",
            
        },
        container: {
            padding: theme.spacing(3),
            background: "black"
        },
        Abouttext: {
            marginTop: theme.spacing(3)
        },
        image: {
            maxWidth: "100%",
            height: "auto"
        },
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

function About(props) {


    const classes = useStyles();

    const [plans, setPlans] = useState([]);
    const [quote, setQuote] = useState("");

    const getPlansApi = useApi(plansApi.plans);
    const getQuoteApi = useApi(quoteApi.quote);

    const getPlans = async ()=>{
        const result = await getPlansApi.request();

        if(result.ok)
        {
            result.data.plans.forEach((plan)=>{
                setPlans(prevPlans=> [...prevPlans, plan.value])
            })
            
        }
    }
    
    const getQuote = async ()=>{
        const result = await getQuoteApi.request();

        if(result.ok)
        {
            setQuote(result.data.quote)   
        }
    }   

    useEffect(()=>{

        getPlans();
        getQuote();

        return ()=> 
        {
        setPlans([]);
        setQuote("");
        }

    }, [])

    return (

    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
        container
        className={classes.container}
        >
            {/* Desktop View */}
            <Hidden mdDown >
                <Grid item xs={3} style={{marginBottom: '15px'}}>
                    <div className={classes.centerDiv}>
                        <PlanCard plans={plans}/>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <Typography 
                    variant="h3"
                    color="secondary"
                    align="center"
                    // style={{textDecoration: 'underline'}}
                    >
                        About Me
                    </Typography>

                    <Typography 
                    variant="h6"
                    color="secondary"
                    align="center"
                    className={classes.Abouttext}
                    >
                        Hi I am Ishan Mishra, currently studying BTech in Computer Science and Engineering at Indian Institute of Information Technology, Kalyani(2019-2023). I enjoy exploring different fields, have special interest in backend fields like communication protocols, web servers, proxies....I also write blogs on dev.to(link below) and ocassional youtube videos too. 
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <div className={classes.centerDiv}>
                        <QuoteCard quote={quote}/>
                    </div>
                </Grid>

                 {/* Social links 1 */}
                <Grid item xs={3}>
                    <Grid
                    container
                    direction="column"
                    // className={classes.container}
                    spacing = {3}
                    >

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<EmailIcon />}
                            onClick={(e)=>{
                                e.preventDefault();
                                window.location.href="mailto:462_bt19@iiitkalyani.ac.in"
                            }}
                            >
                                Email
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<YouTubeIcon />}
                            onClick={()=>window.open("https://www.youtube.com/channel/UCZwwvbojug3Twq-agMmslNg")}
                            >
                                Youtube-noobDEV
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<InstagramIcon />}
                            onClick={()=>window.open("https://www.instagram.com/ishan7705/")}
                            >
                                Instagram
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<FacebookIcon />}
                            onClick = {()=>window.open("https://www.facebook.com/ishan.mishra.73/")}
                            >
                                Facebook
                            </Button>
                        </div>
                    </Grid>
                    


                </Grid>
            </Grid>
            {/* Social links 1 end */}

             {/* Resume link */}
            <Grid item xs={6}>

                <Grid 
                container
                direction="column"
                spacing = {3}
                >
                    <Grid item>

                        <div className={classes.centerDiv}>
                            <img
                            className={classes.image}
                            src="images/Profile PictureV1.png" 
                            />
                        </div>

                    </Grid>

                    

                    <Grid item>

                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            size="large"
                            onClick={()=>window.open("https://drive.google.com/file/d/14UA8_P8BEgSf0lM9Gp7u55uqOMXEAGkm/view?usp=sharing")}
                            >
                                Resume.pdf
                            </Button>
                        </div>

                    </Grid>
                    
                </Grid>
        
            </Grid>
            {/* Resume ends */}

            {/* Social links 2 */}
            <Grid item xs={3}>
                <Grid
                container
                direction="column"
                // className={classes.container}
                spacing = {3}
                >

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<LinkedInIcon />}
                            onClick={()=>window.open("https://www.linkedin.com/in/ishan-mishra-00788b192/")}
                            >
                                Linkedin
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<GitHubIcon />}
                            onClick={()=>window.open("https://github.com/ishanExtreme")}
                            >
                                Github
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<GitHubIcon />}
                            onClick={()=>window.open("https://github.com/noobDevelopers")}
                            >
                                Github-noobDEV
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<BookIcon />}
                            onClick={()=>window.open("https://dev.to/ishanextreme")}
                            >
                                Blogging
                            </Button>
                        </div>
                    </Grid>
                    


                </Grid>
            </Grid>
            {/* Social links 2 end */}

            </Hidden>

            {/* Mobile View */}
            <Hidden lgUp>

                <Grid item xs={12}>
                    <Typography 
                    variant="h3"
                    color="secondary"
                    align="center">
                        About Me
                    </Typography>

                    <Typography 
                    variant="h6"
                    color="secondary"
                    align="center"
                    className={classes.Abouttext}
                    >
                        Hi Iam Ishan Mishra, currently studying BTech in Computer Science and Engineering at Indian Institute of Information Technology, Kalyani(2019-2023). I enjoy exploring different fields, have special interest in fields technologies like communication protocols, web servers, proxies....I also write blogs on dev.to(link below) and ocassional youtube videos too. 
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <div className={classes.centerDiv} style={{marginTop:'10px'}}>
                        <PlanCard plans={plans}/>
                    </div>
                </Grid>

                <Grid item xs={12}>
                    <div className={classes.centerDiv} style={{marginTop:'5px'}}>
                        <QuoteCard quote={quote}/>
                    </div>
                </Grid>


                 {/* Social links 1 */}
                <Grid item xs={12}>
                    <Grid
                    container
                    direction="column"
                    style={{marginTop: "20px"}}
                    spacing = {3}
                    >
                    
                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<EmailIcon />}
                            onClick={(e)=>{
                                e.preventDefault();
                                window.location.href="mailto:462_bt19@iiitkalyani.ac.in"
                            }}
                            >
                                Email
                            </Button>
                        </div>
                    </Grid>


                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<LinkedInIcon />}
                            onClick={()=>window.open("https://www.linkedin.com/in/ishan-mishra-00788b192/")}
                            >
                                Linkedin
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<GitHubIcon />}
                            onClick={()=>window.open("https://github.com/ishanExtreme")}
                            >
                                Github
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<GitHubIcon />}
                            onClick={()=>window.open("https://github.com/noobDevelopers")}
                            >
                                Github-noobDEV
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<BookIcon />}
                            onClick={()=>window.open("https://dev.to/ishanextreme")}
                            >
                                Blogging
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<YouTubeIcon />}
                            onClick={()=>window.open("https://www.youtube.com/channel/UCZwwvbojug3Twq-agMmslNg")}
                            >
                                Youtube-noobDEV
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<InstagramIcon />}
                            onClick={()=>window.open("https://www.instagram.com/ishan7705/")}
                            >
                                Instagram
                            </Button>
                        </div>
                    </Grid>

                    <Grid item>
                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            startIcon={<FacebookIcon />}
                            onClick = {()=>window.open("https://www.facebook.com/ishan.mishra.73/")}
                            >
                                Facebook
                            </Button>
                        </div>
                    </Grid>
                    
                    <Grid item>

                        <div className={classes.centerDiv}>
                            <Button 
                            variant="outlined"
                            color="secondary"
                            onClick={()=>window.open("https://drive.google.com/file/d/14UA8_P8BEgSf0lM9Gp7u55uqOMXEAGkm/view?usp=sharing")}
                            >
                                Resume.pdf
                            </Button>
                        </div>

                    </Grid>

                </Grid>
            </Grid>
            {/* Social links 1 end */}

            </Hidden>

        </Grid>
    </ThemeProvider>
    );
}

export default About;