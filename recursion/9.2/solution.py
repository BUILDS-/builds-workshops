# X , Y represent the size of the board

X = 3
Y = 3

# x, y are the current position
def robot_traverse(x, y):
	paths = 0
	if X == x and Y == y:
		return 1
	if x < X:
		paths += robot_traverse(x+1, y)
	if y < Y:
		paths += robot_traverse(x, y+1)
	return paths

print robot_traverse(0, 0)