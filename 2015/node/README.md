# Node Workshop

## Downloading Node

The first step is to download node. The download page can be found [here](https://nodejs.org/en/download/ "Download Node").
Download the version of node appropriate for your operating system.

## What is Node?

In the words of Wikipedia, "Node.js is a packaged compilation of Google’s V8 JavaScript engine, the libuv platform
abstraction layer, and a core library, which is itself primarily written in JavaScript." In other words, Node is
an environment in which you can run JavaScript code. That's it! At a high level, there are very few differences
between JavaScript you would run in your browser, and JavaScript you would run with Node. There are some small
things, such as the global level variable is `global` in Node, whereas in (most) browsers it is `window`, but in
general all skills learned on the front end can be used on the back end (aka Node).

## Why pick Node?

Originally, the creator of Node Ryan Dahl stated that one of the main intended uses of Node was to create real time
websites with push capability, and was "inspired by applications like Gmail". This eventually led to the implementation
of tools that facilitate work in a non-blocking, event-driven I/O paradigm environment. As you develop your skills in 
JavaScript and continue working in Node, you will encounter many instances where this non-imperative, responsive
language may behave differently than it would in other languages (for better or for worse).

## Node + Express + NPM

So now you have Node, and have a vague idea of what it is and why it's the best. But how do you use it? What are all
of these fancy frameworks and tools everyone is talking about, and what are they used for? Well today we'll be going
over specifically how to use Node (and NPM along with it), plus Express, which at its core helps Node handle HTTP
requests, to create a basic server.

## NPM things

All you need to know about NPM is that:

1. NPM handles all of the code that isn't yours (various binaries, frameworks, tools, etc.)
2. It stores everything in the `package.json` file
3. All you do is run `npm install --save <packageName>` and `npm install`

## Express

Using Express with Node is like taking an intro class of your major in your senior year; you don't really have to
know what's going on, but if you had to guess you'd probably get it right. It's not super important that you
understand every little thing about Express, but there's a lot of cool stuff and if you want to find out more
you should read the documentation.



