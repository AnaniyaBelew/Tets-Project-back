import { SongModel } from "../Model/Songs";


export const getSongsById=(id:string)=>SongModel.findById(id);
export const getAllSongs=()=>SongModel.find();
export const createSongs=(Info:Record<string,any>)=> new SongModel(Info).save().then((Song)=>Song.toObject());
export const findSongBuyTitle=(Title:string)=> SongModel.findOne({Title:Title});
export const updateSongById=(id:string,update:object)=>SongModel.findByIdAndUpdate(id,update);
export const deleteSongByID=(id:string)=>SongModel.findOneAndDelete({_id:id});
export const checkTitle=(artist:string,title:string)=>SongModel.exists({Artist:artist,Title:title});
export const checkTitleSameAlbum=(album:string,title:string)=>SongModel.exists({Album:album,Title:title});
export const checkAlbum=(artist:string,album:string)=>SongModel.exists({Artist:artist,Album:album});
export const getSongsStat=()=>SongModel.countDocuments();
export const getArtistStat=()=>SongModel.distinct('Artist');
export const getAlbumStat=()=>SongModel.distinct('Album');
export const getGenreStat=()=>SongModel.distinct('Genre');
export const getEachGenreStat=()=>SongModel.aggregate([
    {
        $group:{
            _id:'$Genre',
            count:{$sum:1}
        }
    }
])
export const getEachAlbumStat=()=>SongModel.aggregate([
    {
        $group:{
            _id:'$Album',
            count:{$sum:1}
        }
    }
])
export const getEachArtistStat=()=>SongModel.aggregate([
    {
        $group: {
          _id: '$Artist',
          albums: { $addToSet: '$Album' },
          songs: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          artist: '$_id',
          albumCount: { $size: '$albums' },
          songCount: '$songs'
        }
      }
])