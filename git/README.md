# Git Workshop

Git (and Github) is an awesome tool for sharing code, version control, and more! My presentation I'm going to use in this workshop can be found [here](https://docs.google.com/presentation/d/1bdbfgdTUaujerdea-bOfAAjcd3w2efjPhtVHEAWuZME/edit?usp=sharing)!

### First Steps...

- Go to [https://github.com/join](https://github.com/join) and create an account if you haven't already!
- Download Git on your own computer!
    - __Feel free to use CSA2, although working locally is good to know!__
    - Open up [https://git-scm.com/downloads](https://git-scm.com/downloads)

### Creating our first repo!

- Try creating your own repo!
    - Go to the top right and click on your profile
    - Click on "Repositories"
    - Click "New"
    - __Name it: "(YOUR USERNAME).github.io"__


![alt text](http://i.imgur.com/5RWZHX3.png)

- Click Create!
- Now follow the instructions as follows:

```
echo "# test" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin (YOUR REPO URL)
git push -u origin master
```

### Lets try to push another commit! Do the following:

```
echo "Welcome to my github" >> index.html
git add index.html
git commit -m "Adding index.html"
git push
```

### Coolio! Lets next try out 'Git Clone __'
Lets say you want Sean's code for his swanky website_status checker! Since it's all on github, we can just do the following:

```
git clone https://github.com/sean-smith/website_status
```

This _clones_ the repository

If you are collaborating with friends, then you'll want to work in the same repository! We'd again do the same thing! So lets try this out now :)

### LETS SET THE SCENE
__ME__: "Hey man, I'm Nico! Wanna work on a project together?"

__You__: "Yo, totally. Lets make a site."

__ME__: "SURE!! I'll create the repo :D Here's the URL!"


- _So lets run the command_:
- ```git clone https://github.com/NicoHinderling/hi_guys_CLONE_MEEE```

And there we have it!

__ME__: "Yo dude, i pushed a changed. Pull it!"

__YOU__: "AIGHT! I'm ON IT!"

- _So now lets pull_:
- ```git pull```




# Other stuff we'll cover in the slides 
```P.S. For those of you who couldn't attend, I'll add details about these later in the week  :)```

### In Github
- Issues

- Forking

- Pull Requests

- Branches

### Other Git Commands
- git fetch

- git merge

- git branch

- git checkout

- git diff

- git status

- git stash

- git revert


# The Holy Bible of Git

- [https://git-scm.com/book/en/v2](https://git-scm.com/book/en/v2)

__This is the best resource for learning more about Github! If you have time and the interest, give this a read. It's amazing!__