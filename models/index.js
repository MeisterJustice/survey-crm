import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const questionSchema = new Schema({
    name: {type: String},
    sex: {type: String},
    ageRange: {type: String},
    photographer: {type: String},
    maritalStatus: {type: String},
    dateCreated: {type: Date, default: Date.now}
});

export default mongoose.model("Question", questionSchema);