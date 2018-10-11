const url = require('url')

class Request {}

class Response {}

class Express {
  constructor() {
    this.mids = [];
  }

  set(name, value) {
    
  }
  use(fn) {
    this.mids.push(fn);
  }

  get(fn) {
    let request = new Request();
    let response = new Response();
    let index = 0;
    while (index < this.mids.length) {
      let cur = index
      this.mids[index](request, response, () => {
        index += 1;
      });
      if(index - cur != 1) break
    }
    if(index == this.mids.length) {
      console.log('success')
    }else {
      console.log('error')
      return
    }
    fn(request, response)
  }
}

let express = new Express();

function setTheRequestQuery(req, res, next) {
  req.query = '/helo?lang=en'
  next()
}

function requestBodyParsingUrl(req, res, next) {
  req.body = url.parse(req.query, true).query
  next()
}
express.use(setTheRequestQuery);

express.use(requestBodyParsingUrl);

express.use((req, res, next) => {
  console.log("the third middleware is called");
  next();
});

express.get((req, res) => {
  console.log(req.body, res);
});


express.set('key', 'value')