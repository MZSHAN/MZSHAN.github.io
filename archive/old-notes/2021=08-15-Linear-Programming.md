Linear Programming

Problem:
Linear objective with linear constraints. variables are real.

Quick Notes
Simplex method - worst case exponential - works well in practice
Ellepsoid methods = worst case polynomial - works poorly in practice
Interior point methods
Time complexity above is in terms of number of variables not number of contraints
If variables in a Linear program are only allowed to be Integers, then the problem is much harder. It is called Integer programming and becomes NP-Completee

Simplex Method: 
The minima for the linear program lies at the vertices of the complex polytope of the feasible region. 
Choose a vertex. It will have  edges connected to it. Move in direction of edge that decreases the objective.
Keep doing this till the objective does not decrease towards any of the edges.
Since this is a local minimum, by convexity, it is also a global minimum
Sort of like maximum descent on the edges to reach a minima
There are exponentially many vertices of the complex polytope. Worst case all have to be checked. So the worst time is exponential.


Intuition on why the minima lies on one of the vertices:
The objective function is linear. So the fucntion is a "hyper-plane" in a space with an additional dimension than the feasible region space.
Eg. if there are 2 variables, then the feasible region lies in the 2d space. The object function lies in 3d space(2d of feasible region and 3rd dim where func varies) and is a plane(constant derivatives in all directions)
So naturally to find the minima of function, we move in the direction where the objective function decreases in the feasible set. 
This will obviously(in 2d case) be an edge or a vertex. If edge then multiple global minima, if vertex then only one.


Interior Points Method:
In interior points method, we start at vertex, but instead of taking edges to reach the minimum vertex, we travel to the interior of the feasible region(complex polytope/simplex).
Thus we move towards the minima through a shorter, more straight path as we don't have to take the circumference of the feasible region.
Calculus is used in the interior to move towards the solution point fast

Why is integer Programming hard:
Since discrete integer points form the feasible regiona , the farthest points on polytope(simplex vertices) in the dirction of decrease of objective function may not even be in the feasible region.(see intution on vertices above). Since, simplex method only checks vertices of simplex, it does not work for integer programming. 
Note that it is also possible that none of the simplex vertices lie in the feasible region
feasible region is discrete points in the complex polytope. Since it is discrete, calculus fails and interior point method can not be used


Check Later: 
Complete MIT lecture: https://www.youtube.com/watch?v=WwMz2fJwUCg&t=68s
Dual of LP - very interesting. Variables getting flipped
Max flow as Linear program
Very important - check to MIT Linear programming Homework

Refereces:
Complete this lectue: Gilbert Strang's lecture: good: https://www.youtube.com/watch?v=feb9j65Iz4w
Simplex algo wifi - look for simplex diagram - https://en.wikipedia.org/wiki/Simplex_algorithm
Great Pictorial Representation of Linear Programs: https://en.wikipedia.org/wiki/Linear_programming#Duality

Further Learning
Duality in Linear Programs (Revise duality in general also)https://www.youtube.com/watch?v=AiyY9LJmDzA&list=PLRPU00LaonXQ27RBcq6jFJnyIbGw5azOI&index=11 
Exhaustive resource to implement Linear Programs: https://people.cs.umass.edu/~barring/cs611/lecture/24.pdf 
Generaly good looking algorithms course that spends time on randomization algorithms: https://people.cs.umass.edu/~barring/cs611/lecture/ 
Great Playlist on Linear Programming: https://www.youtube.com/watch?v=e313WNw1olk&list=PLDndWhwv4Ujo10_a2T4R4Uqng1nduvfu1
    - Explains whys some of the vertices of the Simplex might be degenerate(keep cycling among few vertices)
    - Explains ellsoid method to find feasible point(if only one feasible point - then that point is the solution)
    - Interior points method
------------------X----------------X-------------------

Interior Points Method:

Polynomial time
path to solution from inside the simplex
In practice only performs better than the simplex method on some large problems

Central Path Primal Formulation:
- Does not use slack variables, so has inequality constraints
- u for weighing
- analytical center of feasible region: for large u
- Actual solution for u=0
- Central Path is followed as u is varied

Central Path Primal-Dual Formulation:
- uses slack variables, so has equality constraints
- Approximation techniques use for inequalities involving variable u

SideNote:
Lagrange Multipliers - The gradient of the objective function is equal weighted sum of gradients of equality constraints
                       These weights of the equality constraint gradient are called Lagrange Multipliers - https://en.wikipedia.org/wiki/Lagrange_multiplier

Refrences: https://www.youtube.com/watch?v=Uf7rGp9xdkE&list=PLDndWhwv4Ujo10_a2T4R4Uqng1nduvfu1&index=38
    - Primal-Dual formulation will be much easiert to understand after Duality

Further Watch:
- How Newton's method is used to find the central Path: https://www.youtube.com/watch?v=4mpq-wsYBxw&list=PL6ogFv-ieghdoGKGg2Bik3Gl1glBTEu8c&index=15
- Go through Julia Fanti's notes to understand interior points method
- Extremely good video - How central path method is form of a barrier method and how Newton's method is used to solve for it: https://www.youtube.com/watch?v=bJ0Kkf4u9bo
    - This is also for convex problems
- This also looks good: Maybe will explain everything well and tie things together - https://www.youtube.com/watch?v=zm4mfr-QT1E
    - Will have to revise KKT conditions for this as well

------------------X----------------X-------------------

Least square Programming:

The system of equations is Ax = b. We have to solve for x.
This is like fitting a line with parameters x through data. Features are given by Matrix A and labels by b.
For most cases, the data is greater than the number of parameters. that means that teh number of equations is greater than the number of variables.
Geometrically this means finding intersection of m planes in n dimensional space. where m > n. This system is overdetermined https://en.wikipedia.org/wiki/Overdetermined_system.

For overdetermined systesm, The error Ax - b is minimized by least squares

------------------X----------------X-------------------

Next to learn(Optimization): 
- How Lagrange's multiplier relates to duality
- Understand Interior Points method - Central Path Primal Dual Formulation properly using this
- Branch and Bound Method - for integer programming - https://www.youtube.com/watch?v=V5s36zM4wcY&list=PLDndWhwv4Ujo10_a2T4R4Uqng1nduvfu1&index=53
- Newton's method

Next to learn(Algorithms):
- Viterbi Algorithm
- Forward-backward Algorithm
- Page Rank Algorithm
