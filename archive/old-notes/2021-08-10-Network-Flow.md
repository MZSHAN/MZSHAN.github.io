---
title: "Network Flow Problems"
categories:
  - Learning
---

General Setup of the Problem:

Imagine a complex network of ONE WAY roads connecting cities. This can be thought of as a graph. Each city(node) may have zero or more roads(edges) entering and leaving it. 
Each road has a CAPACITY(maximum cars that can move on the road) and FLOW(number of cars currently on a road). Every car that enters a city has to leave it.
Problem is to maximize the FLOW(number of cars) from a source city to a destination city. This has to be done while keeping flow on each road as per it's capacity.

What makes the problem hard?
The road flow is a local contraint. Decreasing the flow for a local edge might increase the overall flow from source to sink and vice versa. In  a graph edges incease as N^2 with linear increase in vertices. Optimizing a global objective with local constraints rising at N^2 rate is the problem.


(Note: Cycles with two nodes are coverted to 3 node cycles by introducing an auxiliary node)
Algorithm to solve problem: (Ford Fulkerson ALgorithm)
We define a residual network to find the solution. The residual network represents the graph with edges as possible increases and decreases in flow.
So the weight of the edge in direction as original graph is (Capacity - flow) as this how much the flow can be increased by. Weight of the edge in the opposite direction is equal to the flow as we can decrease the flow by this amount in orignal graph to make it zero.

The algorithm states that we can find a path from source to target(augmented path) in the residual network, then the network flow is sub-optimal. 
The flow of the augmented path is found and tweaked in the original graph.
The residual graph is calculated again and process continues until no augmented path exists in residual network.

Intuition: 
The residual network contains edges that are operating at sub-optimal flow. It edge is operating at capacity, that edge does not make it to the residual. 
If there is an augmented path, that means there is a path from source to destination where all the paths are at suboptimal capacity. 
The minimum flow in this augemented path(called Residual flow of Residual graph) corresponds to the bottle-neck in the orginal network. If the edge with residual flow is operated at capacity, then the flow along the augmented path would increase in the original network. This is what is done in the original network. 
It would make this edge disappear in the next residual network since this edge will now be operating at full capacity in the original network.** 
After some iterations, enough edges will disappear in the residual network and there would not be a path from source to sink(augmented path)
(The above is an intuitive proof in one direction. Max flow implies no augmented path. We want reverse proof no augmented path implies max flow. Cuts are used to establish that)
**The disappearing edge will show up in the oppsite direction. See example at 39:30 https://www.youtube.com/watch?v=8C_T4iTzPCU 

Edmand-Karp algorithm - just use BFS to find augmenting paths. makes the algoriht polynomial bound O(VE^2).

 Sidenotes:

 Graph Cut - partition vertices into two disjointed sets. 
 Cut Set - Set of edges of graph that were cut

 Flow Network S-t cut - A cut in which Source and Target are in different set of nodes and there is no path between source and target

 Max Flow Min Cut Theorem - Value of any Flow in bounded by capacity of any cut in a network.
    Note - Flow can be negative(Convention to account for opposite flow) but capacity is always positive.

Lemma - Flow of a network is the flow across any cut(s-t). 
        Since flow across cut is bounded by capacity of cut, max flow min cut follows from this lemma


Residual Network - It is the orginal graph without the edges flowing at full capacity. Naturally it is defined for a particluar flow.
                  The edges operating at suboptimal capcity have a corresponding negative egdge(edge in reverse direction) with the   
                

Example(from MIT lecturehttps://www.youtube.com/watch?v=8C_T4iTzPCU) -> graphical intuition better here https://www.youtube.com/watch?v=JIb57Yw4LvI

A bunch of team with points and top of table qualifies. Each team some points and some games left to play. Given this, we have to predict if a team will be at the top of the table.
The comlex interaction of teams having games left to play with each other makes the problem complicated to solve.

The graph is for a particular team making it to the playoff or not. let's say we check for team 5.

Source connects to a set of vertices which are number of total games which do not involve team 5. Here individual interactions between teams is weighed by the number of gaems the couple of teams play. 
Target is connected to team nodes. The capacities are the total number of games they need to win to not be below team5 in table. ie. self_win + self_remain - team5_win - coz in that case team5 will be eliminted.
Now the source connected nodes(SC) are connected to the target connected(TC) ones. These connections are made based on where the points "pushed" in the network from the source can go to specific teams - which will only be the team which are interacting on the SC nodes. These connections are infinite capacity - meaning that the flow from SC can GO to TC anyhow, there is no restriction(Note however that the flow from S to SC is bounded by the number of games)

Now max flow is calculated for the graph. When max flow is reached, basically the edges connected to the target are at max allowed capacity - the capacity where team 5 will barely qualify. Now if the flow across the source to SC nodes is at full capacity, that means that all the games have been played. So team5 will qualify. But if the flow < capacity, it means that more games that do not involve team5 are left. Which means that team5 will be disqualified.
