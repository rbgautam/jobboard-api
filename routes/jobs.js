const express = require('express')
const router = express.Router();
const { getJobs } = require('../controllers/jobsController');
router.route('/jobs').get(getJobs);

// router.get('/jobs',(req,res)=>{
//     res.status(200).json({success:true,
//         data:'Welcome to our Job Board.\n This will display jobs in future'});

// });
module.exports = router;