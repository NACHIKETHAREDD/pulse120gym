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
const ContactPage_post = ( req, res)=>{
    const {name, mobile, email, message} = req.body;
    const newRecord = new models.Contact({
        username:name,
        mobile:mobile,
        email:email,
        message:message
    });
    newRecord.save();
    res.redirect('/')
}

module.exports = {
    HomePage,
    GalleryPage,
    TrainerPage,
    ShopPage,
    ContactPage,
    ContactPage_post
};