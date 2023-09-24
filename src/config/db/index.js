import mongoose from 'mongoose';
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/f8_study_dev');
        console.log('Ket noi toi du lieu thanh cong');
    } catch (error) {
        console.log('Err: loi ket noi toi mongodb');
    }
}
export default { connect };
