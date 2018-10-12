const url = require("url")

class Response {}

class Request {}

class Express {

  constructor() {}

  // this function should register the middleware given as parameter
  // see the example given below
  use(fn) {}
  
  // complete the code for get so that all registered
  // middleware are called appropriateley, and if an error is
  // invoked, you should stop the chain and just print error
  get(url, callback) {}
}

let app = new Express()


app.use((req, res, next) => {
  console.log('in the first middleware')
  req.body = {
    name: 'mehdi', 
    age: 24
  }
  // if you do not call next it should throw an
  // error and abort the execution of your callback
  next() // calling next is very important
})

app.use((req, res, next) => {
  console.log('in the second middleware')
  req.query = url.parse('/home?key=value', true)
  next() // calling next is very important
})

app.get('/route', (req, res) => {
  console.log("inside the route")
  console.log(req, res)
})
