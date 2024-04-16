const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItemModel');


router.get("/", async(req, res) => {
    try{
      const data = await MenuItem.find();
      console.log("Data fetched successfully");
      res.status(200).json(data);
  
    }catch(err){
      res.status(500).json({error:"Internal Server Error"});
    }
  });
  router.post("/", async(req, res) => {
      try{
          const data = req.body;
          const newMenu = new MenuItem(data);
          const response =  await newMenu.save();
          console.log('Data saved');
          res.status(200).json(response);
  
      }catch(err){
          res.status(500).json({error:"Internal Server Error"});
      }
  });
  router.get('/:tasteType',async(req,res)=>{
    try {
      const tasteType = req.params.tasteType;
      console.log(tasteType);
  
      if(tasteType == 'sweet' || tasteType == 'spicy' || tasteType == 'sour'){
        const response = await MenuItem.find({taste:tasteType});
        console.log("Data fetched successfully");
        res.status(200).json(response);
      }else{
        res.status(404).json({error:"Invalid work type"});
      }
      
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server error"});
    }
  });
  

  module.exports =router;