
var responseHandler = function() {
    var xmlTxt = this.responseText;
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(xmlTxt, 'text/xml')

    doc.querySelectorAll('item').forEach((item) => {

        let parentCard = document.createElement('div')
        parentCard.className = 'card border-success rsscard'


        let cardHeader = document.createElement('h5')
        cardHeader.className = 'card-header'
        cardHeader.textContent = item.querySelector('title').textContent


        let cardBody = document.createElement('div')
        cardBody.setAttribute('className', 'card-body');

        // let cardTextChild = document.createElement('p')
        // cardTextChild.className = 'card-text p-2'
        // cardTextChild.innerHTML = item.querySelector('description').textContent

        let chapLinkChild = document.createElement('a')
        chapLinkChild.className = 'btn btn-outline-success'
        chapLinkChild.href = item.querySelector('link').textContent
        chapLinkChild.textContent = "Go website"

        parentCard.appendChild(cardHeader);
        // cardBody.appendChild(cardTextChild);
        cardBody.appendChild(chapLinkChild);
        parentCard.appendChild(cardBody);

        document.querySelector('#content').appendChild(parentCard)
    })

    console.log("status text", this.statusText);
    console.log("status code", this.status);
};

var logFeed = function(rssUrl) {
    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    // ready the system by calling open, and specifying the url
    var url = "https://www.royalroad.com/fiction/syndication/11209";
    request.open("GET", proxyurl+rssUrl);

    // send the request
    request.send();
}

var responseHandler2 = function() {
    var xmlTxt = this.responseText;
    var domParser = new DOMParser()
    let doc = domParser.parseFromString(xmlTxt, 'text/xml')

    doc.querySelectorAll('item').forEach((item) => {

        let parentCard = document.createElement('div')
        parentCard.className = 'card border-success rsscard'


        let cardHeader = document.createElement('h5')
        cardHeader.className = 'card-header'
        cardHeader.textContent = item.querySelector('title').textContent


        let cardBody = document.createElement('div')
        cardBody.setAttribute('className', 'card-body');

        // let cardTextChild = document.createElement('p')
        // cardTextChild.className = 'card-text p-2'
        // cardTextChild.innerHTML = item.querySelector('description').textContent

        let chapLinkChild = document.createElement('a')
        chapLinkChild.className = 'btn btn-outline-success'
        chapLinkChild.href = item.querySelector('link').textContent
        chapLinkChild.textContent = "Go website"

        parentCard.appendChild(cardHeader);
        // cardBody.appendChild(cardTextChild);
        cardBody.appendChild(chapLinkChild);
        parentCard.appendChild(cardBody);

        document.querySelector('#content').appendChild(parentCard)
    })

    console.log("status text", this.statusText);
    console.log("status code", this.status);
};

var showLatest = function(rssUrl) {
    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler2);

    const proxyurl = "https://cors-anywhere.herokuapp.com/"
    // ready the system by calling open, and specifying the url

    request.open("GET", proxyurl+rssUrl);

    // send the request
    request.send();
};
var rmvChild = function(){
    var container = document.getElementById("content");

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
};

var btnFeedArray = function() {
    return Array.from(document.querySelectorAll(".feed"))
};
var btnDeleteArray = function() {
    return Array.from(document.querySelectorAll(".delfeed"))
};

let sArr = []
let feedCount;
var btnFeedAddEventList = function() {
    btnFeedArray().forEach(function(item) {
        var s = item.getAttribute('src')
        sArr.push(s);
        feedCount++;
        item.addEventListener('click', function() {
            rmvChild();
            logFeed(s)
        })
    })
};


window.onload = function(e) {
    btnFeedAddEventList();
};