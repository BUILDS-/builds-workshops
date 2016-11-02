# Intro to Command line

The command line is a integral tool for development. If just want to look cool, open http://hackertyper.net/ and leave this workshop.

Let's learn basic navigation and file editing.

This repo contains some resources we'll need for this workshop so the first step is to clone this repo. You can open up a terminal and type:

	$ git clone 

Note the `$` is used to denote a shell prompt and should not be typed in.

### Folder Structure

Linux machines all have file paths that start from root or `/`, if you type in `pwd` you'll see the current working directory. Likely if you've just opened your shell you'll be in what's called the home directory.

	$ pwd
	/home/username

This directory on mac is `/Users/[Username]` where `[Username]` is your username. On linux it's usually `/home/[username]`. Since the home directory is accessed a lot it's shortened to `~`. From now on we'll refer to folder as directory and we'll call your home directory `/home/username`. 

To see the files in the current directory just type `ls`, this lists files in your current working directory. You'll see the `command_line` folder we cloned earlier. You'll also see some of your own files:

	$ ls
	command_line

Now let's learn a new command `cd`. This moves between folders, so let's say I type:

	$ cd ~

That will navigate to my home directory. I can now type:

	$ pwd
	/home/username

To see the directory you're currently in. Ok, Let's go into the `me/` directory and type `ls` to get the following folder structure.


	$ cd command_line/me
	$ ls
	me/
		hello.txt
		projects/
			supersecretproject.txt

Oh look! There's a super secret file. How do I view that? I do the following:

	$ cd projects
	$ cat supersecretproject.txt

I used a new command `cat` which simply prints the contents of a file. Let's go and change the name of that file. To do this we can use the `mv` (move) command which is the way you rename files.

	$ mv supersecretproject.txt notsosecretanymore.txt

Ok, we've learned a lot so let me recap.

#### ls
List the files and directories in a your current working directory.

	$ ls
	hello.txt projects

#### pwd
List the current working directory

	$ pwd
	/home/username/command_line/me

#### cd
Move into different folders

	$ cd projects

#### cat
Print out the contents of a file.

	$ cat supersecretproject.txt

#### mv
Rename or move a file

	$ mv supersecretproject.txt notsosecretanymore.txt

### Hidden Files

Some files in unix based systems are hidden. Hidden files start with a `.`, to see them type `ls -a` the `-a` is what's called a flag. It's used to denote special options for a command. First let's make sure we're in the projects directory.

	$ pwd
	/home/username/command_line/me/projects
	$ ls -a
	.                           .betyoudidntseethisfile.txt
	..                          supersecretproject.txt

Wow! We have three secret files. You'll notice there are two secret files that are just `.` and `..`, these files are actually directories!

The `.` directory is the current directory. If you type:

	$ pwd
	/home/username/command_line/me/projects
	$ cd .
	$ pwd
	/home/username/command_line/me/projects

You'll notice you didn't go anywhere! This is because you changed directories into the current directory.

The next directory `..` is used to denote one directory up. Let's test it out:

	$ cd ..
	$ pwd
	/home/username/command_line/me

We've moved one directory up! Now let's address the elephant in the room, `.betyoudidntseethisfile.txt`. Let's cat it out.

	$ cd projects
	$ cat .betyoudidntseethisfile.txt

Wow! It's so easy to hide files in unix based systems.

Now let's move onto more advanced topics.

### Tmux and Shortcuts

Go to the `command_line/` folder you cloned earlier and do an `ls -a`. This folder contains the following hidden files:

	.bash_profile
	.tmux.conf

## Configure tmux

To install the `.tmux.conf`:

	cp .tmux.conf ~/

Then refresh tmux:

	tmux source-file ~/.tmux.conf

Now start a tmux session with:

	tmux
	Ctrl-a - (split diagonally)
	Ctrl-a | (split vertically)
	Ctrl-a [Arrow_key] (move between panes)
	exit (quits tmux)

## Install a new .bash_profile

To install .bash_profile open it up and copy the contents into your current ~/.bash_profile

	nano .bash_profile (copy the contents)
	nano ~/.bash_profile (paste into here)

Then refresh bash to make the changes:

	source ~/.bash_profile

A shortcut to this is:

	. ~/.bash_profile

## Login to CSA without a password

To setup login to csa without entering a password. I'm going to give the concise version of :https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys--2

	ssh-keygen -t rsa

You'll be prompted for:

	Enter file in which to save the key (/home/demo/.ssh/id_rsa):

Press enter

	Enter passphrase (empty for no passphrase):

Again press enter for no passphrase. Then copy the key over like so (you'll need to add your username instead of [YOUR_USERNAME]:

	cat ~/.ssh/id_rsa.pub | ssh [YOUR_USERNAME]@csa2.bu.edu "mkdir -p ~/.ssh && cat >>  ~/.ssh/authorized_keys"

Enter your password (for the last time) and you'll see something like this:

	The authenticity of host '12.34.56.78 (12.34.56.78)' can't be established.
	RSA key fingerprint is b1:2d:33:67:ce:35:4d:5f:f3:a8:cd:c0:c4:48:86:12.
	Are you sure you want to continue connecting (yes/no)? yes
	Warning: Permanently added '12.34.56.78' (RSA) to the list of known hosts.
	user@12.34.56.78's password: 
	Now try logging into the machine, with "ssh 'user@12.34.56.78'", and check in:

	  ~/.ssh/authorized_keys

	  to make sure we haven't added extra keys that you weren't expecting.

Enter yes when prompted.

Try and login to your csa account.

	ssh [YOUR_USERNAME]@csa2.bu.edu

You shouldn't be prompted for a username.

## Create a shortcut for Sublime Text 3

It would be great if you could switch from the command to Sublime really quickly right?

Enter the following:

	ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl

Then you can easily launch sublime

	subl (opens last window)
	subl . (opens current folder)
	subl README.md (open this README in sublime)

## Install lolcat and fortune

You need Ruby gem installer to install lolcat. To install gem:

	wget https://rubygems.org/rubygems/rubygems-2.4.8.zip
	unzip rubygems-2.4.8.zip
	cd rubygems-2.4.8
	sudo ruby setup.rb

Then you can install lolcat:

	gem install lolcat

And colorize text super easily:

	echo "I'm full of colors" | lolcat

## Install fortune

You'll need pip, to install pip go here: https://pip.pypa.io/en/stable/installing/

Then you can just do:

	pip install fortune

## Install cowsay

Install the following:
	install.packages("devtools")
	devtools::install_github("sckott/cowsay")

## Putting it all together

Type the following for interesting quotes:

	fortune | cowsay | lolcat

Learn tmux for awesome window splitting!

Enjoy!

