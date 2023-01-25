
exports.getJobs =(req,res,next) =>{
    res.status(200).json({success:true,
        data:'Welcome to our Job Board.\n This will display jobs in future'});
}