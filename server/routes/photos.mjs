import express, { Router } from "express";
import Photos from "../models/photos.mjs";
import passport from "passport";
import { checkIfAdmin, checkIfConnected } from "../utils/userChecks.mjs";
import { upload, destination } from "../utils/multerUpload.mjs";
import fs from "node:fs";

const router = Router();


const checkPhoto = async (id, res) => {
  const oldPhoto = await Photos.findById(id);
  if (!oldPhoto) return res.send({ error: "Photo not found" });
  return oldPhoto;
};

// create photos

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  checkIfAdmin,
  upload.array('images', 12),
  async (req, res) => {
  const newPhotos=[]

   

    try {
        req.files.forEach(async(imageFile) => {
            const image = imageFile.filename;
            const newPhoto = new Photos({ image });
            await newPhoto.save();
            newPhotos.push(newPhoto)
    
        })
      // Maybe send notification later
      return res.send({ msg: "Photos created!", newPhotos });
    } catch (error) {
      return res.send({ error: error.msg });
    }
  }
);

router.use(express.json());

router.get("/", async(req,res) => {
  const {cursor,limit} = req.query
  const query = {} 
  if(cursor){
    query._id = {$lt:cursor}
  }
 
  try {
    const allPhotos = await Photos.find(query,null,{limit:Number(limit)|| 0,sort: {_id:-1}})
    return res.send(allPhotos)
    
  } catch (error) {
    return res.send({error: error.message})
  }

})
router.get("/:id",async(req,res) => {
  const {id} = req.params 

  try {
    const singlePhoto = await Photos.findById(id)
    if(!singlePhoto) return res.send({error: "Photo not found!"})
      return res.send(singlePhoto)
  } catch (error) {
    return res.send({error: error.message})
  }

})

router.delete("/:id", passport.authenticate("jwt",{session:false}), checkIfAdmin, async(req,res) => {
  const { id } = req.params;
  const oldPhoto = await checkPhoto(id, res);
  try {
    // delete cover
    try {
      fs.unlinkSync(destination + oldPhoto.image)
    } catch (error) {
      
    }
    await Photos.findByIdAndDelete(id)
    return res.send({ msg: "Photo deleted!", oldPhoto });
    
  } catch (error) {
    return res.send({error: error.message})
  }

})

export default router;
