import express from 'express';
import { checkAlbum, checkTitle, checkTitleSameAlbum, createSongs, findSongBuyTitle, getAllSongs,updateSongById , deleteSongByID, getSongsStat, getArtistStat, getAlbumStat, getGenreStat, getEachGenreStat, getEachArtistStat, getEachAlbumStat} from '../Repositories/SongsRepository';
interface Update {
    Title?: string;
    Album?: string;
    Artist?: string;
    Genre?: string;
}
interface statResponse{
    statTitle:string;
    list?:string[];
}

export const createSong=async(req:express.Request,res:express.Response)=>{
        try {
            const {Title,Artist,Album,Genre}=req.body;
            if(!Title||!Artist||!Genre) return res.sendStatus(400).send("Title,Artist,Album are requred ");
            
            // diffrent songs might have the same Title so I have allowed duplicate Titles as long as they don't belog to the same artist

            const duplicate_title= await checkTitle(Artist,Title);
            const duplicate_title_album=await checkTitleSameAlbum(Album,Title);
            const duplicate_album= await checkAlbum(Artist,Album);

            if(duplicate_title)return res.status(400).send("Artist can't have songs with the same Title, Change the title Please");
            if(duplicate_title_album)return res.status(400).send("Album can't have songs with the same Title, Change the title Please");
           
            const Song= await createSongs({Title,Artist,Album,Genre});
            return res.status(200).json(Song).end();
            
        } catch (error) {
            console.log(error);   
        }
}
export const getAll= async (req:express.Request,res:express.Response)=>{
    try {
        const Songs= await getAllSongs();
        return res.status(200).json(Songs).end();
        
    } catch (error) {
        console.log(error);
        
    }
}
export const deleteSong=async(req:express.Request,res:express.Response)=>{
    try {
        const title= req.params.title;
        const song= await findSongBuyTitle(title);
        if(!song)return res.sendStatus(404).send("Could not find a song with this Title ")
        const Deleted=await deleteSongByID(song._id.toString());
        res.status(200).json(Deleted).end();
    } catch (error) {
        console.log(error);
        
    }

} 
export const updateSong=async(req:express.Request,res:express.Response)=>{
    try {
        const title= req.params.title;
        const {Title,Album,Artist,Genre}=req.body;
        const song= await findSongBuyTitle(title);
        if(!song)return res.sendStatus(404).send("Could not find a song with this Title ")
        const update:Update = {};
        if (Title !== undefined) update.Title = Title;
        if (Album !== undefined) update.Album = Album;
        if (Artist !== undefined) update.Artist = Artist;
        if (Genre !== undefined) update.Genre = Genre;
        const updated=await updateSongById(song._id.toString(),update);
        res.status(200).json(updated).end();
    } catch (error) {
        console.log(error);
        
    }

}
export const getSongStatistics=async(req:express.Request,res:express.Response)=>{
    try {
        let response={TotalSongs:0}
        let stat= await getSongsStat();
        stat?response.TotalSongs=stat:null;
        res.status(200).json(response).end();
        
    } catch (error) {
        console.log(error);
    }
}
export const getArtistStatistics=async(req:express.Request,res:express.Response)=>{
    try {
        let response:statResponse={statTitle:"Artists"}
        let stat= await getArtistStat();
        stat?response.list=stat:[];
        res.status(200).json(response).end();
        
    } catch (error) {
        console.log(error);
    }
}
export const getAlbumStatistics=async(req:express.Request,res:express.Response)=>{
    try {
        let stat= await getAlbumStat();
        res.status(200).json(stat).end();
        
    } catch (error) {
        console.log(error);
    }
}
export const getGenreStatistics=async(req:express.Request,res:express.Response)=>{
    try {
        let response:statResponse={statTitle:"Genres"}
        let stat= await getGenreStat();
        stat?response.list=stat:[];
        res.status(200).json(response).end();
        
    } catch (error) {
        console.log(error);
    }
}
export const getEachGenreStatistic=async(req:express.Request,res:express.Response)=>{
    try {
        let stats=await getEachGenreStat();
        res.status(200).json(stats).end();
        
    } catch (error) {
        console.log(error);
    }
}
export const getEachArtistStatistic=async(req:express.Request,res:express.Response)=>{
    try {
        let stats=await getEachArtistStat();
        res.status(200).json(stats).end();
        
    } catch (error) {
        console.log(error);
    }
}
export const getEachAlbumStatistic=async(req:express.Request,res:express.Response)=>{
    try {
        let stats=await getEachAlbumStat();
        res.status(200).json(stats).end();
        
    } catch (error) {
        console.log(error);
    }
}