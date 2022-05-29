const {Image} = require('../dataBase');
const {imageService} = require('../services');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const images = await imageService.getAllImages();

            res.json(images);
        } catch (e) {
            next(e);
        }
    },

    createImage: async (req, res, next) => {
        try {
            console.log(req.body);
            const image = req.body;

            const newOne = await Image.createOne(image);

            res.json(newOne);
        } catch (e) {
            next(e);
        }
    }
}
