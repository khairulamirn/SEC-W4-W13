function getHealth (res, req) {
    res.status(200).send('OK');
}

function postHealth (res, req) {
    const data = {
        body: req.body,
        message: "POST request successful" 
    }
    res.status(200).send(data);
}

const healthController = {
    getHealth,
    postHealth
}

export default healthController