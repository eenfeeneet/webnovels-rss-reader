
// what to do when we recieve the request
var doRequest = function(userinput) {

    var data = { "quote": userinput };

    var responseHandler = function() {
        let parentQuote = document.querySelector("#quotes-list");
        let listChild = document.createElement('li');
        listChild.innerText= userinput;
        listChild.className= "list-group-item d-flex justify-content-between align-items-center";
        parentQuote.appendChild(listChild);

        console.log("hello")
        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    var url = "/";
    request.open("post", url);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // send the request
    request.send(JSON.stringify(data));
};

var logFeed = function() {
    var responseHandler = function() {
        var xmlTxt = this.responseText;
        var domParser = new DOMParser()
        let doc = domParser.parseFromString(xmlTxt, 'text/xml')
        console.log(doc)
        doc.querySelectorAll('item').forEach((item) => {
            let h5 = document.createElement('h5')
            h5.textContent = item.querySelector('title').textContent
            document.querySelector('#output').appendChild(h5)
        })

        console.log("hello")
        console.log("response text", this.responseText);

        console.log("status text", this.statusText);
        console.log("status code", this.status);

    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    // ready the system by calling open, and specifying the url
    var url = "https://www.royalroad.com/fiction/syndication/24709";
    request.open("GET", proxyurl+url);




    // send the request
    request.send();
}

var getFeed = function() {
    var responseHandler = function() {
        var xmlTxt = this.responseText;

        var domParser = new DOMParser()
        let doc = domParser.parseFromString(xmlTxt, 'text/xml')

        var feedUrl = doc.querySelector('link[type="application/rss+xml"]')
        let url2 = domParser.parseFromString(feedUrl, "text/html")
        let url3 = new Text(url2)
        console.log(feedUrl)
        console.log(Object.keys(feedUrl))


        let h5 = document.createElement('h5')
        h5.textContent = feedUrl

        document.querySelector('#output-feed').appendChild(h5)

        console.log("hello")
        console.log("status text", this.statusText);
        console.log("status code", this.status);
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // var input = document.querySelector('#input');
    // var url = input.value;
    //var url = document.getElementById("#input").innerHTML
    var url = document.querySelector('textarea').value
    console.log(url)
    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    // ready the system by calling open, and specifying the url

    request.open("GET", proxyurl+url);

    // send the request
    request.send();
};


// var button = document.getElementById("btn-input");
// var buttonGet = document.getElementById("btn-get");
// var buttonShow = document.getElementById("btn-show");

// buttonShow.addEventListener("click", function() {
//     logFeed();
// })
// buttonGet.addEventListener("click", function() {
//     getFeed();
// })
// button.addEventListener("click", function() {
//     var input = document.querySelector('#input');
//     var inputQuote = input.value;
//     doRequest(inputQuote);
// })