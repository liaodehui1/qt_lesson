let url = require('url')

let request = {
  get url() { // request.url 不需要request.url()
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}

module.exports = request