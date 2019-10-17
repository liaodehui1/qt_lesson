const http = require('http')

http.createServer((req,res)=>{
  if(req.url === '/api/books'){
    console.log('3002')
    let list = [{book:'book1'},{book:'book2'}]
    res.end(`getBooks(${JSON.stringify(list)})`)
  }
}).listen(3002,()=>{
  console.log('server is running on port 3002')
})