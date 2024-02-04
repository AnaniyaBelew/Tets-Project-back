import express from 'express'
import { createSong } from '../Controllers/Song';

export default (router: express.Router)=>{

    router.post('/create/song',createSong);
}
