function deleteTodo (req,res) {
    const data = {
        message: "Todo deleted",
    }
     return res.status(200).send(data);
}

export default deleteTodo