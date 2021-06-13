import client from './client';

const projects = ()=> client.get("/projects/all");

export default {
    projects,
}