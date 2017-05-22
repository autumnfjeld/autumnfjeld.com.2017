var pug = require('pug');

var general = {
    firstName: 'Autumn',
    lastName: 'Fjeld',
    email: 'autumnfjeld@gmail.com',
    careerTitle: 'Software Engineer / Web Developer',
    resumeLink: 'img/Autumn_Fjeld_CV_20170311.pdf',
    webProfiles: {
        linkedIn: {
            url: 'https://www.linkedin.com/in/autumnfjeld',
            icon: 'fa-linkedin'
        },
        twitter: {
            url: 'https://twitter.com/autaut',
            icon: 'fa-twitter'
        },
        github: {
            url: 'https://github.com/autumnfjeld',
            icon: 'fa-github'
        },
        currentJob: {
            url: 'https://www.talentbin.com/team',
            icon: 'fa-user'
        },
        email: {
            url: 'mailto:autumnfjeld@gmail.com',
            icon: 'fa-paper-plane-o'
        }
    },
    introBlurb: 'My dream job is working at the intersection of logical software development and creative design while driving development of an intuitive user interface <i>for the user</i>. Lucky that my day job is coding for <strong> visual pleasure </strong>'
};

var nav = {

};

/**
 * Work Experience data
 * @type {[*]}
 */
var workExperience = [
    {
        order: 16,
        company: 'Freelance & Personal Projects',
        title: 'Website Master of Fun',
        location:'San Francisco,CA',
        startDate: 'Then',
        endDate: 'Always',
        items: [
            'Built this site with the help of a pre-designed the html/css template and made it my own, which has been a great learning experience in design and layout. Broke up the html into pug files, storing my content as json to compile into a nice static site stored on AWS S3.',
            'Gave AWS Microservices a spin for the contact form at the bottom of this site. Connected my email to this domain via <a href="https://aws.amazon.com/ses" target="_blank">Simple Email Service</a> and wired up a <a href="https://aws.amazon.com/lambda" target="_blank">Lambda function</a> to email the form content from my API endpoint to myself.',
            'Building another static-ish site for a Computational Materials research group at the University of California Riverside utilizing AWS tools: a multi-part site hosted on S3 with Microservices to handle dynamic content. Technical goals for this project include maximizing use of flexbox, using npm for all build steps, creating a smart scripting process to parse <a href="http://www.bibtex.org/Format" target="_blank">bibtex</a> journal listings into interactive html content.',
            'Improving my design chops.  Currently enrolled in Coursera\'s <a href="https://www.coursera.org/specializations/graphic-design" target="_blank">Graphic Design Specialization</a> created by California Institute of the Arts.'
        ]
    },
    {
        order: 15,
        company: 'Talentbin by Monster',
        title: 'Software Engineer',
        location:'San Francisco, CA',
        startDate: 'Apr 2016',
        endDate: 'Present',
        items: [
            'Full-stack software engineer, with front-end emphasis, building and maintaining enterprise recruiting web application. Tech stack: Java, PHP, Javascript (Backbone, Ractive).',
            'Architect new code patterns with modern frameworks to replace, or coexist with, legacy code.',
            'Building chrome extension app that is a mini-version of our main site which pulls data from social network sites to match profiles in our database.',
            'Helping a growing team migrate from start-up culture to a well-defined agile-scrum work process. Creating documentation, proactively recommend improvements in communication and tools (git, slack, zapier, etc.).',
            'Run team lunch \& learn sessions, motivating team to share technical learnings and challenges.',
            'Ruthless about getting team members to document their work in our git wiki!',
            'Supervised two computer science interns, guiding them through the complexities of a large codebase and teaching them in first experiences in front-end web development.'
        ]
    },
    {
        order: 14,
        company: 'Ziploop',
        title: 'Software Engineer',
        location:'Orinda, CA',
        startDate: 'Apr 2014',
        endDate: 'Apr 2016',
        items: [
            'Designed and implemented front-end components of mobile consumer app and two enterprise sites in AngularJS framework. Worked closely with President to design UI/UX.',
            'Collaborated with founding CTO to architect components, maintain build processes (grunt, gulp, git, unix scripts), choose frameworks, modules, and pushed to keep a clean, maintainable code base.',
            'Refactored many parts of chaotic, legacy codebase to maintainability and sanity (SASS, Angular best practices).',
            'Solved load time problems for large list of images, via ImageMagick script to produce consistent, optimal images and to minimizing image size via imagema optimizing quality and performance, s; continually strove for pixel perfect UI/UX.',
            'Managed collaborations between lead developer and non-technical president, supervised two junior engineers and an assistant to develop her technical graphic design skills.'
        ]
    },
    {
        order: 13,
        company: 'Hack Reactor',
        title: 'Student',
        location:'San Francisco',
        startDate: 'Jan 2016',
        endDate: 'Apr 2016',
        items: [
            'Part of a team contracted to develop protype for commercial app. Designed back-end schema in Firebase, chosen for Simplelogin authentication, direct database reference binding.',
            'Built app in AngularJS architecture, ported to mobile with Cordova and styled with Ionic.  Enforced strict modularity in AngularJS controllers and services to create efficient team workflow.',
            'Built a d3.js interactive force directed graph as an AngularJS directive, allowing users to click on a url-node to create an expansive node map of Wikipedia articles. <a href="http://wikiviz.herokuapp.com" target="_blank">Wikiviz</a>'
            // '#[a(href="http://wikiviz.herokuapp.com") Wikiviz]    #{#[a link](http://example.com)}}',
        ]
    },
    {
        order: 12,
        company: 'NUMECA International',
        title: 'Engineer Consultant',
        location:'San Francisco',
        startDate: 'Nov 2010',
        endDate: 'Apr 2012',
        items: [
                "Provided consulting support to engineers at Boeing, Honeywell, etc. on using NUMECA’s computational fluid dynamics software tools, delivering solutions in meshing, solver setup, and post-processing.",
            'Improved fluid dynamics and meshing software as an integral part of the feedback loop for identifying and troubleshooting software bugs, user-friendliness, and scientific accuracy issues.',
            "Created and delivered technical training webinars twice a month to NUMECA’s user base."
        ]
    },
    {
        order: 11,
        company: 'Freelance Editor for Scientific Manuscripts',
        title: 'English Editor ',
        location:'Global',
        startDate: '2010',
        endDate: '2014',
        items: [
            'Edited scientific manuscripts for non-native English speakers leading to publication in high profile scientific journals, including work for American Journal Experts, a global editing service for scientists.',
            'Built Joomla site (in my pre-web dev days) to advertise my services. Brought in business by advertising on Austrian websites.'
        ]
    },
    {
        order: 10,
        company: 'University Of Leoben, Austria',
        title: 'Post Doctoral Researcher',
        location:'Leoben, Austria',
        startDate: 'Jun 2006',
        endDate: 'Nov 2010',
        items: [
            'Created a computational model of a large casting process to simulate flow and heat transfer phenomena for an Austrian steel making company.',
            'Expanded functionality of commercial simulation software with user defined functions in C and data processing scripts in scheme. Used Matlab extensively for data analysis. Tested feasibility of open source simulation framework, OpenFOAM.',
            'Defined experimental investigations for industry partner to get input and validation data for simulations.'
        ]
    }
    // {
    //     order: 0,
    //     company: '',
    //     title: '',
    //     location:'',
    //     startDate: '',
    //     endDate: '',
    //     items: [
    //         '',
    //         ''
    //     ]
    // }
];

/**
 * Skill set data
 * @type {*[]}
 */
var skills = [
    {
        title: 'Languages',
        skills: [
            {
                id: 1,
                skill: 'HTML5 / CSS3',
                completed: '80%'
            },
            {
                id: 2,
                skill: 'Javascript',
                completed: '80%'
            },
            {
                id: 3,
                skill: 'PHP',
                completed: '40%'
            },
            {
                id: 4,
                skill: 'Java',
                completed: '30%'
            }
        ]
    },
    {
        title: 'Libraries/Frameworks',
        skills: [
            {
                id: 1,
                skill: 'Angular',
                completed: '80%'
            },
            {
                id: 2,
                skill: 'Backbone',
                completed: '70%'
            },
            {
                id: 3,
                skill: 'Jasmine/Mocha',
                completed: '50%'
            },
            {
                id: 4,
                skill: 'jQuery',
                completed: '80%'
            }
        ]
    },
    {
        title: 'Database/Backend',
        skills: [
            {
                id: 1,
                skill: 'Mongo',
                completed: '60%'
            },
            {
                id: 2,
                skill: 'MySQL',
                completed: '50%'
            },
            {
                id: 3,
                skill: 'Node.js',
                completed: '55%'
            },
            // {
            //     id: 4,
            //     skill: 'Java',
            //     completed: '30%'
            // }
        ]
    },
    {
        title: 'Software Tools',
        skills: [
            {
                id: 1,
                skill: 'Sketch',
                completed: '40%',
                toolTip: 'Using sketch regularly and it is becoming my go-to design tool'
            },
            {
                id: 2,
                skill: 'Adobe Illustrator',
                completed: '60%'
            },
            {
                id: 3,
                skill: 'Photoshop',
                completed: '30%'
            },
            // {
            //     id: 4,
            //     skill: 'Java',
            //     completed: '30%'
            // }
        ]
    },
    {
        title: 'Professional Skills',
        skills: [
            {
                id: 1,
                skill: 'Communication',
                completed: '95%',
                toolTip: 'I strive to keep coworkers informed and clearly communicate ideas and documentation'
            },
            {
                id: 2,
                skill: 'Team Player',
                completed: '90%'
            },
            {
                id: 3,
                skill: 'Confidence',
                completed: '90%'
            },
            {
                id: 4,
                skill: 'Determination',
                completed: '99%'
            }
        ]
    },
];

/**
 * Fun Facts Data
 * @type {[*]}
 */
var funFacts = [
    {
     title: 'Traveling',
     blurb:  'Traveling and checking out the world is a must! Recent trips include Cuba, Mexico, Republic of Georgia, Spain, Portugal, Colombia.'
    },
    {
        title: 'Austria',
        blurb: 'I was a researcher at university in Austria for four years, in my computational fluid dynamics phase of life.  While there I was determined to become fluent in German and started weekly German-learning conversational group for foreigners in Leoben, Austria. I still work to improve my German skills via social groups and classes at a local community college.'
    },
    {
        title: 'Creativity',
        blurb: 'Occasional sewer and creator of colorful clothes, jewelery, bags. I thrive on color. The combination of tech and creativity is why I love web development and design.'
    },
    {
        title: 'Volunteering',
        blurb: "I'm currently a math tutor volunteer in a San Francisco middle-school, helping kids who are struggling with math meet state education requirements.  I've been a volunteer in many different roles over the years.  Past volunteer experiences: tutor for Women Who Code, high school prep classes for underprivileged kids."
    },    {
        title: 'Reading',
        blurb: 'I have at times been a voracious reader (my mother made me read 100 books in first grade!).  Now I generally divide my reading time between novels, skill improvement books, and <i>The New Yorker</i>.  Some of my favorite recent reads: <i>The Short and Tragic LIfe of Robert Peace</i>, <i>Creativity, Inc.</i>, <i>Beautiful Ruins</i>, <i>Where\'d You Go Bernadette</i>.'

    }
// {
    //     title: '',
    //     blurb: ''
    // },
    // {
    //     title: '',
    //     blurb: ''
    // },
    // {
    //     title: '',
    //     blurb: ''
    // }
];

/**
 * Portfolio data
 * @type {{title1: string, title2: string, img: {primary: string, thumb: string, title: string}}}
 */
var portfolio = {
    title1: 'This is title1',
    title2: 'title2',
    img: {
        primary: 'img/portfolio-item-zoom.jpg',
        thumb:'img/portfolio-item-thumb.jpg',
        title: 'Image title'
    }
};



exports.app = {
    general: general,
    workExperience: workExperience,
    skills: skills,
    funFacts: funFacts,
    portfolio: portfolio
};