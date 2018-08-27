module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const CookeSchema = new Schema({
        _id: { type: Schema.Types.ObjectId },
        name: { type: String  },
        img: { type: String  },
        step: { type: String  }
    }, { 
        versionKey: false // 去掉__v 版本锁字段
    });

    return mongoose.model('cooks', CookeSchema);
}