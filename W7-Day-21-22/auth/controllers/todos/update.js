function updateTodo (req,res) {
    const data = {
        message: "Todo updated successfully",
    }
     return res.status(200).send(data);
}

export default updateTodo