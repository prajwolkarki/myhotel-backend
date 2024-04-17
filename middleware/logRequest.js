module.exports= logRequest = (req,res,next)=>{

    res.send(`[${new Date().toLocaleString()}] Request made to ${req.originalUrl}`);
    next();
}