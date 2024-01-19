const home = async(req,res)=>{
    res.status(200).send('Welcome using controller');
    };
const register = async(req,res)=>{
        try {
            console.log(req.body);
            res.status(200).send({"msg":req.body});
        } catch (error) {
         console.log(error);
        }    };
        

module.exports = {home,register};