import express from 'express'
import { updateSong } from '../Controllers/Song';

export default (router: express.Router)=>{

    router.put('/update/:title',updateSong);
}
