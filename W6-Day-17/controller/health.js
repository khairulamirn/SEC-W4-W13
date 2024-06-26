export function getHealth(req, res) {
    const timestamp = new Date().toISOString();
    const resData = {
        status: "ok",
        app: "express-rest",
        time: timestamp,
    };
    res.json(resData);
}

export function postHealth(req, res) {
    const body = req.body;
    const timestamp = new Date().toISOString();
    const resData = {
        message: `Post health request received at ${timestamp}`,
        data: body,
    };
    res.json(resData);
}

export function getPrivate(req,res) {
    const resData = {
        message : "Get private request received",
    };
    res.json(resData);
}
