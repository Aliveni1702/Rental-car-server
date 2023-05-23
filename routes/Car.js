const express = require('express')
const {getALLCarDetails,CreateAddCar,editAddedCar, createCarDetails,AddCarData, deleteCar}= require('../controllers/CarContollers')
const { getbookdetail,bookdetailcontrol,updatebooking} = require('../controllers/destinationControllers')
const Addcar = require('../models/addCarModel');

const router = express.Router();


router.get('/carDetails', getALLCarDetails);
router.post('/createCar', createCarDetails)


router.get('/adminpageCars', AddCarData)

router.put("/editcar/:id", editAddedCar);
router.post('/addcar',CreateAddCar)
router.delete('/deleteCar/:id', deleteCar)



router.get('/getbookingdetails',getbookdetail);
router.post('/bookingdetails',bookdetailcontrol);

router.put('/updatebooking/:id',updatebooking);


module.exports = router;