import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles((theme)=>{
    return {
    
        root: {
            maxWidth: 345,
            backgroundColor: "#ffea00",
            // marginBottom: theme.spacing(3),
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        centerDiv: {
            display: 'flex',
            justifyContent: "center",
            
        },
        title: {
            color: 'black'
        },
        subheader: {
            color : '#616161'
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

function ProjectCard({title, date, stack, description, url}) {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>

            <Card className={classes.root}>
                <CardHeader
                classes={{
                    title: classes.title,
                    subheader: classes.subheader
                }}
                title={title}
                subheader={date}
                />

                <CardContent>
                    <Typography
                    variant="subtitle2"
                    color="primary"
                    style={{marginBottom: '10px'}}
                    >
                        Tech Stack:{stack}
                    </Typography>

                    <Typography
                    variant="body1"
                    color="secondary"
                    style={{marginBottom: '20px'}}
                    >
                        {description}
                    </Typography>

                    <div className={classes.centerDiv}>
                        <Button
                        variant="outlined"
                        color="primary"
                        onClick={()=>window.open(url)}
                        >
                            Live Project Link
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}

export default ProjectCard;