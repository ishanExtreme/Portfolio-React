import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core';

import ProjectCard from '../Components/ProjectCard';
import useApi from '../hooks/useApi';
import projectApi from '../api/project';



const useStyles = makeStyles((theme)=>{
    return {
        container: {
            paddingTop: theme.spacing(10),
            padding: theme.spacing(10),
            background: "black",
        },
        centerDiv: {
            display: 'flex',
            justifyContent: "center",
            
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

function Projects(props) {

    const classes = useStyles();
    
    const [projects, setProjects] = useState([]);

    const getProjectsApi = useApi(projectApi.projects);

    const getProjects = async()=>{
        const result = await getProjectsApi.request();

        if(result.ok)
        {
            result.data.projects.forEach((project)=>{
                setProjects(prevProjects=> [...prevProjects, project])
            })
            
        }
    };

    useEffect(()=>{

        getProjects();
        
        return ()=> setProjects([]);
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            
            <Typography
            className={classes.heading}
            variant="h3"
            color="secondary"
            align="center"
            style={{marginTop: '100px'}}
            >
                Projects
            </Typography>
            
            <Grid
            container
            className={classes.container}
            spacing={3}
            style={{
                margin: 0,
                width: '100%',
              }}
            justify="center"
            >

                {projects.map((project, index)=>{
                    return (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <ProjectCard
                            key={index}
                            title={project.title}
                            date={project.date}
                            stack={project.stack}
                            description={project.description}
                            url={project.url}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </ThemeProvider>
    );
}

export default Projects;