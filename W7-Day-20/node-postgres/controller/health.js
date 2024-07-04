function getHealth (req, res) {
    const data = {
        status: "OK",
        messgae: "Health check successful"
    };
    return res.status(200).send('OK');
}

function postHealth(req, res) {
    const body = req.body;
    const data = {
        status: "OK",
        message: "Health check successful",
        body: body
    };
    return res.status(200).send(data);
}

const healthController = {
    getHealth,
    postHealth
}

export default healthController;