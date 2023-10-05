const page_services=require('../services/api.services')
require("dotenv").config();

const controllers = {
    senddetails:(req,res)=>{
        const name = req.body.name;
        const amount = req.body.amount;
        page_services.senddetails(name,amount);
    },
    fetchItems :(req,res)=>{
        page_services.fetchItems(res);
    }
}

module.exports=controllers;