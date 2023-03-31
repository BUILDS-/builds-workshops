# AWS Workshop

Amazon Web Services is a widely-used cloud computing platform which allows anyone to rent resources on their large array of server hardware. Amazon is nice enough to provide some of those basic services for free and during this workshop we will show you how to get started with these awesome free services.

### First Steps...

- Go to [https://aws.amazon.com](https://aws.amazon.com) and sign up for a free account if you haven't already!
- Unfortunately this requires a credit/debit card and a lot of personal information, but you get a linux server for a year in exchange.
For this guide, we will be loosely following along with this [guide](http://www.chrishjorth.com/blog/free-aws-ec2-ubuntu-apache-php-mysql-setup/)

### Creating an EC2 Micro Instance:

- The focus of today's workshop will be EC2, the division of AWS that provides a virtual private server, or VPS.
	- From the AWS Management Console, first change your location from Oregon to N. Virginia in the top right.
	- Then head to the EC2 Management Console by clicking EC2 in the top left.
	- From here we will press "Launch Instance" to start configuring our free EC2 Micro Instance.

### Configuring the Instance:

- Now we need to decide the main options for our new server.
	- First we select the Operating System, we'll be choosing Ubuntu Server 14.04 because it is easiest to use and very stable.
		- If you want to play around with another OS, feel free, but ensure you pick something that is marked as "Free Tier Eligible" to prevent amazon charging you.
	- Next we decide the hardware for this server. We will be selecting the first option, "Micro", as this is the only free option available to us.
		- If you ever need more power out of your server you can select an option with more cores or ram, but be aware that this comes at an hourly cost.
	- Now we are going to make minor changes to the remaining configuration pages.
		- All of the "Instance Details" remain the same, so just click next
		- In the "Add Storage" menu, change the "Size" to 30GB (Which will fully utilize your free AWS space)
		- In the "Tag Instance" Menu, give your new server a name
		- In "Configure Security Group" we need to change the radio button at the to to "select existing security group" and select the first checkbox in the menu below, titled "default"
		- Now we can Launch our new Instance!

### We have a Server! Now what?
- Now we prepare authentication to connect to it.
	- This requires creating a public/private key pair.
	- When you launch the instance you will be prompted to create or select a key pair.
		- Simply select "Create a new key pair" from the dropdown menu, type in a name, and download the .pem file
	- This file will be the key to connecting to your new server. EC2 Instances by default are not accessible via username and password, only via this .pem file.
- Once you complete the key pair setup, the instance will launch and you can press "View instances" to see the management interface for your new server.
	- This view allows you to restart or power-on/off the machine, and see information about connecting to the server.
	- On the left side of this view, you see many supplemental services available to be configured and used with your server.

### Elastic IP & The Security Group:
- On the left side of the management interface you should see a list of some additional services for your new EC2 instance.
	- We are going to configure one of them now, Elastic IPs.
- Elastic IPs are a system provided by AWS to ensure that the IP of your server does not change, or more accurately that there is an IP that you can use to connect to the server at all times (even after a reboot).
	- Configuring an Elastic IP is fairly straightforward, simply go to the Elastic IPs menu and click "allocate new address"
	- Once you have allocated an address, now you simply click "Actions->Allocate Address" and select your instance in the "allocate to instance" box.
	- This will change the IP of your instance, but it will now be forever accessible at the new address you have allocated and assigned.
- In addition to Elastic IP, we have to make modifications to the security group that we selected for our server to allow ssh access and HTTP/HTTPS connectivity.
	- To do this, go to the "Security Groups" menu on the left side
	- Then select "default"
	- Navigate to the "Inbound" tab on the bottom center and press Edit.
	- From here, add rules for SSH, HTTP, and HTTPS (which can be found in the dropdown menu).

### SSH & Package Management:
- Most of you will have used SSH before, but there are some important things that change when accessing or using your own Virtual Private Server (VPS).
	- The first big difference is the keypair that will be used for authentication. AWS provides nice instructions on how to connect to your new instance, just press connect and follow their lead.
		- One of the advantages of this is that there is no password needed to log in or to do actions that require root.
	- Another big difference is that you can actually execute actions which require root. You have full control over your machine, to install packages, make changes, break things, disconnect it from the Internet and lose all connectivity, etc.
		- Most importantly, it means you are in charge of maintaining your own machine. Apt-get is your friend and will help you to install, uninstall, update, and manage all of the "packages" on your system.
	- Once you have logged in to the server, run "sudo apt-get update", then "sudo apt-get upgrade". This will upgrade all of the packages on your system to the newest available versions.

### The LAMP Stack:
- Now here's where the server becomes useful. The next command you should run is "sudo apt-get install lamp-server^" (including the caret).
	- This will install the LAMP (Linux-Apache-MySQL-PHP) Stack, which will allow your server to host a website using the webserver Apache2, with SQL database or PHP scripts if necessary.
	- We will only really be using Apache2 in this workshop, but the LAMP Stack installer does a lot of work to make your life easier in the future if you want to expand and use these features.
- By default, apache will host anything stored in /var/www/html, including the sample index.html page included with the installation.
	- This means you can copy the website you built at last week's workshop over into this folder and it should be accessible to the world.

### Other Information:
- We will surely be covering more ins-and-outs at the workshop and answering questions that I did not anticipate getting asked, my apologies to the people who were unable to make it.