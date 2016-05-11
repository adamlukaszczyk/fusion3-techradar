//This is the title for your window tab, and your Radar
document.title = "Xedo Fusion3 Technology Radar (May 2016)";


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
        // t: 100 - 170
        // Adopt: Working with confidence; Released to live; Good knowladge in team; Ready to use in new projects without investigation;
        { "name": "Resharper", "pc": { "r": 30, "t": 170 }, "movement": "c" },
        { "name": "GIT", "pc": { "r": 20, "t": 120 }, "movement": "c" },
        { "name": "TFS (Task Management)", "pc": { "r": 80, "t": 160 }, "movement": "c" },
        { "name": "Confluance", "pc": { "r": 40, "t": 140 }, "movement": "c" },
        { "name": "JIRA", "pc": { "r": 90, "t": 100 }, "movement": "c" },
        { "name": "Jenkins", "pc": { "r": 90, "t": 130 }, "movement": "c" },
        { "name": "Slack", "pc": { "r": 70, "t": 120 }, "movement": "c" },
        { "name": "nUnit", "pc": { "r": 50, "t": 110 }, "movement": "c" },
        { "name": "Visual Studio 2015", "pc": { "r": 70, "t": 100 }, "movement": "c" },
        { "name": "Skype", "pc": { "r": 70, "t": 140 }, "movement": "c" },
        { "name": "Selenium", "pc": { "r": 50, "t": 160 }, "movement": "c" },
        { "name": "StyleCop", "pc": { "r": 90, "t": 145 }, "movement": "c" },
        { "name": "SpecFlow", "pc": { "r": 90, "t": 170 }, "movement": "c" },
        
        // Trial: Tested in battle; Very promissing; Still a lot of unknowns;
        { "name": "Atom", "pc": { "r": 170, "t": 140 }, "movement": "c" },
        { "name": "Trello", "pc": { "r": 120, "t": 160 }, "movement": "c" },
        { "name": "SoapUI", "pc": { "r": 150, "t": 120 }, "movement": "c" },
        { "name": "Crucible", "pc": { "r": 190, "t": 110 }, "movement": "c" },
        { "name": "TestRail", "pc": { "r": 140, "t": 150 }, "movement": "c" },
        
        // Assess: Very interesting; Untested in production; Lack of experiance in the team; 
        { "name": "Protractor", "pc": { "r": 230, "t": 140 }, "movement": "c" },
        { "name": "Google Analytics", "pc": { "r": 250, "t": 170 }, "movement": "c" },
        { "name": "Git2TFS", "pc": { "r": 280, "t": 120 }, "movement": "c" },
        { "name": ".Net Core", "pc": { "r": 220, "t": 160 }, "movement": "c" },
        { "name": "GitLab", "pc": { "r": 230, "t": 100 }, "movement": "c" },
        { "name": "JMeter", "pc": { "r": 240, "t": 120 }, "movement": "c" },
        { "name": "MSTest", "pc": { "r": 290, "t": 150 }, "movement": "c" },
        { "name": "NHibernate", "pc": { "r": 280, "t": 140 }, "movement": "c" },
        { "name": "TestComplete", "pc": { "r": 270, "t": 160 }, "movement": "c" },

        // Hold: Out of team scope; There are better alternatives; Depricated technology;  
        { "name": "Team City", "pc": { "r": 320, "t": 110 }, "movement": "c" },
        { "name": "SVN", "pc": { "r": 370, "t": 160 }, "movement": "c" },
        { "name": "TFS (Version Control System)", "pc": { "r": 380, "t": 140 }, "movement": "c" },
        { "name": "ReviewBoard", "pc": { "r": 350, "t": 95 }, "movement": "c" },
        ]
    },
    { "quadrant": "Languages & platform",
      "left": w-200+30,
      "top" : 18,
      "color" : "#587486",
      "items" : [ 
        // t: 10 - 80
        { "name": "C#", "pc": { "r": 30, "t": 70 }, "movement": "c" },
        { "name": "Azure", "pc": { "r": 50, "t": 52 }, "movement": "c" },
        { "name": "CSS", "pc": { "r": 70, "t": 10 }, "movement": "c" },
        { "name": "TSQL", "pc": { "r": 30, "t": 20 }, "movement": "c" },

        { "name": "Windows Server / IIS", "pc": { "r": 120, "t": 20 }, "movement": "c" },
        { "name": "PowerShell", "pc": { "r": 170, "t": 40 }, "movement": "c" },

        { "name": "Elastic Search", "pc": { "r": 220, "t": 40 }, "movement": "c" },
        { "name": "MongoDB", "pc": { "r": 230, "t": 10 }, "movement": "c" },
        { "name": "Linux", "pc": { "r": 210, "t": 70 }, "movement": "c" },
        { "name": "AWS", "pc": { "r": 250, "t": 20 }, "movement": "c" },
        { "name": "Active Directory", "pc": { "r": 260, "t": 70 }, "movement": "c" },
        { "name": "SASS", "pc": { "r": 210, "t": 50 }, "movement": "c" },

        { "name": "PHP", "pc": { "r": 330, "t": 60 }, "movement": "c" },
        { "name": "C++", "pc": { "r": 350, "t": 20 }, "movement": "c" },
        { "name": "JAVA", "pc": { "r": 370, "t": 50 }, "movement": "c" },
        { "name": "Xamarin", "pc": { "r": 310, "t": 10 }, "movement": "c" },
        { "name": "SharePoint", "pc": { "r": 320, "t": 80 }, "movement": "c" },
        ]
    },
    { "quadrant": "Techniques",
      "left" :45,
       "top" : (h/2 + 18),
      "color" : "#DC6F1D",
      "items" : [
        // t: 190 - 260
        { "name": "AJAX", "pc": {"r": 30, "t": 250}, "movement": "c" },
        { "name": "Unit Tests", "pc": {"r": 40, "t": 200}, "movement": "c" },
        { "name": "Tests Automation", "pc": {"r": 90, "t": 225}, "movement": "c" },
        { "name": "Code Reviews", "pc": {"r": 50, "t": 250}, "movement": "c" },
        { "name": "SOA", "pc": {"r": 60, "t": 190}, "movement": "c" },
        { "name": "Asynchronic", "pc": {"r": 80, "t": 240}, "movement": "c" },
        { "name": "IOC", "pc": {"r": 60, "t": 220}, "movement": "c" },
        { "name": "OOP", "pc": {"r": 80, "t": 210}, "movement": "c" },
        { "name": "Relative DB", "pc": {"r": 80, "t": 260}, "movement": "c" },

        { "name": "Scrum", "pc": {"r": 100, "t": 205}, "movement": "c" },
        { "name": "Kanban", "pc": {"r": 120, "t": 245}, "movement": "c" },
        { "name": "CQRS", "pc": {"r": 195, "t": 190}, "movement": "c" },
        
        { "name": "BigData", "pc": {"r": 230, "t": 200}, "movement": "c" },
        { "name": "DDD", "pc": {"r": 280, "t": 250}, "movement": "c" },
        { "name": "TDD", "pc": {"r": 290, "t": 240}, "movement": "c" },
        { "name": "Security", "pc": {"r": 220, "t": 220}, "movement": "c" },
        { "name": "NoSQL", "pc": {"r": 210, "t": 260}, "movement": "c" },
        { "name": "WebSockets", "pc": {"r": 260, "t": 210}, "movement": "c" },
        { "name": "Code Metrics", "pc": {"r": 250, "t": 240}, "movement": "c" },
        { "name": "Multithreading", "pc": {"r": 270, "t": 190}, "movement": "c" },
        { "name": "UX", "pc": {"r": 270, "t": 220}, "movement": "c" },

        { "name": "UML", "pc": {"r": 350, "t": 220}, "movement": "c" },
        { "name": "Cryptography", "pc": {"r": 320, "t": 260}, "movement": "c" },

        ]
    },
    { "quadrant": "Libraries & Frameworks",
      "color" : "#B70062",
      "left"  : (w-200+30),
      "top" :   (h/2 + 18),
      "items" : [ 
        // t: 270 - 350
        { "name": "ASP.NET MVC", "pc": { "r": 60, "t": 290 }, "movement": "c" },
        { "name": "Bootstrap", "pc": { "r": 70, "t": 350 }, "movement": "c" },
        { "name": "ASP.NET WebAPI", "pc": { "r": 80, "t": 300 }, "movement": "c" },
        { "name": "jQuery", "pc": { "r": 30, "t": 340 }, "movement": "c" },
        { "name": "React.js", "pc": { "r": 60, "t": 310 }, "movement": "c" },
        { "name": "Simple Injector", "pc": { "r": 90, "t": 350 }, "movement": "c" },

        { "name": "ASP.NET WebForms", "pc": { "r": 120, "t": 280 }, "movement": "c" },

        { "name": "ASP.NET WinForms", "pc": { "r": 240, "t": 280 }, "movement": "c" },
        { "name": "WPF", "pc": { "r": 270, "t": 340 }, "movement": "c" },
        { "name": "WCF", "pc": { "r": 210, "t": 320 }, "movement": "c" },
        { "name": "Angular.js", "pc": { "r": 220, "t": 300 }, "movement": "c" },
        { "name": "ASP.NET SignalR", "pc": { "r": 280, "t": 310 }, "movement": "c" },
        { "name": "WebAii", "pc": { "r": 220, "t": 340 }, "movement": "c" },
        
        
        { "name": "Dapper", "pc": { "r": 350, "t": 290 }, "movement": "c" },
        { "name": "Unity (IOC)", "pc": { "r": 330, "t": 340 }, "movement": "c" },
      ]
    }
];
