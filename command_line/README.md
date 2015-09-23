# Resources for Intro to Command line

This folder contains the following hidden files:

	.bash_profile
	.tmux.conf

To see these files, clone the git repo:

	git clone https://github.com/BUILDS-/builds-workshops.git

Then type:

	cd builds-workshops/command_line
	ls -la

That will show you the hidden files

## Configure tmux

To install the `.tmux.conf`:

	cp .tmux.conf ~/

## Install a new .bash_profile

To install .bash_profile open it up and copy the contents into your current ~/.bash_profile

	nano .bash_profile (copy the contents)
	nano ~/.bash_profile (paste into here)

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


Enjoy!

