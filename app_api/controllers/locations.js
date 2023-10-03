const multer = require('multer');
const models = require('../../app_database/db/models');
const HomePage = (req,res)=>{
    res.render('pages/Home')
}
const GalleryPage = (req,res)=>{
    res.render('pages/Gallery')
}
const TrainerPage = (req,res)=>{
    res.render('pages/Trainer')
}
const ShopPage = (req,res)=>{
    res.render('pages/Shop')
}
const ContactPage = (req,res)=>{
    res.render('pages/Contact')
}
const push = function(req,res){
        models.Contact.create(
            {
                username:req.body.name,
                mobile:req.body.mobile,
                email:req.body.email,
                message:req.body.message
            }
        );
        res.render('pages/Trainer');}
   module.exports = {
    HomePage,
    GalleryPage,
    TrainerPage,
    ShopPage,
    ContactPage,
    push
   };