import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Cource = new Schema({
    name: String,
    des: String,
    img: String,
    createdAt: Date,
    updatedAt: Date,
});
export default mongoose.model('Cource', Cource);
