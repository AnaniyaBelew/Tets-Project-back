import express from 'express'
import { getSongStatistics } from '../Controllers/Song';

export default (router: express.Router)=>{

    router.get('/stat/song',getSongStatistics);
    router.get('/stat/artist',getSongStatistics);
    router.get('/stat/album',getSongStatistics);
    router.get('/stat/genre',getSongStatistics);
}
