const express = require("express");
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const isLoggedIn = (req,res,next)=>{
	const logIn = false;
	if (logIn) {
		next();
	} else{
		return res.status(401).json({message:"Login Faild"})
	};
};

app.get('/test',(req,res)=>{
	res.status(200).send({
		message:"api is working!",
	})
});
app.post('/test',isLoggedIn,(req,res)=>{
	console.log("User Profile");
	res.status(200).send({
		message:"put api is working!",
	})
});


app.listen(3001, () => {
	console.log("Surver is Running at http://localhost:3001")
})