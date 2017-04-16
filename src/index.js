
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

var workExperience = [
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
            'Building features for a chrome extension app: a mini-version of our main site that pulls data from social network sites to match profiles in our db.',
            'Helping a growing team migrate from start-up culture to a well-defined agile-scrum work process. Creating documentation, proactively recommend improvements in communication and tools (git, slack, zapier, etc.).',
            'Run team lunch \& learn sessions, motivating team to share technical learnings and challenges.',
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
            'Solved load time problems for large list of images, optimizing quality and performance; continually strove for pixel perfect UI/UX.',
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
            'Built a d3.js interactive force directed graph as an AngularJS directive, allowing users to click on a url-node to create an expansive node map of Wikipedia articles.  http://wikiviz.herokuapp.com',
            // 'Built a d3.js interactive force directed graph as an AngularJS directive, allowing users to click on a url-node to create an expansive node map of Wikipedia articles.<a href="http://wikiviz.herokuapp.com">Wikiviz</a>    #[a(href="http://wikiviz.herokuapp.com") Wikiviz]    #{#[a link](http://example.com)}}',
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
    portfolio: portfolio
};