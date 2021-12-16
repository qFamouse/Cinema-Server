const roleService = require('../services/RoleService');

class RoleController {
    async GetAll(req, res) {
        res.send(await roleService.GetAll());
    }
    async GetById(req, res) {
        res.send(await roleService.GetById(req.params.id));
    }
    async CreateOne(req, res) {
        let role = {
            name: req.body.name
        };

        res.send(await roleService.CreateOne(role));
    }

    async EditById(req, res) {
        let role = {
            name: req.body.name
        };

        res.send(await roleService.EditById(req.params.id, role));
    }

    async DeleteById(req, res) {
        await roleService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new RoleController();