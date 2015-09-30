# Git Workshop

Git (and Github) is an awesome tool for sharing code, version control, and more! My introductory PPT can be found [here](https://docs.google.com/presentation/d/1bdbfgdTUaujerdea-bOfAAjcd3w2efjPhtVHEAWuZME/edit?usp=sharing)!

### First Steps...

- Go to [https://github.com/join](https://github.com/join) and create an account if you haven't already!
- Download Git on your own computer!
    - __Feel free to use CSA2, although it's good to have locally.__
    - Open up [https://git-scm.com/downloads](https://git-scm.com/downloads)
    - ### NICO, TEST THIS IF YOU CAN WITH VB LATER!

### Creating our first repo!

- Try creating your own repo!
    - Go to the top right and click on your profile
    - Click on "Repositories"
    - Click "New"


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
