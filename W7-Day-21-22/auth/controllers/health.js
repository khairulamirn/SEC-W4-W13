function getHealth (req, res) {
    const data = {
        status: "OK",
        messgae: "Health check successful"
    }
    res.status(200).send(data);
};

function postHealth(req, res) {
    const body = req.body;
    const data = {
        status: "OK",
        message: "Post health check successful",
        body: body
    }
    res.status(200).send(data);
};

const healthController = {
    getHealth,
    postHealth
};

export default healthController;