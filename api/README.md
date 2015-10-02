API Workshop
=============

 An api, otherwise know as Application Programming Interface, is an easy way to share content between two parties. It is language agnostic which means that people can use any language they want and get the same results. 

 Some examples of this are:
 --------------------------

  * Facebook Login -- many applications that are not operated by facebook can have a single login for their application
   * Google Maps
    * Youtube 
     * Twitter

     RESTFUL API's 
     -------------
     ![Alt text](http://cdn.meme.am/instances/250x250/55984864.jpg "A restful api MEME")

     So what does have a RESTFUL API actually mean?

     RESTFUL is a word typically used to describe API's, in plain terms it means that you abide by some standards that are defined below. It is a bit hard to describe REST (represenatational state transfer) as the web is built using RESTFUL principles so many things we take for granted are actually defined by the REST standard. Here's a brief overview: 

     A RESTFUL API will have the following properties:
      * Base URI which in this case is http://api.seanssmith.me/
       * Uses an internet media type in this case JSON
        * Uses standard HTTP methods (I'll talk about these later)
	 * Stateless 
	  * Server takes care of the hard stuff like memory management
	    
	    HTTP Verbs:
	    -----------

	    HTTP has a few verbs that are standardized. Many languages and different platforms can communicate with the server using these codes combined with a URI.

	    Verb | Meaning
	    ---- | ---
	    GET | This is what your browser is doing when you request google.com, it simply means get information at this resource. The URI should indicate what you're retreiving. For example ```GET http://api.seanssmith.me/time``` should return the current time.
	    HEAD | This is the exact same as the GET request except it doesn't return the body of the request. It only returns the header information which includes status codes and content type. 
	    POST | Tells the server to accept some information that is given in the message body. 
	    PUT | Update some information that is already there.
	    DELETE | Deletes some information that exists.
	        
		Status Codes:
		------------

		Http status codes are integer codes that tell you the status of some of your request. They are easy to check before you actually check the contents of your request so it's easy 

		Status Code | Meaning
		----------- | -----------
		200       |  All Good :)
		302       |  We found the resource but at a different URI. Let me direct you there.
		400       |  Bad request -- a client problem. For example calling ```GET http://api.seanssmith.me/tiem```
		403       | Forbidden -- You do not have access to this resource. 
		404       | Not Found, this is when you request some info that doesn't exist
		500       | Internal server error -- as the name says usually not your issue

		URL Structure
		-------------

		You have probably seen a url that looks like this: ```http://www.reddit.com/r/Bitcoin/search?q=hi+reddit```

		The structure of a url is as follows:

		```
		<scheme>://<username>:<password>@<host>:<port>/<path>;<parameters>?<query>#<fragment>
		```

		Most of that isn't actually used in a api request. Typically you request some ```scheme``` usually ```http``` or ```https``` with some ```host``` for example ```seanssmith.me```. In this case I'm using a ```subdomain``` ```api.seanssmith.me``` as my personal site is running on http://seanssmith.me. You specify some path, which in the case of a RESTFUL API is a resource, and you specify some parameters. 

		The arguments of a URL are where it becomes interesting. You can include key value pair arguments in a uri.

		```
		http://www.reddit.com/r/Bitcoin/search?q=hi+reddit&type=json
		```

		The above url has the key ```q``` and the url encoded value ```hi+reddit```. It encodes the value query "hi reddit" as ```hi+reddit``` because spaces cannot be part of URL's so it encodes the space as ```+```. 

		To include arguments after the url include a ```?``` directly after the path. Then include a key value pair ```key=value```, subseqent key value pairs are seperated by ```&``` like so: ```http://www.reddit.com/r/Bitcoin/search?q=hi+reddit&type=json```. They can also be seperated by ```;```.

		In general arguments in the url will specify a condition about the resource that you are trying to use. In this case I was searching reddit with the arguments "hi reddit".

		Absolute URL's
		--------------

		Many people don't know a lot about absolute versus relative URL's, they act a lot like a unix file path. An absolute url has a scheme whereas a relative url does not. The more nitty gritty details are below.

		```
		1)
		base: http://www.blah.com/yadda1/yadda2/yadda3?param1=foo#bar
		relative: rel1

		final absolute: http://www.blah.com/yadda1/yadda2/rel1

		2)
		base: http://www.blah.com/yadda1/yadda2/yadda3?param1=foo#bar
		relative: /rel1

		final absolute: http://www.blah.com/rel1

		3)
		base: http://www.blah.com/yadda1/yadda2/yadda3?param1=foo#bar
		relative: ../rel1

		final absolute: http://www.blah.com/yadda1/rel1

		4)
		base: http://www.blah.com/yadda1/yadda2/yadda3?param1=foo#bar
		relative: ./rel1?param2=baz#bar2

		final absolute: http://www.blah.com/yadda1/yadda2/rel1?param2=baz#bar2

		5)
		base: http://www.blah.com/yadda1/yadda2/yadda3?param1=foo#bar
		relative: ..

		final absolute: http://www.blah.com/yadda1/
		```

		Request Structure
		---------

		So when you send a http request to a certain uri what are you actually sending? You send some structured text to a certain url. 

		**GET** requests have no request body. To send information to a request you can use arguments encoded into the URL. For example when you send a get request to google.com you are actually sending the request to that URL with some headers as defined below:

		```GET https://www.google.com/?q=cats%20and%20stuff```
		![Alt Text](http://www.tcpipguide.com/free/diagrams/httpresponse.png "GET Request")

		**POST** requests have a request body that looks largely like the arguments of a url.

		**Request**
		```
		Remote Address: 128.197.10.20:80
		Request URL: http://cs-people.bu.edu/swsmith/email2.php
		Request Method: POST
		Status Code: 200 OK
		```

		**Request Headers**
		```
		Accept:*/*
		Accept-Encoding:gzip, deflate
		Accept-Language:en-US,en;q=0.8
		Connection:keep-alive
		Content-Length:52
		Content-Type:application/x-www-form-urlencoded; charset=UTF-8
		Host:cs-people.bu.edu
		Origin:http://seanssmith.me
		Referer:http://seanssmith.me/contact.html
		User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36
		Form Dataview parsed
		```

		**Request Body**
		```
		name=Sean Smith&email=swsmith@bu.edu&message=Hi Sean
		```

		**Response Headers**
		```
		HTTP/1.1 200 OK
		Date: Tue, 03 Mar 2015 07:22:52 GMT
		Server: Apache/2.2.15 (Scientific Linux)
		X-Powered-By: PHP/5.3.3
		Access-Control-Allow-Origin: *
		Content-Length: 144
		Connection: close
		Content-Type: text/html; charset=UTF-8
		```

		**Response Body**
		```
		name=Sean Smith&email=swsmith@bu.edu&message=Hi Sean
		Response Headersview parsed
		```

		The API
		-------

		Better documentation is here: http://api-workshop.readme.io/v1.0/docs

		```
		login: swsmith@bu.edu
		password: nP?U6U7k}u
		```


		The absolute url is ```http://api.seanssmith.me/```

		The API has the following relative endpoints:

		* ```GET /``` -- returns version info and links to documentation
		* ```GET /reddit``` -- returns some random JSON
		* ```POST /reddit``` -- returns some random JSON given a reddit link and count
		* ```GET /time``` -- returns current EST time in JSON format
		* ```POST /addevent``` -- adds a calendar event of the following format

		The ```/add_event``` adds an event with the following format:

		```python
		data = {
			"name": name,
				"start": start, 		 #start time
					"end": end,				 #end time
						"location": location,
							"description": description,
							}
							```

							* ```GET /event``` -- gets the json of an event when you give it an id as a parameter
							* ```DELETE /deleteevent``` -- deletes an event of the id passed as an argument
