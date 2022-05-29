const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const {imageRouter} = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/kr_pvi').then(() => {
    console.log('Mongo is connected');
});

app.use(cors({origin: _configureCors}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/images', imageRouter);
app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            message: err.message
        });
});

app.listen(5000, () => {
    console.log('App listen PORT 5000');
})

function _configureCors(origin, callback) {
    return callback(null, true);
}
