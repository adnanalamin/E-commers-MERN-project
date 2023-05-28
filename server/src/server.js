const express = require("express");
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/test',(req,res)=>{
	res.status(200).send({
		message:"api is working!",
	})
});


app.listen(3001, () => {
	console.log("Surver is Running at http://localhost:3001")
})