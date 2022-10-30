import mongoose from 'mongoose';

const TestModelSchema = new mongoose.Schema({
	testValue: String,
});

export default mongoose.models.TestModel || mongoose.model('TestModel', TestModelSchema);
