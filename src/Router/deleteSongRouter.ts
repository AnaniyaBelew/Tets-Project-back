import express from 'express'
import { deleteSong } from '../Controllers/Song';

export default (router: express.Router)=>{

    router.delete('/delete/:title',deleteSong);
}
