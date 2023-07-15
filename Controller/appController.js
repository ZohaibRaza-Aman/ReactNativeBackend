const { sendResponse } = require("../Helper/helper");
const AppModel = require("../models/appModel");

const appController = {
    getApp:async(req,res)=>{
        try{
        const Respons = await AppModel.find();
        if(!Respons){
            res.send(sendResponse(false,null,"No Data Found")).status(404);
        }else{
            res.send(sendResponse(true,Respons,"Get Data Successfully"))
        }
        }catch(e){
            console.log(e)
            res.send(sendResponse(false)).status(400)
        }
    },
    getAppId:async(req,res)=>{
        try{
            let id = req.params.id;
            let result = await AppModel.findById(id);
            if(!result){
              res.send(sendResponse(false,null,"No Data On This ID")).status(404)
            }
            else{
              res.send(sendResponse(true,result,"Get Id Successfully")).status(200)
            }
          }
          catch(e){
            res.send(sendResponse(false,null,"Error")).status(400)
          }
    },
    postApp:async(req,res)=>{
        const {name,title,product,price} = req.body
        try{
            let errArrey = []
            if(!name){
                errArrey.push("Required : Name")
            }
            if(!title){
                errArrey.push("Required : Title")
            }
            if(!product){
                errArrey.push("Required : Product")
            }
            if(errArrey.length > 0){
                res.send(sendResponse(false,errArrey,null,"Required All Fields")).status(400);
                return;
            }
            else{
                let Obj = {name,title,product,price}
                let App = new AppModel(Obj)
                await App.save()
                if(!App){
                    res.send(sendResponse(false,null,"Internal Server Error")).status(400)
                }
                else{
                    res.send(sendResponse(true,App,"Data Save SuccessFully")).status(200)
                }
            }
        }
        catch(e){
            res.send(sendResponse(false,null,"Internal Seever ERROR")).status(404)
        }
    },
    putApp:async(req,res)=>{
        res.send("Edit App Data")
    },
    deleteApp:async(req,res)=>{
        try{
            let id = req.params.id;
            let result = await AppModel.findById(id);
            if(!result){
              res.send(sendResponse(false,null,"No Data On This ID")).status(404)
            }
            else{
              res.send(sendResponse(false,result,"Delete Id Successfully")).status(200)
            }
          }
          catch(e){
            res.send(sendResponse(false,null,"Error")).status(400)
          }
    }
}

module.exports = appController;