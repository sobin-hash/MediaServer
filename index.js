//importing json-server dependancy/package 
const jsonServer=require('json-server')


//create server

const server = jsonServer.create()

//create Middlware

const middlware = jsonServer.defaults()

//implement middleware to server 

server.use(middlware)

//initializing router with resource

const router = jsonServer.router('db.json')

//implementing router

server.use(router)

//setting port number

const PORT = process.env.PORT || 4000


//activating server into listening for requests

server.listen(PORT,()=>{
    console.log("Json server is running in Port",PORT)
})
