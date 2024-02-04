import express from 'express'
import { getAll } from '../Controllers/Song';

export default (router: express.Router)=>{

    router.post('/get/songs',getAll);
}
