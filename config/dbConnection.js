const mongoose = require("mongoose");
const MONGO_URI='mongodb+srv://mehul:user123@mehul.vbhme6g.mongodb.net/mehul';
const connectDB = async() => {
	try
	{
		const db = process.env.MONGO_URI;
		await mongoose.connect(db);
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;