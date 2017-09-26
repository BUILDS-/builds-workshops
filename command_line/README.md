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

You should now be pretty comfortable with navigating around your filesystem using UNIX commands. Chances are a lot of your interaction with the command line will be using these commands. Now, we'll move on to some more advanced topics, starting with how to edit files with a text editor.

### Editing Files Using a Command Line Text Editor

Okay, how about actually working with files instead of just navigating around and looking at them? This is where we start learning how to use Vim, a command line text editor.

Let's open up supersecretproject.txt:

	$ vim supersecretproject.txt
	
By default, Vim only looks at the file, and will not let you make changes yet. You can move the cursor around using the arrow keys. When you're ready to start editing, press ``i`` (for Insert) to start changing text. 

When you're done, you'll need to save and exit. This can be done by pressing the escape key, which takes you back to the default view mode. To give a command, we use the colon key, and then type a command. To exit Vim and save the file you're working on, type ``:wq!``

You can use the `cat` command to see your edited file.

Vim is extremely powerful, and many people swear by it. I find it most useful to make small edits to things when I'm already in the command line; if I'm doing something more substantive, I'll use Sublime Text.

### SSH and SCP

Now, let's learn about two very useful tools: ``ssh`` and ``scp``. ``ssh`` (short for "secure shell") is basically remote login: it allows a UNIX-based machine to connect to another UNIX-based machine and issue commands remotely. This is the command we use to interact with the CSA servers here at BU. In fact, let's try logging in using ``ssh`` right now:

	$ ssh [your_bu_username]@csa2.bu.edu
	
This will begin the process of remotely logging you into the CSA2 lab machine. Assuming you've already set an account up, you'll just need to enter your BU credentials and you're all set to go. (Don't worry if your password doesn't show up in the terminal window; that's intended behavior).

You'll be presented with your CSA home directory. This is a UNIX system, so all the commands you've learned up to here still work! Explore around a little bit. When you're ready to go back to your local machine, just type ``exit``. The command history will clear, but you should still be in the same directory you started ``ssh`` from.

Now, let's learn how to move a file from our local machine to ``csa2`` using ``scp`` (short for secure copy). This is especially useful if you have, for example, a homework file that you need to submit using ``gsubmit`` (which will also be covered a bit later on).

We have our text file supersecretproject.txt in our current directory. Let's move it to the home directory on ``csa2`` with this command:

	$ scp supersecretproject.txt [your_bu_username]@csa2.bu.edu:~

Just like with SSH, you'll be prompted for your login info. Once entered, it should copy up. Now, if we log in to ``csa2`` using ``ssh``, we should see your file right there!

You can customize the remote directory you send the file to by changing the file path after the colon. Note, however, that the path must exist *before* you send the file up.

### gsubmit

I won't dive into the specifics of ``gsubmit`` here; you can find all you need at [this link](http://cs-people.bu.edu/lapets/320-2015-fal/s.php?#A). Your workflow will differ slightly; you will use the terminal to copy your files up using ``scp``, use ``ssh`` to log into the CSA machines, assemble your files as directed above, and then use the ``gsubmit`` command. Note that entering this command counts as a homework submission, so don't test this out until you have a reason to do so.

### Symlinks (Primarily useful for Windows Linux users)

Exit out of CSA if you haven't already, and go back to your home directory. Symlinks (short for "symbolic links") are essentially links to another file or directory on your file system. They act like whatever they point to.

Learning how to use this isn't exceptionally important for Mac or Linux users, but for Windows users, it's practically essential. Because of the way the Linux subsystem is implemented, Windows does not have direct access to the Linux filesystem. This means that any files we create in the Linux filesystem can only be used within Linux--however, any Windows files can be accessed by everyone. Thus, it is most useful to simply use Linux to interact with Windows files. Unfortunately, the file path for the Windows filesystem is convoluted, and tedious to use all the time. The solution is simple: create a symlink within your Linux home directory that links to your Windows home directory. Boom, you have direct access to all your Windows files.

To create the symlink we want (on Windows), we use ``ln -s``:

	$ ln -s [source file or directory] [symlink name]

The Windows filesystem is mounted in Linux, so our C drive is stored at `/mnt/c`. Beyond that, it's just the path from within Windows.
So, to create a symlink to my user directory in Windows, I would do this:

	$ ln -s /mnt/c/Users/[windows-username] windows-home
	
This creates a symlink called `windows-home` that links to my Windows user directory. If I navigate inside, I get my Windows home directory! This process can be repeated for any directory you want.


# Pimp My Command Line

Now we get into the really fun stuff. These things will allow you to really customize your command line and make it your own.

## Install a new .bash_profile

Settings for a local UNIX shell user are stored in the .bash_profile file in your home directory. We've included a few example .bash_profile files for you to explore.

For Windows Linux users, you  want to edit the .bashrc file in your home directory instead. The .bash_profile doesn't do anything in WSL. All the changes will be the same, though, regardless if you put them in .bash_profile or .bashrc.

To install a new .bash_profile, copy the contents into your current ~/.bash_profile (or ~/.bashrc if on Windows)

	vim .bash_profile (copy the contents)
	vim ~/.bash_profile (paste into here)

Then refresh bash to make the changes:

	source ~/.bash_profile

A shortcut to this is:

	. ~/.bash_profile

## Create a shortcut for Sublime Text 3

It would be great if you could switch from the command to Sublime really quickly right? Or open up text using Sublime instead of Vim? We can make that happen, using symlinks!

On Mac, enter the following (making sure your Sublime install directory is correct):

	ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" /usr/local/bin/subl
	
On Windows, it's similar logic: you just need to find the Windows .exe file associated with the program you want. 

	ln -s "[path_to_your_sublime_exe_file]" /usr/local/bin/subl

In fact, any Windows .exe file can be run from within the Bash shell! You just need to symlink it to ``/usr/local/bin/[program_name]``.

Now, you can easily launch sublime:

	subl (opens last window)
	subl . (opens current folder)
	subl README.md (open this README in sublime)
	
## Package Managers: apt-get

On Windows and Linux (but not on Mac), you should by default have the ``apt-get`` package manager installed. This can be used to get command-line utilities. We'll get a few fun ones and then demonstrate how they work.

	$ sudo apt-get install lolcat
	$ sudo apt-get install python-pip
	$ sudo apt-get install cowsay

You can get pretty much any command-line utility using apt-get.

## Install lolcat and fortune

On Mac, you need the Ruby gem installer to install lolcat. To install gem:

	wget https://rubygems.org/rubygems/rubygems-2.4.8.zip
	unzip rubygems-2.4.8.zip
	cd rubygems-2.4.8
	sudo ruby setup.rb

Then you can install lolcat (Windows/Linux users already did this):

	gem install lolcat

And colorize text super easily:

	echo "I'm full of colors" | lolcat

## Install fortune

You'll need pip, to install pip go here: https://pip.pypa.io/en/stable/installing/

Then you can just do (on Windows too):

	pip install fortune

## Install cowsay

Install the following (already done on Windows):
	install.packages("devtools")
	devtools::install_github("sckott/cowsay")

## Putting it all together

Type the following for interesting quotes:

	$ echo fortune | cowsay | lolcat

And that's a wrap! Hopefully you found this workshop helpful. Practice and tinker in your spare time! You can do lots of cool stuff with the command line.

Included below are some even more advanced topics for people who want to experiment even further. In particular, the ssh-keygen method is really cool. (I do not personally use tmux, so I will not teach it in this version of the workshop.)


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
