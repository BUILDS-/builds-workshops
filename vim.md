#Vim Tutorial

To start out you need to understand the difference between insert mode and normal mode:

To switch into insert mode press 'i'

    i

While in insert mode text you write will appear on screen like a normal editor.

Practice writing your first text file:

    vim HelloWorld.txt
    Hello World!
    
To exit insert mode press ESC.
    
    ESC
    
To save enter:

    :w
    
To quit enter:

    :q
    
Combine these commands like so:

    :wq
    
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
    B (goes to the 
    




  
