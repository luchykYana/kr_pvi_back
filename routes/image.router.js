const router = require('express').Router();

const {imageController} = require('../controllers');

router.get('/',
    imageController.getAll
);

router.post('/',
    imageController.createImage
)

module.exports = router;
