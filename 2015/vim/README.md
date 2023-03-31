#Vim Tutorial

To start out you need to understand the difference between insert mode and normal mode:

To switch into insert mode press 'i'

    i

While in insert mode text you write will appear on screen like a normal editor.

Practice writing your first text file:

    vim HelloWorld.txt
    Hello World!
    
To exit insert mode press ESC.

    ESC (goes to normal mode)
    
To save enter:

    :w (saves the file)
    
To quit enter:

    :q (quits)
    
Combine these commands like so:

    :wq (saves and quits)
    
To navigate use the h,j,k,l keys like so:

    h (left)
    j (down)
    k (up)
    l (right)
    
It makes more sense in a picture.

![Navigating](http://www.catonmat.net/images/why-vim-uses-hjkl/adm-3a-hjkl-keyboard.jpg)

Now we're going to play http://vim-adventures.com/

Navigating words:

    w (skips forward a word)
    b (skips back a word)
    e (goes to the end of the next word)
    B (skips back a word including punctuation)
    x (delete a character)
    
Ok, now that we've mastered the basics of navigating let's get into some more difficult things.

We're going to be using a script I created for checking a website's status. 

Wget the file and open it up in vim like so:

    wget https://raw.githubusercontent.com/sean-smith/website_status/master/web_status.py
    vim web_status.py
    
There's another mode called visual mode that lets you select text. Simply press 'v' and use the same commands to navigate, when you navigate the text you cover will be selected.

    v (enters visual mode)
    
Select the two lines at the top using visual mode and delete them.

Whoops you made a mistake! Undo the two line delete.

    u (undo)
    
Copy the `is_website_working` function and paste it under function. Then change the name to `check_website`:

    y (copy)
    p (paste)

Select the `send_yo` function and function and move it down under the `main` function.

    d (cut text)
  
Search for `url`:

    :/ (searches down)
    :/\c (case insensitive search)
    n (next occurence)
    N (previous occurence)
    
Change the lines:

    url = params[0]
    string = params[1]
    email = params[2]

Into:

    url, string, email = params
    
Use the commands:

    dd (cut a line)
    yy (copy a line)

Search and replace all occurences of `yo_username` with `yosername`:

    :%s/search/replace/g (search for 'search' and replace all occurences with 'replace' g means globally)
    
Kyle will now cover how to customize vim and some more advanced topics:

    vimrc
        show line numbers
        colorize
        
    vim packages
    
    
#Cheat Sheet

###Switch modes

    i (switches to insert mode)
    ESC (switches to normal mode)
    Ctrl-c (also switch to normal mode)
    v (visual mode -- allows you to select text)
    
###Open save and Quit

    vim filename (opens the file in normal mode)
    :w (save)
    :q (quit)
    :wq (save and quit)

###Navigating

    h (left)
    j (down)
    k (up)
    l (right)
    w (skips forward a word)
    b (skips back a word)
    e (goes to the end of the next word)
    B (skips back a word including punctuation)
    
###Editing

    x (delete a character)
    u (undo)
    y (copy)
    p (paste)
    d (cut)
    dd (cut a line)
    yy (copy a line)
    
###Searching

    :/ (searches down)
    :/\c (case insensitive search)
    n (next occurence)
    N (previous occurence)
    :%s/search/replace/g (search for 'search' and replace all occurences with 'replace' g means globally)
    
Thank you for coming!
    




  
