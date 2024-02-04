import express from 'express'
import { getAlbumStatistics, getArtistStatistics, getEachAlbumStatistic, getEachArtistStatistic, getEachGenreStatistic, getGenreStatistics, getSongStatistics } from '../Controllers/Song';

export default (router: express.Router)=>{

    router.get('/stat/song',getSongStatistics);
    router.get('/stat/artist',getArtistStatistics);
    router.get('/stat/album',getAlbumStatistics);
    router.get('/stat/genre',getGenreStatistics);
    router.get('/stat/each/genre',getEachGenreStatistic);
    router.get('/stat/each/album',getEachAlbumStatistic);
    router.get('/stat/each/artist',getEachArtistStatistic);
}
