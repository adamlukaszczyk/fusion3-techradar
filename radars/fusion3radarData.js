//This is the title for your window tab, and your Radar
document.title = "Fusion3 Technology Radar (May 2016)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Tools",
      "left" : 45,
      "top" : 18,
      "color" : "#8FA227",
      "items" : [ 
        { "name": "Resharper", "pc": { "r": 30, "t": 170 }, "movement": "c" },
        { "name": "GIT", "pc": { "r": 20, "t": 120 }, "movement": "c" },
        { "name": "Confluance", "pc": { "r": 40, "t": 140 }, "movement": "c" },
        { "name": "nUnit", "pc": { "r": 50, "t": 110 }, "movement": "c" },
        { "name": "Visual Studio 2015", "pc": { "r": 70, "t": 100 }, "movement": "c" },
        { "name": "Skype", "pc": { "r": 70, "t": 140 }, "movement": "c" },
        
        { "name": "Atom", "pc": { "r": 170, "t": 140 }, "movement": "c" },

        { "name": "Protractor", "pc": { "r": 230, "t": 140 }, "movement": "c" },
      ]
    },
    { "quadrant": "Languages & platform",
      "left": w-200+30,
      "top" : 18,
      "color" : "#587486",
      "items" : [ 
        { "name": "C#", "pc": { "r": 30, "t": 72 }, "movement": "c" },
        { "name": "Azure", "pc": { "r": 50, "t": 52 }, "movement": "c" },
        { "name": "CSS", "pc": { "r": 70, "t": 10 }, "movement": "c" },
        { "name": "TSQL", "pc": { "r": 30, "t": 20 }, "movement": "c" },
      ]
    },
    { "quadrant": "Techniques",
      "left" :45,
       "top" : (h/2 + 18),
      "color" : "#DC6F1D",
      "items" : [
        { "name": "AJAX", "pc": {"r": 30, "t": 225}, "movement": "c" },
        { "name": "Scrum", "pc": {"r": 100, "t": 205}, "movement": "c" },
        { "name": "Asynchronic", "pc": {"r": 80, "t": 240}, "movement": "c" },
      ]
    },
    { "quadrant": "Libraries & Frameworks",
      "color" : "#B70062",
      "left"  : (w-200+30),
      "top" :   (h/2 + 18),
      "items" : [ 
        { "name": "ASP.NET MVC", "pc": { "r": 60, "t": 290 }, "movement": "c" },
        { "name": "ASP.NET WebAPI", "pc": { "r": 80, "t": 300 }, "movement": "c" },
        { "name": "jQuery", "pc": { "r": 30, "t": 340 }, "movement": "c" },
        { "name": "React.js", "pc": { "r": 60, "t": 310 }, "movement": "c" },

        { "name": ".", "pc": { "r": 120, "t": 300 }, "movement": "c" },

        { "name": "Angular.js", "pc": { "r": 220, "t": 300 }, "movement": "c" },
      ]
    }
];
