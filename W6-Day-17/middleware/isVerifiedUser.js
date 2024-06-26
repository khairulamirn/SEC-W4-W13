function isVerifiedUser(req, res, next) { 
    // check the user from database
    const isUser = true;
    if(isUser) {
        // if user verified return next
        return next();
    } 
    const resData = {
        message: 'User is not verified',
    }
    return res.status(401).json(resData);
}

export default isVerifiedUser;