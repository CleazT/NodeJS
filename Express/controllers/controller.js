const getAll = (req, res) => {
    res.send("Ini data dari get all")
}

const create = (req, res) => {
    res.send(req.body)
}

module.exports = {
    getAll,
    create
}