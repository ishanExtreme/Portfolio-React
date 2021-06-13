import client from './client';

const plans = ()=> client.get("/plans/all");

export default {
    plans,
}