class Errorhandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err,req, res, next)=>
{
    err.statusCode = err.statuscode || 500;
    err.message = err.message ||"internal server error ";

    console.log(err);
    
    if(err.name === "castError"){
        const massege = `invalid ${err.path}`;
        err = new Errorhandler(massege,400);
        
    }
    if(err.name === "JsonWebTokenError"){
        const massege = "json web token is invalid ,try again";
        err = new Errorhandler(massege,400);

    }
    if(err.name === "TokenExpiredError"){
        const massege = "json web token is expired ,try again";
        err = new Errorhandler(massege,400);

    }
    if(err.code === 11000){
        const massage = `duplicate ${Object.keys(err.keyValue)} entered`;
    
}
