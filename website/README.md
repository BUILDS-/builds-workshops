# Create Your Own Website

1. First you'll need to signup for a github account

	https://github.com

2. In the top bar of github click: 

	`+ > New repository`

3. Title your repository:

	`[github_username].gihub.io`

4. Add a file called index.html, copy it from this repo.

5. Open up the page in your web browser by double clicking the file. 

6. Change all the occurences of `Your Name` to your name.

7. Put an image in the same repository and change the following tag to the name of your image.

	<src="yourimage.jpg" class="thumbnail displayed" height="400px" align="middle">

8. Boostrap has a column system, columns are divided into 12 parts. See this page: http://getbootstrap.com/css/#grid


## Setup your own free domain

1. Go to https://nc.me

2. Find a domain and click `Add` then click `Complete Order`

3. Enter your bu email on the next page and click continue

4. Click `Dashboard > Manage > Advanced DNS > Host Records > Add Records`

5. Create a new record:

	```Record Type: A
	Host: @
	IP Address: 192.30.252.154
	TTL: Automatic
	Name: github pages```

6. Create another record with the same parameters except the ip should be:

	`192.30.252.153`

7. Go back to the github repo and create a file called CNAME with the contents:

	`yourdomain.me`

8. Open up http://yourdomain.me, you should now see your website!

## Signing up for the github student pack

I encourage everyone to sign up for the github student pack. It's packed with wonderful software that'll make development easier.

To signup go to:

https://education.github.com/pack

Ours favorites are:

* **ATOM** -- A super powerful open source editor that solves the "Pay for sublime" window

* **Digital Ocean** -- Get your own server, for free!

* **Github** -- Free private repos allow you to keep your class assignments on github

* **NameCheap** -- Free domains and free ssl certificates. 

