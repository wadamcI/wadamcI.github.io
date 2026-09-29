// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Journal articles, conference papers and posters, newest first. My name is in bold.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Rocketry flight software and power-systems research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Code for my research and rocketry projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Supplemental Instruction (SI) leadership at the University of Michigan–Dearborn.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-presented-my-sure-poster-a-comprehensive-python-package-for-forecasting-power-outages-at-the-university-of-michigan-dearborn",
          title: 'Presented my SURE poster, A Comprehensive Python Package for Forecasting Power Outages, at...',
          description: "",
          section: "News",},{id: "news-masa-dearborn-flew-vulcan-at-irec-2025-with-the-team-s-first-flown-airbrake-system",
          title: 'MASA-Dearborn flew Vulcan at IREC 2025, with the team’s first flown airbrake system....',
          description: "",
          section: "News",},{id: "news-started-as-a-controls-amp-amp-energy-systems-engineer-at-gc-and-mobility-working-on-energy-management-for-battery-storage-ev-charging-and-solar",
          title: 'Started as a Controls &amp;amp;amp; Energy Systems Engineer at GC and Mobility, working...',
          description: "",
          section: "News",},{id: "news-back-from-irec-2026-in-texas-the-hades-flight-has-been-rescheduled-to-october-2026",
          title: 'Back from IREC 2026 in Texas. The HADES flight has been rescheduled to...',
          description: "",
          section: "News",},{id: "news-our-review-grid-integration-of-ai-data-centers-a-critical-review-of-energy-storage-solutions-is-out-in-advances-in-applied-energy",
          title: 'Our review, Grid integration of AI data centers: A critical review of energy...',
          description: "",
          section: "News",},{id: "news-our-paper-on-a-stackelberg-bayesian-capacity-market-game-for-carbon-regulation-and-second-life-batteries-under-ai-data-center-load-growth-was-accepted-to-naps-2026",
          title: 'Our paper on a Stackelberg–Bayesian capacity-market game for carbon regulation and second-life batteries...',
          description: "",
          section: "News",},{id: "projects-project-vulcan-airbrakes-controls",
          title: 'Project Vulcan — Airbrakes Controls',
          description: "MASA-Dearborn&#39;s first flown airbrake system at IREC 2025, from simulation and CFD to flight software.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-hades-closed-loop-airbrakes",
          title: 'Project HADES — Closed-Loop Airbrakes',
          description: "Apogee-targeting airbrakes on a Teensy 4.1, with Kalman/Madgwick estimation, CFD-based guidance and hardware-in-the-loop simulation. Flight scheduled for October 2026.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_hades/";
            },},{id: "projects-transformer-guided-symbolic-regression-for-real-time-phasor-estimation",
          title: 'Transformer-Guided Symbolic Regression for Real-Time Phasor Estimation',
          description: "In progress: a small transformer proposes the waveform model, and a physics-constrained fit estimates the phasor. For fault-distorted currents in protective relaying.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_phasor/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%61%64%61%6D%63@%75%6D%69%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wadamcI", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/marcus-wada-26b67a391", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
