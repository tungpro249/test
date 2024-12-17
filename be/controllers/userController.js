const userController = {
    getInfo: (res, req) => {
        const id = req.params.id;
        const user = userService.getInfo(id);
        res.json(user);
    },
}

module.exports = userController;