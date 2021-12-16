const movieService = require('../services/MovieService');

class MovieController {
    async GetAll(req, res) {
        res.send(await movieService.GetAll());
    }

    async GetDetailedById(req, res) {
        res.send(await movieService.GetDetailedById(req.params.id))
    }

    async CreateOne(req, res) {
        let movie = {
            title: req.body.title,
            genreId: req.body.genreId,
            poster: req.body.poster,
            duration: req.body.duration,
            ageLimit: req.body.ageLimit,
            date: req.body.date,
            countryId: req.body.countryId,
            director: req.body.director,
            actors: req.body.actors,
            synopsis: req.body.synopsis,
            startRentalDate: req.body.startRentalDate,
            endRentalDate: req.body.endRentalDate
        };

        res.send(await movieService.CreateOne(movie));
    }

    async EditById(req, res) {
        let movie = {
            title: req.body.title,
            genreId: req.body.genreId,
            poster: req.body.poster,
            duration: req.body.duration,
            ageLimit: req.body.ageLimit,
            date: req.body.date,
            countryId: req.body.countryId,
            director: req.body.director,
            actors: req.body.actors,
            synopsis: req.body.synopsis,
            startRentalDate: req.body.startRentalDate,
            endRentalDate: req.body.endRentalDate
        };

        res.send(await movieService.EditById(req.params.id, movie));
    }

    async DeleteById(req, res) {
        await movieService.DeleteById(req.params.id);
        res.send('Ok');
    }
}

module.exports = new MovieController();