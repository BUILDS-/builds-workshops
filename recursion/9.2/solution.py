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

saved_paths = [[0]*X]*Y
# saved_paths keeps track of the number of paths
def robot_traverse_dynamic(x, y):
	paths = 0
	if X == x and Y == y:
		return 1
	if saved_paths[y][x]:
		return saved_paths[y][x]
	if x < X:
		paths += robot_traverse_dynamic(x+1, y)
	if y < Y:
		paths += robot_traverse_dynamic(x, y+1)
	saved_paths[y][x] = paths;
	return saved_paths[y][x]


print robot_traverse(0, 0)
print robot_traverse_dynamic(0, 0)