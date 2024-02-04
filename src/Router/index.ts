import express from 'express'
import createSongRouter from './createSongRouter';
import getListOfSongs from './getListOfSongs';
import deleteSongRouter from './deleteSongRouter';
import updateSongRouter from './updateSongRouter';
const router= express.Router();

export default ():express.Router=>{
    createSongRouter(router);
    getListOfSongs(router);
    deleteSongRouter(router);
    updateSongRouter(router);
    return router;
}