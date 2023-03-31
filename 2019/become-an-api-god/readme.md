# Workshop: Become an API God ⚡️

## Intro 👀
Welcome to the "Become an API God" Workshop! This workshop will teach you the basics of working with APIs and requests in Javascript.

Specifically, we will be primarily taking a look at get requests in Javascript and showing the data in a unique way. This is one of the coolest parts of data science!

## Outline 📜
This is a loose outline of what we'll be covering:

* What even *is* an API?
* What are APIs good for? 
* How to use an API?
* Make Your Own Web App Using APIs

## What's Included ✅

* index.html - *boilerplate necessary to make web app*
* styles.css - *basic styling sheet*
* index.js - *where we will be doing most of our work* 😉

### What Even *is* An API? 🥴

* API stands for Application Programming Interface 
* To be more specific, it is the part of a server that *receives request and sends responses*
* Trick(-y) question: What is the API do you use most?
	* Answer: web browsing! Everyday, your web browser makes requests to servers, such as GitHub.com, and the response is an HTML web page (which is just a fancily-formatted txt document!):
```
+--PHONE---+  +---------------->+--SERVER--+
||  WEB   ||  | GET request     |          |
||BROWSWER||  | for GitHub.com/ | +------+ |
|----------|  |                 |          |
||        ||  |                 | +------+ |
|| GitHub ||  |                 |          |
|| .com   ||  |                 | +------+ |
||        ||  |                 |          |
||  ENTER+----+                 +----------+
||        ||     +-WEB PAGE--+  |
|----------|     |GitHub.com |  |
+----------+     +-----------+  |
           ^     |           |  |
           |     |  ^-----^  |  |
           |     |  | 0.0 |  |  |
           |     |  | _|_ |  |  |
           |     |  +-----+  |  |
           |     |           |  |
           |     |  Explore  |  |
           |     |   Repos   |  |
           |     +-----------+  |
           +--------------------+
```
* And that's it. All an API *really* is. It can even be generalized more so. An API does not necessarily have to live on a server. It can be really anything that "listens" for requests and is able to send responses back
* The places where an API listens at is called an **endpoint**
* When you are requesting a normal webpage, the endpoint would be the page's URL
 
### What are APIs good for? 👾
* Sure, APIs allow you to request web pages, but what can that be really used for? My browser does that all the time, what is so special about that?
	* Well, APIs do not always *have* to return normal web pages as a response. In fact, the most typical response of an API is actually something called a JSON file. (Not counting the real most common response of web pages which is comprised of HTML, CSS, and Javascript files!)
* JSON file?
	* JSON stands for "Javascript Object Notation" 
	* It is a standardized way for representing pretty much any form of data
	* Example Response (it is a response from a request about an image's information):
```yaml
{
  "data": {
    "id": "orunSTu",
    "title": "A day at the beach",
    "description": "Happy-looking family playing at the beach",
    "datetime": 1495556889,
    "type": "image/gif",
    "animated": false,
    "width": 600,
    "height": 400,
    "size": 42,
    "views": 0,
    "bandwidth": 0,
    "vote": null,
    "favorite": false,
    "nsfw": null,
    "link": "http://i.imgur.com/orunSTu.gif"
  },
  "success": true,
  "status": 200
}
```
* A response also sends back something called a **response header**
* The thing you normally care about most from the header is the **response code**
* Here are some typical response codes and their meanings

Status Code | Meaning
----------- | -----------
200       |  All Good :)
302       |  We found the resource but at a different URI. Let me direct you there.
400       |  Bad request -- a client problem. For example calling ```GET https://thecatapi.com/thisurlisnonsense```
403       | Forbidden -- You do not have access to this resource. 
404       | Not Found, this is when you request some info that doesn't exist
500       | Internal server error -- as the name says usually not your issue

* APIs are used for many things, let's take a look at [https://apilist.fun](https://apilist.fun) to explore some uses


### How to use an API? 💻
* Since 99% of APIs communicate through JSON, using an API in any language is relatively easy 
* Today, we will be taking a look at how to use an API through Javascript
* `fetch()` - fetch is a new function in Javascript that allows developers to use APIs way easier than in the past (which was through the now outdated method called "AJAX Requests") 
* `fetch()` is better because it is *asynchronous* or non-blocking. It means that your page does not have to wait on it to complete for the rest of it to load
* Sometimes, a developer does not want this, and that is why we will be exploring these patterns in this workshop

### Make Your Own Web App Using APIs 🌐
* Today, we will be using the [The Cat API](https://docs.thecatapi.com)
* Let's follow the quick-start for getting a random kitty…
* Look [here](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for hints on how to use the fetch API
* But what if we want to do things like search or upload with our API?
	* You will now need to supply something called a key. This is normally sent as a **header** argument
	* The "header" is a secret part of your request that the browser makes without you knowing!
	* You need to tell the request to include your key in the header to allow you to do more things with the API which require a key
	* You may also specify the request type such as GET, POST, PUT, or DELETE. However, due to the way the web has evolved, these commands are mostly meaningless. They do not serve the same purpose they used to and you can technically use a GET request for every request you want, even if the GET request is POST-ing data or DELETE-ing it. 
* Moving on and future steps:
	* Can you implement image uploading?
	* How about you combine this API with another API, such as the Twilio API?
