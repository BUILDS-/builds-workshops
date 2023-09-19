# Pimp My Terminal Workshop

Welcome to the Pimp My Terminal workshop! The goal of this workshop is to get you all familiar with your terminal so you too can make your boring terminal look like rainbow barf. This workshop **will** give you the techniques and tools you need, it **will not** be a complete guide to all things termina.

There's a lot of resources out there and beauty is in the eye of the beholder after all. We just want to set you up so you're not afraid to get your hands dirty with your terminal.

**I do need to note, this workshop assumes a unix-based operating system. And this workshop INTENTIONALLY dumbs things down for instructional purposes.**

## Prequisites

### Package Manager

We're probably going to need a package manager to install things. If you're on Linux you definitely already have one. However, if you're on Mac looks like it's time to get yoursel setup with **Homebrew**.

Homebrew is just a package manager for macOS and you can install it really quickly by just copying the command from their website [here](https://brew.sh/)!

**Task:**
- Install a package manager (if you don't already have one)

### Dotfiles (Configuration Files)

Dotfiles are the customization files used to personalize your Linux or other Unix-based systems. These are simply the files whose names start with a dot (.) like `.vimrc`, `.bashrc`, `.ssh`, etc. And any file that begins with a dot is treated as hidden in all Unix-like operating systems. Therefore, having lots of dotfiles even in your home directory does not make it look cluttered.

Dotfiles are primarily used for software configuration. Therefore, they are also known as configuration files. Different tools that you use daily, such as your Shell, can be configured easily using dotfiles. They can also be used to automate a series of package installations.

Overall, the usefulness of dotfiles lies in the fact that anytime you switch systems it can be quickly configured exactly as you were using it before.

**Task:**
- Identify some dotfiles

## Terminal Basics (Emulators vs. Shells)

Before we get into the fun stuff, we gotta start with the fundamentals. We're going to cover (at a high level) everything you need to know about your terminal starting with...

### Terminal Emulators

So... the terminal **emulator** and **shell** are actually two completely different things.

The terminal emulator is simply the program/application that actually let's you access the terminal. In other words, it emulates a terminal!

**Task:**
- Figure out what terminal emulator you are currently using

Your operating system will have one installed by default and most (if not all of the time) you can access it by simply typing "terminal" in whatever search you have!

But we can do better...

Let's get our own terminal emulator installed! Installing a terminal emulator is usually dependent on the instructions for whichever one you want. Usually you can just google "how to install x" and follow whatever steps are provided.

I personally use `kitty` but if you don't want to get into the weeds with the config file, `iterm2` has a nice interface that will make things a little easier.

**Task:**
- Install a new terminal emulator

This is all fine and dandy, but how do we modify terminal emulators? Well that depends on the one you're using! In the case of say `iterm2` or the default mac terminal, you can go to the top left and open it's settings! For emulators like `kitty` you have a file located at `~/.config/kitty/kitty.conf` that is used for modification instead.

Woah, woah, woah! Slow down! What the heck is `~/.config`?

Let's break it down, `~` is just the symbol that referrs to your home directory! That's where you are when you open your terminal by default. Now `.config` is a directory that usually stores... **configuration files** and you'll find plenty of programs you install place their configuration files there by default! Feel free to explore it later you'll definitely recognize some of the names there.

**Task:**
- Check out your `config` files

### Shells

Now then, time for **shells**. Your shell is just your command-line interface. There usually isn't a need to change this as most operating systems come pre-installed with `bash` or `zshell` which are the most common anyway. Why does being common make them good? Beacuse there are PLENTY of resources and plugins available for them.

There is one **dotfile** file we need to take note of here. That would be your `.zshrc` (or `.bashrc`if you're using the bash shell). This file is the bread and butter of our shell customization and we're going to be working with it very extensively throughout this workshop.

But don't worry! We will take it in bite-sized as we go along, I know it might be overwhelming at first.

**Task:**
- Take a quick look at your `.zshrc` (or `.bashrc`)

### Checkpoint
- Learned the basics of system configurationm
- Learned the basics of a terminal
- Installed a terminal emulator
- Learned about our shell

## Fonts & Colors

Let's start with something nice and simple... fonts and colors!

### Fonts

For terminals we recommend using **monospaced** fonts, the site we recommend for finding some sweet fonts is [Nerd Fonts](https://www.nerdfonts.com/). How to actually download fonts is dependent on your system. For macOS once you download the `.zip` file you can extract it and just drag and drop the `.ttf` files into your `Font Book`. *(I personally use FiraCode)*

Let's install a font and set one for our terminal! If you're using a terminal with a settings GUI, you should be able to just go to the respective `Font` field and type in the font you want along with the size you want!

If you're using a terminal emulator like `kitty` or others you need to check the documentation for how to set the font. 

**Task:**
- Download a new monospaced font
- Set that new monospaced font (and font size if you want)

### Color Themes

Usually terminal emulators use 16 different colors, and same as the font you modify this through either your settings gui, or your config file depending on what emulator you use. While CAN create your own color scheme, it's often easier to just take one from online!

So, here are a few links to find a color scheme!
- [Gogh](https://gogh-co.github.io/Gogh/)
- [iTerm2 Color Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes/tree/master)

If you don't like the ones you see here, you can usually just Google one! There's a color scheme for everyone across the internet.

**Task:**
- Find a color scheme that you like
- Set your terminal emulator to that color scheme!

### Other Emulator Options

As you probably noticed, there are TONS of different settings for your terminal emulator. We won't be covering those in this workshop since we're just concerned about making things look pretty BUT you should definitely go through those later and enable/disable whichever you want to really make that terminal yours!

### Checkpoint
- Learned how to install fonts
- Learned how to find color themes
- Applied both a font and color theme to your terminal emulator

## Colorful Tools

This is a quick little divergence just for the fun of it! You can skip this section if you want but I just want to introduce some fun tools you can install.

An **Activity Monitors** is just an app that lets you **monitor** processes running on your system! On Windows this is the Task Manager. I know this sounds boring bear with me. Let's make things a little more interesting...

If we run the command `top` in our terminal we will see a basic terminal-based process monitor. Below we listed a few of our favorites:
- [HTOP](https://github.com/htop-dev/htop)
- [BTOP](https://github.com/aristocratos/btop)
- [GOTOP](https://github.com/cjbassi/gotop)

Now let's look at some fun tools that serve no informational purpose whatsoever!
- [neofetch](https://github.com/dylanaraps/neofetch)
- [sl](https://github.com/mtoyoda/sl)
- [thefuck](https://github.com/nvbn/thefuck)

### Checkpoint
- Learned how to waste time

## Shell Customizations

Now then... let's get back on track!

**A quick aside, there are themes and other tools that do a lot of this for you. However, I think it's really beneficial to understand the basics before going and using another configuration.**

We've got our terminal emulator sitting there looking pretty, but that's not good enough. We need to start customizing our shell now. This is where the `.zshrc` (or `.bashrc`) come into play! So let's get that open!

**Task:**
- Open your `.zshrc` (or `.bashrc`) in whichever editor you prefer

### The Prompt

Your prompt is what you see the most of when using a terminal! It's where you type commands, and it can be very very useful for displaying information. (I nice looking prompt also makes your terminal look 10x nicer)

It's usually easiest to find a prompt you like and copy over that code since things can get a little messy REAL FAST. No like really... the language makes no sense at all. That's why I wrote a sample one for you all! I'm not going to break it down but here's a resource that does. There's also themes like [Powerlevel10k](https://github.com/romkatv/powerlevel10k) if you just want to use that instead.

**MORE ON THEMES AND SUCH LATER**

Here is the example prompt I was talking about:

```
# ~/.zshrc

PS1=" \[\033[1;36m\]\w >\[\033[1;34m\]>\[\033[0m\] "
```

Take notice of the `PS1`, that's just telling our shell to set the prompt to whatever we defined it as to the right of the equal sign. This [guide](https://www.makeuseof.com/customize-zsh-prompt-macos-terminal/) breaks down different things you can add to the prompt really well.

But... I changed it saved the file and nothing changed? That's because we need to `source` your configuration file again. You can do this by simply using the command `source` like so:

```
$ source ~/.zshrc
```

**Task:**
- Change your prompt
- Source your shell's configuration file

### Aliases

This part is my favorite... You can think of **aliases** as shortcuts for a command that you want to execute. What do I mean by this? Well take the common git command `git commit -m`. What if I'm feeling lazy and don't want to type this whole thing? What I can do is add an alias like so!

```
# ~/.zshrc

alias commit='git commit -m'
```

Let's break this down. I'm basically creating the shortcut `commit` so instead of doing this:

```
$ git commit -m "added README.md"
```

I can type this instead!

```
$ commit "added README.md"
```

Pretty cool huh! I use aliases all the time for long commands I use frequently but don't want to keep retyping. They're easy to add and extremely customizable, so you'll find many people have many different aliases.

**Task:**
- Add a new alias to your shell's config file

### Checkpoint

## "Tools" That Do It All

Congrats you made it to the end! So uh... spoiler alert there's a lot of cool tools, shells, plugin managers, etc. that do a lot of this for you already! So why did we go through everything? So that you have the ability to customize it all yourself and understand what's going on under the hood.

Everyone has different preferences, and as a result very different configurations. However, without a fundamental understanding of how things work... you're kind of dead in the water. So below I'm going to put a few cool terminal emulators, tools, plugin managers, shells, etc that we at BUILDS think are worth checking out!

- [Fish Shell](https://fishshell.com/)
- [Oh My Zsh](https://ohmyz.sh/)
- [Zap](https://github.com/zap-zsh/zap)
- [Warp](https://www.warp.dev/)

### Checkpoint
- A pretty sexy looking terminal (hopefully)

**Thanks everyone for attending! If you have any questions feel free to ask any of the board or current members!**
