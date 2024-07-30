function publicPath(req, res) {
    const data = {
        message: "public",
    }
    return res.status(200).send(data);
}

function privatePath(req, res) {
    // get data from decoded token
    // req.user is available because isAuth middleware is used
    const userData = req.user;
    const data = {
        message: "private",
        data: userData
    };
    return res.status(200).send(data);
};

const privacyController = {
    publicPath,
    privatePath,
};

export default privacyController