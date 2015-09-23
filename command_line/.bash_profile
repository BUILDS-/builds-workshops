# This is an example .bash_profile
# Copy the contents of this .bash_profile into your current ~/.bash_profile 

# Create a startup Message!
echo "Welcome to $USER's machine"

# Cd somewhere really fast!
# $ Sophomore
alias Sophomore='cd ~/Google_Drive/Documents/College/Sophomore'

# Open up Chrome!
# Mac only :(
# pass in a file to open it in Chrome:
# $ chrome seanssmith.me
# $ chrome resume.pdf
alias chrome="open -a 'Google Chrome'"

# Add a quick git commiting message!
# You need to install git and fortune for this to work!
# fortune installation instructions:
# http://software.clapper.org/fortune/#getting_and_installing_fortune
# Git installation: 
# https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
alias quickgit='git add --all; git commit -am "$(fortune)"; git push'

# Add colors to folders and files when you type ls
alias ls="ls -GFh"

# Customize your Command prompt
# This displays:
# Username@CurrentFolder$
export PS1="\[\033[36m\]\u\[\033[m\]@\[\033[32m\]\W\[\033[m\]\$ "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad  

# Add a shortcut to logon to csa2
# Change username to your own username!
alias csa="ssh [username]@csa2.bu.edu"

# Create an executable ~/bin to put your programs in!
# This allows you to create programs and have them execute
# natively like ls or cd as long as you put the executable program in ~/bin
export PATH="~/bin":$PATH

# Set your editor
# nano is probably a good default
# Take time to learn vim and you'll code faster!
export EDITOR=/usr/bin/nano

