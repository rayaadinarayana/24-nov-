const express=require("express")
const app=express()
const port=4000
const cors=require("cors")
const bodyparser=require("body-parser")

app.use(bodyparser.urlencoded({
	extended:true
}))
	

app.use(bodyparser.json())
app.use(cors())


app.get("/",(req,res)=>{
res.send("how are you")
})
app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const {name,age}=req.body
	console.log(name,age,"values")
})
app.listen(port,()=>console.log("server is in port 4000"))