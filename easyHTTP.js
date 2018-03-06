function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make HTTP GET request
easyHTTP.prototype.get = function(url, callback) {

  this.http.open('GET', url, true);

  let that = this;// fixed this on different scope

  this.http.onload = function() {
    if(that.http.status ===  200) {
      callback(null, that.http.responseText);// fixed asynchronous using callback
    } else {
      callback('Error: ' + that.http.status);
    }
  }

  this.http.send();
}

// Make HTTP Post request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let that = this;// fixed this on different scope

  this.http.onload = function() {
     
      callback(null, that.http.responseText);// fixed asynchronous using callback
    
  }

  this.http.send(JSON.stringify(data));
}

// Make HTTP PUT request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let that = this;// fixed this on different scope

  this.http.onload = function() {
     
      callback(null, that.http.responseText);// fixed asynchronous using callback
    
  }

  this.http.send(JSON.stringify(data));
}

// Make HTTP DELETE request
easyHTTP.prototype.delete = function(url, callback) {

  this.http.open('DELETE', url, true);

  let that = this;// fixed this on different scope

  this.http.onload = function() {
    if(that.http.status ===  200) {
      callback(null, 'Post Delete');// fixed asynchronous using callback
    } else {
      callback('Error: ' + that.http.status);
    }
  }

  this.http.send();
}