

const validator = (schema) => async(req,res,next) =>{

    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const status =  500;
        const message = "Backend error";
        const extraDetails = error.errors[0].message;
        error = {status,message,extraDetails};
        // console.log(error);
        next(error);
    }
}
module.exports = validator;