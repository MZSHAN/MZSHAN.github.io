Vanishing Points.
How many lines are represented by one vanishing point.

Horizon
Horizon in image space. Camera location.

Using Horizon to determine the height of a person in image - when camera is perperdicular to the ground plane

Projective Plane:
Each point on image is ray in real world

Each line in the image plane - plane in real world
Can find the equation of the plane in the real world in camera co-ordinates - how that gives us the perpendicular to the plane

Now this perpendicular to the plane is also perpendicular to the line in image plane

How is it used to calculate the line representation - is the line representation mentioned on the slide in terms fo the image co-ordinate frame??
It should be, otherwise does not make sense


Given two points on the image plane - Think of them as vectors in 3d space. Take cross product. Gives normal vector - this is the equation of the line in the image plane as explained by the above intuition - as cross product gives normal to the plane and normal to the plane is the line equation in the 2d image plane
This can be used to get the equation of the horizon in the 2d plane

Line (a, b, 0) in the image plane
LIne (0, 0, 1) in the world space - represents the horizon of the image plane - diff from the horizon on the image ??? did not understand this properly


Given two lines in a image - how do we find the intersection of the two lines in the image
cross product of surface normals in the homogeneous coordinates
normalize by third element to get point in the plane

Points at infinity - homogenous coordinate is zero
Vertical Vanishing point at infinity.
Any point (x1, x2, 0) is intersection of lines at infinity - that is lines are parallel on the image plane ---- this is an important distinction.
Need to be parallel in the world space(mostly not parallel)
Most parallel lines in world space - converge in teh image plane - hence their cross product will not have the last homogenous coordinate as zero

One point at infinity <-> one parallel line direction


Flow of Corordiantes in Projective Geometry:
    
    You have world coordinates (x, y, z) -> divide all by z to get (X, Y, 1) which is a point on the image plane. 
    Given another point (X2, Y2, 1) we can find the (a, b, c) -> this gives the plane normal in world coordinates and line in the image plane

Ideal point: 
    (x, y, 0) correponds to set of parallel lines in "Image" which point in the same direction (x, y)
Ideal line:
    (a, b, 0) - in world space is the inter


Point at infinity(in the image plane) - intersection of parallel lines in the image. Parallel lines can be in any direction. So we have one point at infinity for every direction. These points lie at infinity in the image plane(But in world coordinate system, actually lie on (x, y, 0) ie. on the camera plane)


Intuition: All points at infinity make an line in the image plane. This represents a plane in the world co-ordinates. All points at infinity lie on this plane in the world co-ordinates. Since the points at infinity are (x, y, 0) - the plane at infinity would be the x, y plane. The x, y plane is represented by it's normal (0, 0, 1) -- hence this is the line at infinity

Now think just about the image plane. The points at infinity is (x, y, 0) the line at infinity passes through it and has to satisgy ax + by +c = 0
. So the line at infinity is (0, 0, 1)


Line at infinity(in the image plane) - passes through all the points at infinity(in the image plane)
    Now line passing through points in image plane can 


Shifting between camera co-ordinates and world co-ordinates:

One way to think about it : the rotation columns are world co-ordinates in camera co=ordiantes
OTher way - translating the camera to world coordinates and rotating it appropriately to align with world co-ordinates


Pinhole camera model:
- relationship between focal length and field of view
-

Zooming - chaging focal length
