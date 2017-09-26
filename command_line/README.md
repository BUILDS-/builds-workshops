# Intro to the Command Line

Welcome to the BUILDS Command Line workshop! The goal of this workshop is to get you acquainted with the Unix-based command line, an extremely important and integral tool that will prove useful well beyond your academic career. Command line tools are used everywhere: from ``git`` to ``gsubmit`` and everything in between. It may look intimidating, and it can be a bit hard to learn, but it's well worth the time investment, especially if you work in software. If you just want to look like a ``l33t_h4x0r``, open http://hackertyper.net/ and type away.

**A few notes before we begin:**

- With the addition of the Windows Subsystem for Linux, Windows PCs can now follow along with this tutorial! There is a bit of extra setup required, which can be found [here.](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide) **Before doing this, ensure your installation is fully up-to-date, on build at least 1703.** Once this is set up, Windows users can follow along with the Linux instructions, as this system is essentially tantamount to running Ubuntu Linux. Any specific references to Windows computers will probably refer to quirks about this system (and there are a few).

- The `$` is used to denote a shell prompt and should not be typed in.

Let's get going! The first step is to find your terminal; on Mac and Linux, this should be the "Terminal" app. On Windows, you'll need to find the "Windows Subsystem for Linux" program (it should be in your program list). Open it up.

This repo contains some resources we'll need, so the first step is to clone this repo using ``git``. You'll want to type:

	$ git clone https://github.com/BUILDS-/builds-workshops.git

We'll start with basic navigation and file editing.

### Folder Structure

Linux machines all have file paths that start from root or `/`. If you type in `pwd` you'll see the current working directory. If you've just opened your shell you'll likely be in what's called the home directory.

	$ pwd
	/home/username

This directory on a Mac is `/Users/[Username]` where `[Username]` is your username. On Linux it's usually `/home/[username]`.

Since the home directory is accessed quite frequently, it's shortened to `~`. From now on we'll refer to folders as directores and we'll call your home directory `/home/username`. 

To see the files in the current directory just type `ls`, this lists files in your current working directory. You may or may not have files in your home directory (if on Mac, you probably will). You'll see the `builds-workshops` folder we cloned earlier. You'll also see some of your own files:

	$ ls
	builds-workshops

Now let's learn a new command: `cd`. This moves between folders, so let's say I type:

	$ cd ~

That will navigate to my home directory. I can now type:

	$ pwd
	/home/username

to see the directory you're currently in. Ok, let's go into the ``builds-workshops`` directory using ``cd builds-workshops``. Now, if you type `pwd`, you'll see that our directory has changed:

	$ pwd
	/home/username/builds-workshops
	
Cool! Let's navigate one directory deeper, into the ``command_line/`` directory. This is the subdirectory of the repo you're currently reading this on! Let's explore what else we have in this directory using `ls`:

	$ cd command_line
	$ ls
	cheat_sheet.md
	cover_photo.jpg
	Description.md
	me
	README.md
	
Let's see what's in the `me/` directory. Navigate in using `cd` and type `ls` to get the folder structure.


	$ cd me
	$ ls
	hello.txt
	projects/
	
We've been navigating deeper into the directory structure. What if we want to go up? Turns out the command is pretty simple. Using ``cd ..`` will take you to the parent directory. (We'll explain more about this in a bit.)

	$ pwd
	/home/username/builds-workshops/command_line/me
	$ cd ..
	$ pwd
	/home/username/builds-workshops/command_line
	
We can also use a relative file path to get where we want. It looked like there was a ``projects/`` subdirectory under the ``me`` directory, so let's go there directly:

	$ cd me/projects
	$ ls
	supersecretproject.txt

Oh look! There's a super secret file. How do I view that? I do the following:

	$ cd projects
	$ cat supersecretproject.txt

I used a new command `cat` which simply prints the contents of a file. Let's go and change the name of that file. To do this we can use the `mv` (move) command which is the way you rename files.

	$ mv supersecretproject.txt notsosecretanymore.txt

Ok, we've learned a lot so let's recap.

#### ls
List the files and directories in a your current working directory.

	$ ls
	hello.txt projects

#### pwd
List the current working directory

	$ pwd
	/home/username/builds-workshops/command_line/me

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

Some files in UNIX-based systems are hidden. Hidden files start with a `.`, to see them type `ls -a`. The `-a` is what's called a flag. It's used to denote special options for a command. First let's make sure we're in the projects directory.

	$ pwd
	/home/username/builds-workshops/command_line/me/projects
	$ ls -a
	.                           .betyoudidntseethisfile.txt
	..                          supersecretproject.txt

Wow! We have three secret files. You'll notice there are two secret files that are just `.` and `..`, these files are actually directories!

The `.` directory is the current directory. If you type:

	$ pwd
	/home/username/builds-workshops/command_line/me/projects
	$ cd .
	$ pwd
	/home/username/builds-workshops/command_line/me/projects

You'll notice you didn't go anywhere! This is because you changed directories into the current directory.

The next directory `..` is used to denote one directory up. Let's test it out:

	$ cd ..
	$ pwd
	/home/username/builds-workshops/command_line/me

We've moved one directory up! This is the same command we used before: we were essentially navigating into the universal "up" directory that is a part of all UNIX directories. 

Now let's address the elephant in the room, `.betyoudidntseethisfile.txt`. Let's cat it out.

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

