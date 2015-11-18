function ResumeCtrl($scope) {
  $scope.resume = {
    header: {
      name: {
//        title: 'Mr.',
        firstname: 'Jin',
        middlenames: '(Sheng)',
        surname: 'Yu'
      },
      address: {
        street: '6434 102nd St, Apt 3K',
        city: 'Rego Park',
        state: 'NY',
        zip: '11374'
      },
      contact:{
        phone: '347-688-JAVA(5282)',
        email: 'career15@jsy.us'
      }
    },

    objective: [
      "Software engineering position in a creative and challenging environment. \
      I'm interested in taking a long-term approach to software development,\
      following good practices to development software that meets the user's\
      requirement, using sound designs and thorough testing.",

      'My current interests include Android and iOS mobile application development,\
      the Java and Scala programming language, open-source development(https://bitbucket.org/sheng/reuse_lib),\
      high throughput and low latency architecture\
      and API design(https://bitbucket.org/sheng/parsefacade).'],

    skillarea: [
      {
        title: 'Software Skills',

        skillset: [
          {
            title: 'Programming Languages',
            skill: [
              'Java',
              'Swift',
              'Objective C',
              'JavaScript',
              'TypeScript',
              'Scala',
              'C/C++',
              'Object Pascal (Delphi)',
              'C# .Net',
              'Visual Basic',
              'SQL',
              'MIPS assembly',
              'SPARC assembly',
              'Motorola micro-controller assembly',
              'HyperTalk',
              'AppleScript',
              'Shell scripting'
            ]
          },
          {
            title: 'Java',
            skill: [
              'Java Programming Language',
              'JVM Architecture',
              'Memory Model',
              'Threading/Synchronization',
              'JDBC',
              'RMI',
              'java.io',
              'java.net',
              'Collections',
              'Reflection API',
              'JavaBean',
              'Servlets and JSP',
              'JMS',
              'Spring',
              'Swing/AWT'
            ]
          },
          {
            title: 'Google',
            skill: [
              'Android APIs',
              'Integrate with Google Calendar by generating ICS file using Servlet/JSP',
              'AppEngine(Python and Java)'
            ]
          },
          {
            title: 'Software Design',
            skill: [
              'Object Oriented Design and Analysis',
              'Design Patterns',
              'UML Modeling',
              'Use Case',
              'Sequence Diagram'
            ]
          },
          {
            title: 'Operating Systems',
            skill: [
              'Mac OS X',
              'UNIX (Linux and Solaris)',
              'Windows',
              'BeOS'
            ]
          },
          {
            title: 'Database Management',
            skill: [
              'Oracle',
              'IBM DB2',
              'MS SQL Server and TSQL',
              'SQLite',
              'Access',
              'FileMaker Pro',
              'WebFM'
            ]
          },
          {
            title: 'Web',
            skill: [
              'AngularJS',
              'JSON',
              'REST',
              'XML',
              'HTML',
              'JSP',
              'Servlets',
              'ASP/ASPX',
              'Ajax using GWT',
              'Dream Weaver',
              'Claris Homepage',
              'Adobe Pagemill',
              'CGI development'
            ]
          },
          {
            title: 'Multimedia',
            skill: [
              'Macromedia Director',
              'Macromedia Flash',
              'Macromedia Authorware',
              'HyperCard',
              'OpenGL'
            ]
          },
          {
            title: 'Development Environments',
            skill: [
              'Eclipse',
              'JetBrains',
              'NetBeans',
              'Borland JBuilder',
              'Xcode',
              'Microsoft Visual Studio (Visual Basic, C++, C# .NET)',
              'IBM VisualAge for Java',
              'J2EE',
              'IBM WebSphere',
              'BEA Weblogic',
              'Apache Tomcat',
              'Borland Delphi',
              'GIT',
              'Subversion(SVN)',
              'SourceSafe',
              'PVCS',
              'Metrowerks IDE (C/C++) for Macintosh',
              'Script Debugger for AppleScript'
            ]
          }
        ]
      },
      {
        title: 'Hardware',

        skillset: [
          {
            title: 'Electrical Engineering',
            skill: [
              'Analog Circuits',
              'Digital Circuits',
              'Theories',
              'Principles'
            ]
          },
          {
            title: 'Computer Hardware',
            skill: [
              'Microcontroller Programming',
              'Combination Circuits',
              'System Architecture',
              'Pipelining',
              'Out-of-order Execution',
              'Cache Designs',
              'Minimization'
            ]
          }
        ]
      },

      {
        title: 'Finance',

        skillset: [
          {
            title: 'Finance',
            skill: [
              'Equities',
              'Options',
              'Futures',
              'FIX format',
              'Micro and Macro Economics',
              'Economics History',
              'Banking System'
            ]
          }
        ]
      }
    ],

    history: {
      _y: {
        jobtitle:'Lead Mobile SDK Engineer',
        employer:'RealNetworks',
        location:{
          city: 'New York',
          state: 'NY'
        },
        period:{
          from: {
            date: {
              // 11
              month: "4",
              year: "2015"
            }
          },
          to: {
            date: {
              // 11
              month: "11",
              year: "2015"
            }
          },
//           to: 'Present'
        },
        description:[
          'Responsible for the development of mobile SDK.'],
        projects:[
          {
            title:'RealCloud SDK',
            description:"Develop Android SDK while managing contractor to develop iOS SDK. Allow third-party apps to have easy access to RealPlayer Cloud data store via REST API."
          },
          {
            title:'RealTimes SDK',
            description:"Polish private API for public consumption allowing third-party apps to generate video stories by supplying their own content."
          }
        ],
//         achievements:[
//           "Successfully developed and deployed cross-platform mobile application to Android, iOS and Web",
//           "Lead development of Android and iOS XMPP client",
//           'Implement SMPP client and server that is capable of saturating gigabit ethernet',
//           "Train new development team members by documenting application code, creating diagrams, performing code review and prividing hands-on training"
//         ]
      },
      _z: {
        jobtitle:'US Integration Lead Engineer',
        employer:'Algomi',
        location:{
          city: 'New York',
          state: 'NY'
        },
        period:{
          from: {
            date: {
              month: "8",
              year: "2014"
            }
          },
          to: {
            date: {
              month: "4",
              year: "2015"
            }
          },
        },
        description:[
          'Responsible for the deployment of Algomi platform to client environment. \
          Work with sales team to communicate technical architecture and integration requirements.'],
//         projects:[
//           {
//             title:'Abeona',
//             description:"Develop mobile application for parents to monitor child's usage of Android device.\
//             All data is store using a popular backend-as-a-service.\
//             Parents receive real-time activity stream and can update child's device configuration\
//             via push notifications."
//           },
//         ],
        achievements:[
          "Improve connectivity to London headquarter by setting up VPN tunnel for entire office to replace individual VPN sessions from each client machine.",
        ]
      },
      a: {
        jobtitle:'Lead Development Engineer',
        employer:'RealNetworks',
        location:{
          city: 'New York',
          state: 'NY'
        },
        period:{
          from: {
            date: {
              month: "4",
              year: "2011"
            }
          },
          to: {
            date: {
              month: "8",
              year: "2014"
            }
          },
        },
        description:[
          'Responsible for the development of new applications with mobile, desktop and server components.'],
        projects:[
          {
            title:'Abeona',
            description:"Develop mobile application for parents to monitor child's usage of Android device.\
            All data is store using a popular backend-as-a-service.\
            Parents receive real-time activity stream and can update child's device configuration\
            via push notifications."
          },
          {
            title:'Mobile Messaging Application',
            description:"Develop Android and iOS messaging applications using XMPP and OpenFire server."
          },
          {
            title:'Mobile Twitter Application',
            description:"Develop location-based messaging using Twitter API."
          },
          {
            title:'Server Application',
            description:"Develop server application using SMPP for inter-carrier messaging."
          }
        ],
        achievements:[
          "Successfully developed and deployed cross-platform mobile application to Android, iOS and Web",
          "Lead development of Android and iOS XMPP client",
          'Implement SMPP client and server that is capable of saturating gigabit ethernet',
          "Train new development team members by documenting application code, creating diagrams, performing code review and prividing hands-on training"
        ]
      },
      b:{
        jobtitle:'Senior Software Developer',
        employer:'Merrill Lynch',
        location:{
          city: 'New York',
          state: 'NY'
        },
        period:{
          from: {
            date: {
              // 11
              month: "11",
              year: "2006"
            }
          },
          to: {
            date: {
              // 11
              month: "8",
              year: "2010"
            }
          }
        },
        description:['Maintain and create applications to support trading platform.'],
        projects:[
          {
            title:'Server Applications',
            description:"Create Drop Copy server application that process FIX message in near-realtime from Tibrv and send to clients via MQueue.\
            Create server application to allow application messages to be replayed.\
            Create server application to capture high volume trading data into MS SQL Server.\
            Instructment applications with JMX to enable remote monitoring and configuration change.\
            Refactor and architect software to into reusable components allowing connections of data sources to\
          data destinations with flexible processing and threading models.\
        A data source or destination can be a TIBCO Rendezvous subject, IBM MQueue, TCP connection, JDBC database or JMS.\
        Implement fault-tolerant feature using active/inactive process model.\
        Replace custom code with open-source component to reduce code size while increasing functionality."
          },
          {
            title:'Desktop Applications',
            description:"Take order execution updates from TIBCO Rendezvous and display them in a dynamic Java Swing interface.\
            Read updates from TCP connection and display them in a table component within a Java Applet.\
            Both applications use multiple threads to perform background operations to keep user interface responsive.          "
          }
        ],
        achievements:[
          "Reduce message processing latency by 80% from 50ms to 10ms by implementing straight-through processing",
          "Eliminate 30 minute end-of-day message backlog by increasing throughput to keep up with incoming message burst",
          "Increase application reliability by fixing threading bugs and memory leaks",
          "Simplify software while adding functionality by factoring out shared code across projects"
        ]
      },
      c:{
        jobtitle:'Senior Systems Engineer',
        employer:'Crispwireless',
        location:{
          city: 'New York',
          state: 'NY'
        },
        period:{
          from: {
            date: {
              // 11
              month: "3",
              year: "2006"
            }
          },
          to: {
            date: {
              // 11
              month: "9",
              year: "2006"
            }
          }
        },
        description:['Crisp Wireless provides innovative mobile content management solutions enabling consumer-facing companies to deliver rich media content and engaging applications for revenue generation, brand promotion, and customer loyalty.'],
        projects:[
          {
            title:'Tribune Media',
            description:"Complete the development, testing and deployment of multiple\
            Tribune Media mobile news sites. Use xml data feeds for content integration.\
        Provide parsing and conversion of html into mobile friendly markups.\
        Setup version control system (svn) and create procedure for porting changes\
      between sites."
          },
          {
            title:'Lucene',
            description:"Implement full text search of content management system using Apache Lucene,\
            a text search engine library written entirely in Java.  Setup process to index,\
            search, update and delete content."
          },
          {
            title:'RSS',
            description:"Create connector for RSS to our content management system allowing RSS items\
            to be imported and synchronize to our system and allowing our system to\
            publish RSS feeds."
          },
          {
            title:'JMX Monitoring &amp; Configuration',
            description:"Create JMX management beans to monitor and configure server-side tasks.\
            Gather statistics about number of items processed and number of errors.\
            Allow debug option to be changed on a live production system without\
            the need to restart.  Create Servlet filter to validate output for\
            WML and XHTML compliance."
          }
        ],
        achievements:[
          "Integrate HTML parser to clean up and sanitize HTML input into well-form xhtml\
            replacing original ad-hoc string search and replace solution that requires\
            constant updating."
        ]
      },
      d:{
        jobtitle:'Senior Systems Consultant',
        employer:'SOFT Inc',
        location:{
          city: 'New York',
          state: 'NY'
        },
        period:{
          from: {
            date: {
              month: "9",
              year: "2005"
            }
          },
          to: {
            date: {
              month: "12",
              year: "2005"
            }
          }
        },
        description:["A technology consulting firm, building and refining critical computer\
          technology solutions for major clients since 1981."],
        projects:[
          {
            title:'Bottomline Technologies (EPAY)',
            description:"Perform development, testing and deployment of banking and securities\
            applications using WebSeries, the core Bottomline platform for banking\
            and payment systems.\
            The user interface is built using HTML with JavaScript for data validation and lookup.\
        The server side is a combination of JSP, Custom Tags, Servlet and JavaBeans\
      running on WebSphere, Weblogic and JBoss in Windows or Unix environment."
          }

        ],
        achievements:[]
      },
      e:{
        jobtitle:'Professional Staff Software Developer',
        employer:'SRA International',
        location:{
          city: 'Fairfax',
          state: 'VA'
        },
        period:{
          from: {
            date: {
              month: "1",
              year: "2005"
            }
          },
          to: {
            date: {
              month: "9",
              year: "2005"
            }
          }
        },
        description:['SRA is a leading provider of information technology services and\
            solutions - including strategic consulting; systems design, development\
  and integration; and outsourcing and operations management - to clients\
  in national security, civil government, and health care and public health.'],
        projects:[
          {
            title:'EPA Portal',
            description:"Create web portal for the EPA using Oracle Portal Server 9i.\
            Create Portlets using Java, JSP, Struts and Oracle JDeveloper.\
            Use JNDI and JDBC to manage user accounts, including login lookup\
            and password resets.  Use XML and XSLT to display news feeds in portlets."
          }

        ],
        achievements:[]
      },
      f: {
        jobtitle: "Bachelor of Science in Computer Science and Engineering",
        employer: "The Ohio State University",
        location: {
          city: "Columbus",
          state: "Ohio",
          country: "USA"
        },
        period: {
          from: {
            date: {
              month: "3",
              year: "2002"
            }
          },
          to: {
            date: {
              month: "12",
              year: "2004"
            }
          }
        },
        description: "I return to school full-time to complete the last two years of college. In addition to my major, my GEC course contains a concentration of my interest in Economics.",
        projects: {
          project1: {
            title: "Capstone Project",
            description: "Create web application using ASP .NET C# for working with Dependency Structure Matrix (DSM).  The application allows users to import their DSM in Excel CSV format or enter information directly using the web interface."
          },
          project2: {
            title: "Computer Graphic",
            description: "Use C, GLUT and OpenGL to create 2D and 3D graphics and user interface."
          },
          project3: {
            title: "Advance OS Lab",
            description: "Use C/C++ and UNIX API to implement command line interpreter."
          },
          project4: {
            title: "Systems Project",
            description: "Use Java to implement parser for assembly language to simple CPU, assembler, linker/loader and simulator."
          },
          project5: {
            title: "Programming Language",
            description: "Use Javacc and java to build an interpreter for HyperTalk like scripting language."
          },
          project6: {
            title: "OS Lab",
            description: "Use C to implement various operation system components; including priority base process scheduler, virtual memory system, networking layer, disk scheduler in OSP environment."
          },
          project7: {
            title: "Numerical Methods",
            description: "Use C/C++ to implement numerical algorithms that are use to generate 3D images."
          }
        }
      },
      jobg: {
        jobtitle: "Senior Software Developer",
        employer: "Ultryx, Inc",
        location: {
          city: "Columbus",
          state: "Ohio"
        },
        period: {
          from: {
            date: {
              month: "1",
              year: "2000"
            }
          },
          to: {
            date: {
              month: "2",
              year: "2002"
            }
          }
        },
        description: {
          para1: "Ultryx Corporation delivers Enterprise Channel Management (ECM) software and services to global manufacturers. UltryxChannels(TM) solutions enable manufacturers to quickly and flexibly integrate their back-office systems with channel specific business processes to increase operating margins, reduce cycle times, and improve customer service.",
//          para2: "Founded in 1984, Ultryx Corporation is privately held and is based in Columbus, Ohio. Over 300 manufacturers in 53 countries employ Ultryx software solutions in their operations. For more information, visit www.ultryx.com.",
//          para3: "UltryxChannels(TM) is a registered trademark of Ultryx Corporation.",
          para4: "Note: Ultryx was an Internet startup that is not longer in operation."
        },
        projects: {
          project1: {
            title: "eCommerce",
            description: "Worked in the product team to create web application framework including membership, preference, privilege, product catalog, dynamic content components using Java Servlet, JSP, JDBC, EJB and IBM WebSphere. MS SQL Server, Oracle and DB2 databases are supported. Application can be deployed with IIS or Apache user respective plugin."
          },
          project2: {
            title: "eCommerce Configurator",
            description: "Create configuration and management application using Java and Swing API, including JTree and JTable components with custom data models and renderers. Implement on-demand loading of XML configuration files into TreeModel to speed up application startup time and scalability. The application uses worker threads outside the event handling thread for background tasks to ensure a responsive user interface and can dynamically load classes to extend its own functionality."
          },
          project3: {
            title: "Copeland",
            description: "Created multi-threaded Java server to connect ASP web front-end running on Microsoft IIS to IBM mainframe back-end using CICS transaction gateway. The server handles inventory status, order placement and order status messages. It was tuned for performance and scalability using stress testing tool and application profiler. Thread pools and database connection pools are use to optimize performance."
          }
        },
        achievements: [
          "Lead the transition from Microsoft to Java development environment.",
          "Mentor junior developers in Java development. Perform code review, document best practices, establish coding standards."]
      },
      jobh: {
        jobtitle: "Software Developer",
        employer: "Core Solutions",
        location: {
          city: "Columbus",
          state: "Ohio"
        },
        period: {
          from: {
            date: {
              month: "2",
              year: "1997"
            }
          },
          to: {
            date: {
              month: "12",
              year: "1999"
            }
          }
        },
        projects: {
          project1: {
            title: "CertainCert",
            description: "Developed, maintained and enhanced insurance certificate tracking product base on customer request and feedback using Borland Delphi version 1 to 4.  The product works both in desktop mode using Microsoft Access and client-server mode using MS SQL Server. Created online software licensing system including verification of user credentials and online software key generation using Java Servlet and JDBC. Serve as top level of technical support. Verify software bugs by creating customer environment including importing customer data. Fix bugs in software product and create updates for affected customers."
          },
          project2: {
            title: "BMW",
            description: "Implemented asset recovery system for BMW Financial Service using Visual Basic and MS SQL Server. All data access from Visual Basic component is done by invoking stored procedures written using TSQL in SQL Server."
          }
        }
      },
      jobi: {
        jobtitle: "Software Developer",
        employer: "DM2 Solutions",
        location: {
          city: "Columbus",
          state: "Ohio"
        },
        period: {
          from: {
            date: {
              month: "8",
              year: "1995"
            }
          },
          to: {
            date: {
              month: "1",
              year: "1997"
            }
          }
        },
        projects: {
          project: {
            title: "Multimedia",
            description: "Setup and administrated Web server.  Created CGI scripts for various functions including tracking web site traffic and web interface to view and edit databases records. Created multimedia CBT using Macromedia Director and database applications using FileMaker Pro."
          }
        }
      },
      jobj: {
        jobtitle: "Software Developer Internship",
        employer: "DM2 Solutions",
        location: {
          city: "Columbus",
          state: "Ohio"
        },
        period: {
          from: {
            date: {
              month: "6",
              year: "1995"
            }
          },
          to: {
            date: {
              month: "8",
              year: "1995"
            }
          }
        },
        projects: {
          project: {
            title: "Intern",
            description: "Helped out in various software projects including custom database implementation, multimedia informational training implementation and testing."
          }
        }
      }
    },

    awards: {
//      title: 'Honors and Recognition',
      award: {
        title: "Dean's List",
        organization: 'The Ohio State University',
        period: {
          from: {
            date: {
              month: '1',
              year: '2004'
            }
          },
          to: {
            date: {
              month: '12',
              year: '2004'
            }
          }
        }
      }
    },

    academics: {
      degrees: {
        degree: {
          level: 'B.S.',
          major: 'Computer Science and Engineering',
          date: {
            month: '12',
            year: '2004'
          },
          institution: 'The Ohio State University',
          location: {
            city: 'Columbus',
            state: 'Ohio'
          },
          gpa: {
            score: '3.38',
            possible: '4.00',
            note: {
              para: 'Major GPA: 3.61 out of 4.00.'
            }
          }
        }
      }
    },

    misc: [
      'Achieve world leading level 72 in Plants vs Zombies Free Vasebreaker Endless on iPhone',
      'This resume is created and edited as a XML document. XSLT is use to\
        create HTML, plain text or PDF versions with the same content as needed.',
      'It has been converted to JSON and rendered using AngularJS into HTML.'
    ],

    lastModified: {
      date: {
        month: '11',
        year: '2015'
      }
    },

    last: 0
  };
}
