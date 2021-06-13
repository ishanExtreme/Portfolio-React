import client from './client';

const quote = ()=> client.get("/quote/get_quote");

export default {
    quote,
}