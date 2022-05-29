const {model, Schema} = require('mongoose');

const imageSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }

}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

imageSchema.statics = {
    async createOne(Object) {
        return this.create(Object);
    }
};

module.exports = model('image', imageSchema);
