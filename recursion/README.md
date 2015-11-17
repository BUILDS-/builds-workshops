# Recusion and Dynamic Programming

Recusion is a beautiful programming paradigm. Unfortunately it is not very well understood and just the words "Dynamic Programming" can cause fear in interviewies.

When you get recusion working it feels like magic. I'm going to present different ways to think about recusion that will hopefully help you solve the problems below.

### Bottom Up Approach

A good way to think about recusion is: Can I solve this for one element then all the rest? Let's look at a simple example to illustrate.

Implement a solution that multiplies an integer x by y using only addition.

You know that `2 * 3 = 6` and you probably know that `2 + 2 + 2 = 6`. That is if you add `2` enough times you'll end up at the result you desire. The next question is how many times should you add two? That's y times.

The bottom up way to think about this is `x + rest(x)` that is for each x you're going to add x and not worry about what the rest is going to be. If you think about this problem carefully you'll see that you need to add x, y times.

	int product(int x, int y) {
		if (y == 0) 
			return 0;
		else
			return x + product(x, --y);
	}

### Top down Approach

The top down approach is a completely different way of thinking about recusrion. It relies on the central question: Should I pick this or that? We'll implement a problem to illustrate this thinking.

Given a binary tree find the maximum path sum. A path can start and end at any node. For example the below tree would return 6.

   	   1
      / \
     2   3


### Dynamic Programming