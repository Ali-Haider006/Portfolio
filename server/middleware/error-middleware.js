const errorMiddleware = (err,req,res,next) =>{
    const status = err.status || 500;
    const message = err.message || "Backend error";
    const extraDetails = err.extraDetails || "No details found";
    return res.status(status).json({status,message,extraDetails});
}
module.exports = errorMiddleware;