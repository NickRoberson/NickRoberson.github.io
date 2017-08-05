   226   5    
OpenProcessing
My Sketches
My Feed

Edit Profile

Get Plus+ Membership

Sign out

Classes
All Classes


Search
/ Recent s / Browse All physics game visualization particles color evolution circle lines
 Follow OpenProcessing on Twitter openprocessing  Email info@openprocessing.org Credits Terms of Service Privacy Policy 
   



sketch147268 

83
{
84
   myColor.init(); 
85
}
86
​
87
class MyColor
88
{
89
  float R, G, B, Rspeed, Gspeed, Bspeed;
90
  final static float minSpeed = .7;
91
  final static float maxSpeed = 1.5;
92
  MyColor()
93
  {
94
    init();
95
  }
96
  
97
  public void init()
98
  {
99
    R = random(255);
100
    G = random(255);
101
    B = random(255);
102
    Rspeed = (random(1) > .5 ? 1 : -1) * random(minSpeed, maxSpeed);
103
    Gspeed = (random(1) > .5 ? 1 : -1) * random(minSpeed, maxSpeed);
104
    Bspeed = (random(1) > .5 ? 1 : -1) * random(minSpeed, maxSpeed);
105
  }
106
  
107
  public void update()
108
  {
109
    Rspeed = ((R += Rspeed) > 255 || (R < 0)) ? -Rspeed : Rspeed;
110
    Gspeed = ((G += Gspeed) > 255 || (G < 0)) ? -Gspeed : Gspeed;
111
    Bspeed = ((B += Bspeed) > 255 || (B < 0)) ? -Bspeed : Bspeed;
112
  }
113
}
114
​
115
class Particle
116
{
117
  final static float RAD = 4;
118
  final static float BOUNCE = -1;
119
  final static float SPEED_MAX = 2.2;
120
  final static float DIST_MAX = 50;
121
  PVector speed = new PVector(random(-SPEED_MAX, SPEED_MAX), random(-SPEED_MAX, SPEED_MAX));
122
  PVector acc = new PVector(0, 0);
123
  PVector pos;
124
  //neighboors contains the particles within DIST_MAX distance, as well as itself
125
  ArrayList<Particle> neighboors;
126
  
127
  Particle()
128
  {
129
    pos = new PVector (random(width), random(height));
130
  }
131
​
132
  public void move()
133
  {    
134
    pos.add(speed);
135
    
136
    acc.mult(0);
137
    
138
    if (pos.x < 0)
139
    {
140
      pos.x = 0;
141
      speed.x *= BOUNCE;
142
    }
143
    else if (pos.x > width)
144
    {
145
      pos.x = width;
146
      speed.x *= BOUNCE;
147
    }
148
    if (pos.y < 0)
149
    {
150
      pos.y = 0;
151
      speed.y *= BOUNCE;
152
    }
Settings
Files
ModeP5js  Processing.js 
v1.4.8
Tabs Show  Hide 






 
