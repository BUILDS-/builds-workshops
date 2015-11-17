# n represents the size of the staircase

# Returns the number of possible paths to get to n
def staircase(n):
	paths = 0
	if n == 0:
		return 1
	if n > 0:
		paths += staircase(n - 1)
	if n > 1:
		paths += staircase(n - 2)
	if n > 2:
		paths += staircase(n - 3)
	return paths

# This problem can be memoized and made into a dynamic programming problem
# Saves paths in saved_paths
max_paths = 30
saved_paths = [0] * max_paths
def staircase_dynamic(n):
	paths = 0
	if n == 0:
		return 1
	if saved_paths[n]:
		return saved_paths[n]
	if n > 0:
		paths += staircase(n - 1)
	if n > 1:
		paths += staircase(n - 2)
	if n > 2:
		paths += staircase(n - 3)
	saved_paths[n] = paths;
	return saved_paths[n]

print staircase(5)
print staircase_dynamic(5)