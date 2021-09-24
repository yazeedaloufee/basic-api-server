'use strict';
const express = require('express');
const Food = require('../models/food.js');
const router = express.Router();
const food = new Food;

router.get('/',getAllFood);
router.get('/1/:id',getFoodWithId)
router.post('/',createFood);
router.delete('/1/:id',deleteFood);
router.put('/1/:id',updateFood);




// controller
function updateFood(req,res){
    const resObj=food.update(req.params.id,req.body);
    res.status(203).json(resObj);
}
function deleteFood (req,res){
    const resObj= food.delete(req.params.id);
    res.status(200).json(resObj);
}

function createFood(req,res){
const resObj=food.create(req.body);
res.status(201).json(resObj);

}
function getAllFood(req,res){
    const resObj=food.read();
    res.status(200).json(resObj)

}

function getFoodWithId(req,res){
    const resObj=food.read(req.params.id);
    res.status(200).json(resObj)
}

module.exports=router;