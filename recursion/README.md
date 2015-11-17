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

If you take a more complicated tree such as:

                10
               /  \
	     	 -2    7
           	/  \     
	 	   8   -4    

This tree should return `23` which is the path through `8 -> -2 -> 10 -> 7`. Now if we replace `-4` with `18`. We get the following:

                10
               /  \
	     	 -2    7
           	/  \     
	 	   8   18   

Now the max path is `8 -> -2 -> 18`. You'll notice that for each parent node you need to decide if you want to include that node or not. Thus the top down approach is: Should we include this parent node or a parent node to the left or a parent node to the right?

	int max_path(Node n) {
		if (n == NULL)
			return 0;
		int parent = n.value + left_right(n.left) + left_right(n.right);
		int left = max_path(n.left)
		int right = max_path(n.right)

		return max(parent, left, right);
	}

	int left_right(Node n) {
		if (n == NULL) {
			return 0;
		} else {
			int left = n.value + left_right(n.left);
			int right = n.value + left_right(n.right);
			return left > right ? left : right;
		}
	}

### Dynamic Programming

Dynamic programming can be scary but at it's core, it's just storing values that we've already computed.

Let's take for example a fibonnaccci series. A fibbonacci series is a series of numbers such that each number is a sum of the two previous numbers. 

	0 -> 1 -> 1 -> 2 -> 3 -> 5 -> 8 ...

A simple recusive solution that returns the i-th fibbonacci number looks like the following:

	int fibbonacci(int i) {
		if (i == 0) return 0;
		if (i == 1) return 1;
		return fibbonacci(i - 1) + fibbonacci(i - 2);
	}

Now say we compute two different fibbonacci numbers? We are effectlively doing double the work uselessly.

A simple dynamic programming solution looks like the follwoing:

	int fib[] = new int[max];
	int fibbonacci(int i) {
		if (i == 0) return 0;
		if (i == 1) return 1;
		if (fib[i] != 0) return fib[i];
		fib[i] = fibbonacci(i - 1) + fibbonacci(i - 2);
		return fib[i];
	}

This keeps a global variable fib that keeps track of the fibonnacci number at the i-th iteration.

## Problems

These problems come from Cracking the Coding Interview version 5 and solutions can be found in the corresponding folders.

### 9.1

A child is running up a staircase with n steps, and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to how many possible ways the child can run up the stairs.

### 9.2

Imagine a robot sitting in the upper left hand corner (0, 0) of an X by Y grid. The robot can only move in two directions, right and down. How many possible paths can the robot move to (X, Y)?

Consider the following image:

![Possible Paths](https://octodex.github.com/images/yaktocat.png)

### 9.5

Write a method to compute all permutations of a string.

### 9.7

Implement a "paint fill" function that that one may see on many popular image editing programs. That is given a screen (represented by a 2D array), a point, and a new color, fill the screen so that every pixel is the new color.