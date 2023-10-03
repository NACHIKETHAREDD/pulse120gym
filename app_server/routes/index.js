const multer = require('multer');
const upload = multer();
const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
//GET HomePage
router.get('/', ctrlLocations.HomePage);
//GET Gallery page
router.get('/gallery', ctrlLocations.GalleryPage);
//GET Trainer page
router.get('/trainer', ctrlLocations.TrainerPage);
//GET Shop page
router.get('/Shop', ctrlLocations.ShopPage);
//GET Contact page
router.get('/contact', ctrlLocations.ContactPage);
//POST Contact Page
router.post('/contact',ctrlLocations.ContactPage_post);
//GET About page
router.get('/about', ctrlOthers.About);



module.exports = router;

