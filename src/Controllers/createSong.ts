import express from 'express';
import { checkAlbum, checkTitle, checkTitleSameAlbum } from '../Repositories/SongsRepository';

export const createSong=async(req:express.Request,res:express.Response)=>{
        try {
            const {Title,Artist,Album,Genre}=req.body;
            if(!Title||!Artist||!Genre) return res.sendStatus(400).send("Title,Artist,Album are requred ");
            
            // diffrent songs might have the same Title so I have allowed duplicate Titles as long as they don't belog to the same artist

            const duplicate_title= await checkTitle(Artist,Title);
            const duplicate_title_album=await checkTitleSameAlbum(Album,Title);
            const duplicate_album= await checkAlbum(Artist,Album);

            if(duplicate_title)return res.sendStatus(400).send("Artist can't have songs with the same Title, Change the title Please");
            if(duplicate_title_album)return res.sendStatus(400).send("Album can't have songs with the same Title, Change the title Please");
            if(duplicate_album)return res.sendStatus(400).send("Artist can't have more than on Album with the same Name, Change the Album Please");
            

            
        } catch (error) {
            console.log(error);   
        }
} 