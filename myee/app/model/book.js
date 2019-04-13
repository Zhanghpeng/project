module.exports = app =>{
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    const BookSchema = new Schema({
        id:String,
        name:String,
        author:String,
        type:String,
        img:String,  
        publish:String,
        date:String,
        info:String

    });
    return mongoose.model("Book",BookSchema);

}