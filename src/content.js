export const home1 = {
    name: 'TRISHABH VATS',
    tag: 'Product Designer at Avairsense.',
    quote: 'Where design meets functionality and user experience takes center stage.',
    location: 'Bangalore, India.',
}

export const home5 = [
    {
        id:'1',
        icon: 'home1.svg',
        heading: 'About',
        desc: 'Designing products that seamlessly blend form and function to enhance the user experience.',
        color: 'bg-teal-900',
        route: '/about',
    },
    {
        id:'2',
        icon: 'home2.svg',
        heading: 'Works',
        desc: 'Introducing innovative designs that elevate user experience and solve real-world problems.',
        color: 'bg-yellow-600',
        route: '/works',
    },
    {
        id:'3',
        icon: 'home3.svg',
        heading: 'A Formal Paper',
        desc: 'Click to download my Resume!',
        color: 'bg-orange-600',
        route: 'TrishabhVatsResume.pdf',
    },
    {
        id:'4',
        icon: 'home4.svg',
        heading: 'Know more about me',
        desc: 'Get ready to dive into the mind of a designer, where creativity and problem-solving collide!',
        color: 'bg-blue-600',
        route: '/know',
    },
    {
        id:'5',
        icon: 'home5.svg',
        heading: 'Contact',
        desc: "Don't be a stranger.",
        color: 'bg-yellow-900',
        route: '/contact',
    },
    
]

export const aboutfronttext = { desc: '“DESIGN IS NOT JUST WHAT IT LOOKS LIKE AND FEELS LIKE. DESIGN IS HOW IT WORKS.” — STEVE JOBS' }

export const about1 = {
    main_heading:"I'M PRACTICALLY A FOSSIL IN THIS FIELD WITH MY WHOPPING TWO YEARS OF EXPERIENCE.",
}

export const about = [
    {
        id:'0',
        heading:"How it Started?",
        desc:"I Initially enrolled in college to pursue Mobile Application Development. but halfway through my senior year, I discovered that coding was not my passion. However, I remained determined to create digital products, and that's when I stumbled upon UX/UI design. Science then, I have been entirely self-taught and have gained 2 years of experience in this field.",
        hidden:'',//write hidden if image is hidden
        image:'about1.svg', //leave blank if image is hidden or put link or local file name with extension
    },
    {
        id:'1',
        heading:"How it’s going?",
        desc:"I have gained practical experience through a few internships, including a UX Designer Internship at SAASPECT from July 2021 and a Product Designer Internship at Business Innovation Labs from October 2021. I am currently employed as a full-time Product Designer at AvairSense, where I am applying and expanding my skills.",
        hidden:'hidden',//write hidden if image is hidden
        image:'', //leave blank if image is hidden or put link or local file name with extension
    },
    {
        id:'2',
        heading:'Education',
        desc:"I completed my Bachelor’s in Computer Applications with Mobile Application Development from Jain University, Bangalore in 2022. These 3 years changed my life and helped me where I am at the moment. Am I happy? I don’t know, but I have no regrets.   ",
        hidden:'hidden',//write hidden if image is hidden
        image:'', //leave blank if image is hidden
    },
    {
        id:'3',
        heading:'So... What else?',
        desc:`I have an accomplished research background, with attendance and paper publications in 2 national and 1 international research conferences. Additionally, I hold the position of Vice President of the Uttunga Student Research Forum. Beyond academics, I have authored a short novel, "Seven Months of Love," which is available on Amazon Kindle. I am also a content creator, with a Podcast and YouTube channel called "Let's Talk Tomorrow.`,
        hidden:'',//write hidden if image is hidden
        image:'about2.svg',//leave blank if image is hidden
    },
]


export const worklogo = [
    {
        id: '1',
        logo: 'tool1.svg',
        logoname: 'Figma',
    },
    {
        id: '2',
        logo: 'tool2.svg',
        logoname: 'XD',
    },
    {
        id: '3',
        logo: 'tool3.svg',
        logoname: 'Invision Studio',
    },
    {
        id: '4',
        logo: 'tool4.svg',
        logoname: 'Premier Pro',
    },
    {
        id: '5',
        logo: 'tool5.svg',
        logoname: 'After Effects',
    },
    {
        id: '6',
        logo: 'tool6.svg',
        logoname: 'WordPress',
    }

]

export const works = [
    {
        id:'3',
        worklogo: 'eye.svg',
        workname: 'Digital Identity',
        workhead: "AVAIRSENSE'S WEBSITE, APP, AND BRANDING.",
        authorlogo: 'clients.svg',
        author: 'With Pandiraja T & Tamanna Sethia',
        desc: "Being the sole designer for an early stage startup has been a challenging but highly rewarding experience that has provided me with an excellent foundation for my career growth. I had the opportunity to design the brand's Style Guidelines, as well as the UI components and UI kit for both the website and app. It allowed me to exercise my design skills in a dynamic and creative environment, where I had the freedom to take risks and explore innovative solutions. Overall, this experience has helped me develop a strong design sense.",
        image: 'work1.svg',
        rolelogo: 'role.svg',
        role: 'My Role:',
        roledesc: 'Product Designer',
        projectlogo: 'project.svg',
        project: 'Project Type:',
        projectdesc: 'Website, App, Social Media and Content Creation',
        button1name:'Visit Website',
        button1link: 'https://www.avairsense.com/',
        button2Visible:'', //write hidden if you want it hidden, else leave it blank
        button2name: 'App Under Dev',
        button2link: '', //no need to write here hidden or give the link if its visible

    },
    {
        id:'2',
        worklogo: 'eye.svg',
        workname: 'Website Redesign',
        workhead: "THE MUCH NEEDED REVAMP OF EPFO Website",
        authorlogo: 'clients.svg',
        author: 'Personal',
        desc: "The current website design appears outdated and lacks modern design elements. he website's navigation structure can be confusing and unintuitive. The website's responsiveness on different devices may not be optimal. he website may lack some useful features that could enhance the user experience, such as online forms, live chat support, and personalized dashboards.",
        image: 'work2.svg',
        rolelogo: 'role.svg',
        role: 'My Role:',
        roledesc: 'UX and UI Redesign',
        projectlogo: 'project.svg',
        project: 'Project Type:',
        projectdesc: 'Website',
        button1name:'Coming Soon',
        button1link: '',
        button2Visible:'hidden', //write hidden if you want it hidden, else leave it blank
        button2name: 'App Under Dev',
        button2link: '', //no need to write here hidden or give the link if its visible

    },
    {
        id:'1',
        worklogo: 'eye.svg',
        workname: 'Everything Else',
        workhead: "CAPSTONES AND PERSONAL PROJECT",
        authorlogo: 'clients.svg',
        author: 'Personal project',
        desc: "You can find the rest of my design portfolio here, which includes a range of personal projects, experimental designs, and capstone assignments from various courses I completed from 2019 to 2022. These works showcase my growth as a designer and highlight the diversity of my design capabilities. I am proud of my accomplishments, and I am excited to continue honing my skills and producing innovative designs in the future.",
        image: 'work3.svg',
        rolelogo: 'role.svg',
        role: 'My Role:',
        roledesc: 'Multiple',
        projectlogo: 'project.svg',
        project: 'Project Type:',
        projectdesc: 'Multiple',
        button1name:'Behance',
        button1link: 'https://www.behance.net/trishabhvats',
        button2Visible:'hidden', //write hidden if you want it hidden, else leave it blank
        button2name: 'App Under Dev',
        button2link: '', //no need to write here hidden or give the link if its visible
        

    },
]


export const knowmore = [
    {   
        id:'1',
        topquote: "BECAUSE GETTING TO KNOW ME BETTER IS EXACTLY HOW YOU WANT TO SPEND YOUR TIME, RIGHT?",
        logo:'netflix.svg',
        topic:"OTT Platforms",
        what:"WHAT I'M STREAMING",
        topic1:"Formula 1",
        topic1desc:"Pinnacle of motor sport at its finest. Following the thrilling rollercoaster ride of 2021 and the commanding performance of Max and Red Bull in 2022, the anticipation for the upcoming 2023 season is simply off the charts!",
        topic2:"Indian national Cricket",
        topic2desc:"As a state-level cricketer hailing from India, how could I possibly resist the charm of this wonderful sport? And of course, when it comes to cricket, nothing beats the thrill and excitement of Test cricket - it's simply the best!",
        topic3:"The Test",
        topic3desc:"The series chronicles the journey of the Australian cricket team in the wake of the infamous ball-tampering scandal in South Africa in 2018. Provides an intimate and behind-the-scenes look at the team's efforts to rebuild their reputation and regain the trust of their fans.",
        topic4:"F.R.I.E.N.D.S",
        topic4desc:"Timeless appeal that transcends generations. The show is filled with relatable characters (Chandler Bing!, witty humor, and heartwarming moments that make it a joy to watch.",
    },
    {   
        id:'2',
        topquote: "BECAUSE GETTING TO KNOW ME BETTER IS EXACTLY HOW YOU WANT TO SPEND YOUR TIME, RIGHT?",
        logo:'spotify.svg',
        topic:"Spotify",
        what:"WHAT I'M HEARING",
        topic1:"The Coke Studio",
        topic1desc:"Coke Studio is known for blending traditional and contemporary music from different regions and cultures. The result is a unique fusion of musical styles that is both fresh and innovative.",
        topic2:"Nescafe Basements",
        topic2desc:"Same as the previous one.",
        topic3:"Qawwali",
        topic3desc:"Qawwali is known for its passionate and emotive performances. Qawwals often use their voice to express a range of emotions, such as love, longing, and devotion. This emotional resonance is what draws people to Qawwali.",
        topic4:"90s Bollywood",
        topic4desc:"Do I really need to explain ths?",
    }
]

export const contact = [
    { 
        id:'1',
        social:'Email',
        desc:'monuroy021@gmail.com. Please approach me if you need any help, suggestions, or just wanna grab a coffee.',
        linkifany:'mailto:monuroy021@gmail.com',
    },
    { 
        id:'2',
        social:'Behance',
        desc:'My Case Studies, Works and Moodboards. https://www.behance.net/trishabhvats ',
        linkifany:'https://www.behance.net/trishabhvats',
    },
    { 
        id:'3',
        social:'LinkedIn',
        desc:'My formal self and more. https://www.linkedin.com/in/trishabh-vats/',
        linkifany:'https://www.linkedin.com/in/trishabh-vats/',
    }
]
