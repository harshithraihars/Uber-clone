const http=require("http")
const app=require("./app");
const conneectDb = require("./DB/connectDb");
const PORT=process.env.PORT ||5000;
const server=http.createServer(app)
server.listen(PORT,async ()=>{
    await conneectDb()
    console.log(`server is listening at the ${PORT}`,);
    
})