module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const CookeSchema = new Schema({
        name: { type: String  },
    });

    return mongoose.model('novel', CookeSchema, 'novel');
}