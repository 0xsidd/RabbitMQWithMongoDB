import express from 'express';
import { fetchEvents } from './controllers/eventStore';
// import {sendData} from "../send";

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    //allow access from every, elminate CORS
    // res.setHeader('Access-Control-Allow-Origin','*');
    // res.removeHeader('x-powered-by');
    // //set the allowed HTTP methods to be requested
    // res.setHeader('Access-Control-Allow-Methods','POST');
    // //headers clients can use in their requests
    // res.setHeader('Access-Control-Allow-Headers','Content-Type');
    //allow request to continue and be handled by routes
    next();
  });

// Routes
app.get('/fetch-events', fetchEvents);


export default app;


// ['0x13cbcd5863f22153a2a55b7d2d53b3bcbb1c65a8ea47b899735edef2750290b9','0x1faee158288657c9b9478a9abd690fe834367e1b16ccd83dfbf6d2d3f186c207'] 
// 
// [['0x19660b3bbc92b674c77c75d5d4bb2be1e9ce9685467421e8c8a4a539ef240297','0x304afc20b3df3527acb2c23954eb847114e55e3d0a7f867f793250d1fd5a32e2'],['0x2552e959ee55af0b571d0a973560f58d770c093b5f10c1268bbc64db25dbd0ce','0x213a95f7bbff68051e10a5d66abf15e7c9a2e882bb277b636a02585433dc0e3e']] 
// 
// ['0x256c11bad57c3bdd9cd82fcbbad1a37ceaee219a2d7f2184fc574dc84aaf5c57','0x2a4ba6920ed1634f7eaa27b49602854eff730e4cbe9e3ff89c9ac99df1be1725']
// 
// ['0x2778f900758cc46e051040641348de3dacc6d2a31e2963f22cbbfb8f65464241','0x000000000000000000000000000000000000000000000000000000000000000a']
