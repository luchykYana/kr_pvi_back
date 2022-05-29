const {Image} = require('../dataBase');

module.exports = {
    getAllImages: () => Image.find()
}
