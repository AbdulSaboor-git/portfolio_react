'use client';
import React, { useState } from 'react';
import Header from '@/components/header';
import Main from '@/components/Main';
import Qualification from '@/components/qualification';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact,';
import Footer from '@/components/footer';

import { MdLocationPin, MdMap } from 'react-icons/md';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiCplusplus,
  SiGmail,
  SiHtml5,
  SiJavascript,
  SiMapbox,
  SiMysql,
  SiPostgresql,
  SiVisualstudio,
  SiVisualstudiocode,
} from 'react-icons/si';
import {
  RiJavaFill,
  RiMap2Fill,
  RiMapFill,
  RiNextjsLine,
  RiReactjsLine,
} from 'react-icons/ri';
import { BsDatabase, BsGit, BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Home() {
  const [navBtns, setNavBtns] = useState([
    { name: 'Home', isActive: true },
    { name: 'Qualification', isActive: false },
    { name: 'Skills', isActive: false },
    { name: 'Projects', isActive: false },
    { name: 'Contact', isActive: false },
  ]);

  const user = {
    firstName: 'Abdul',
    lastName: 'Saboor',
    img: 'pp.png',
    profession: 'Software Developer',
    aboutMe:
      'I am a dedicated developer with a strong passion for creating innovative and user-friendly experiences. Committed to continuous learning and professional growth, I eagerly embrace new challenges and contribute my skills to impactful projects. Staying current with the latest advancements in technology is my top priority, ensuring I integrate cutting-edge solutions into my work.',
  };

  const education = [
    {
      degree: 'BS (Hons.) Computer Science',
      institute: 'Government College University Lahore',
      from: '2022',
      to: '2024',
      gpa: '',
    },
    {
      degree: 'Intermediate',
      institute: 'Islamia College Civil Lines Lahore',
      from: '2019',
      to: '2021',
      gpa: '',
    },
  ];

  const experience = [
    {
      type: 'Mobile App Development',
      company: 'free Lancing',
      from: '2024',
      to: 'present',
    },
    {
      type: 'Web Development',
      company: 'free Lancing',
      from: '2023',
      to: 'present',
    },
  ];
  const skills = [
    {
      type: 'Programming Languages',
      content: [
        {
          name: 'C++',
          icon: <SiCplusplus color="#47abee" />,
        },
        {
          name: 'Java',
          icon: <RiJavaFill color="#eecd47" />,
        },
        {
          name: 'HTML/CSS',
          icon: <SiHtml5 color="#e34f26" />,
        },
        {
          name: 'JavaScript',
          icon: <SiJavascript color="#f0db4f" />,
        },
      ],
    },
    {
      type: 'Frameworks and Libraries',
      content: [
        {
          name: 'React',
          icon: <FaReact color="#47abee" />,
        },
        {
          name: 'React Native',
          icon: <RiReactjsLine color="#47abee" />,
        },
        {
          name: 'Node Js',
          icon: <FaNodeJs color="#70cd56" />,
        },
        {
          name: 'Next Js',
          icon: <RiNextjsLine color="#fff" />,
        },
      ],
    },
    {
      type: 'Databases',
      content: [
        {
          name: 'MsSQL',
          icon: <BsDatabase color="#eed46c" />,
        },
        {
          name: 'MySQL',
          icon: <SiMysql color="#47abee" />,
        },
        {
          name: 'PostgreSQL',
          icon: <SiPostgresql color="#3196d9" />,
        },
      ],
    },
    {
      type: 'Tools',
      content: [
        {
          name: 'Git',
          icon: <BsGit color="#78e649" />,
        },
        {
          name: 'GitHub',
          icon: <BsGithub color="#fff" />,
        },
        {
          name: 'Visual Studio',
          icon: <SiVisualstudio color="#9e73d5" />,
        },
        {
          name: 'Visual Studio Code',
          icon: <SiVisualstudiocode color="#3196d9" />,
        },
      ],
    },
  ];

  const projects = [
    {
      name: 'Invenzo',
      shortDesc:
        'Invenzo is an inventory management responsive website built using React JS. It uses',
      extendedDesc:
        'PostgreSQL database to store inventory data for each user. A user can sign in and create multiple inventories as well as add other users to their inventory as moderators. To test this website use Email ID: test@inveno.com with Password: test12345.',
      details: '',
      pic: 'invenzo.png',
      sourceCode: 'https://github.com/AbdulSaboor-git/Invenzo',
      preview: 'https://invenzo.vercel.app',
    },
    {
      name: 'Inventory Management',
      shortDesc:
        'An Inventory Management responsive website built using HTML, CSS and JavaScript. It uses',
      extendedDesc:
        'local storage along with the option to manage data using CSV files. Basic functionality includes addition, editing, and deletion of categories and products along with sorting and filtering of items.',
      details: '',
      pic: 'sgs-inv.jpg',
      sourceCode: 'https://github.com/AbdulSaboor-git/SGS-Inventory-Management',
      preview: 'https://abdulsaboor-git.github.io/SGS-Inventory-Management/',
    },
    {
      name: 'Calculator',
      shortDesc:
        'A Calculator built using .NET Technology with C# language. UI is generated through WinForms. It has',
      extendedDesc:
        'basic calculator functions along with conversions between Decimal, Binary, Hexadecimal, and Octal.',
      details: '',
      pic: 'calculator.jpg',
      sourceCode: 'https://github.com/AbdulSaboor-git/Calculator',
      preview: '',
    },
    {
      name: 'Console-Based Snake Game',
      shortDesc:
        'A console-based Snake Game with a complete game menu and proper gameplay. Built by',
      extendedDesc:
        'creating console UI using C++ language. Game features also include a Snake Speed Controller.',
      details: '',
      pic: 'snake-game.png',
      sourceCode: 'https://github.com/AbdulSaboor-git/Snake-Game',
      preview: '',
    },
    {
      name: 'Portfolio',
      shortDesc: 'A responsive Portfolio website made using React.',
      extendedDesc: '',
      details: '',
      pic: 'portfolio.jpg',
      sourceCode: 'https://github.com/AbdulSaboor-git/Portfolio',
      preview: '',
    },
    {
      name: 'Console-Based Banking App',
      shortDesc:
        'A console-based Banking App utilizing Object-Oriented Programming concepts in Java. Features include',
      extendedDesc:
        'runtime creation of user accounts, offering both savings and checking account options. Users can transfer funds to other users and must log in using a password, which can be changed in the account settings.',
      details: '',
      pic: 'bankingApp.png',
      sourceCode: 'https://github.com/AbdulSaboor-git/Banking-App',
      preview: '',
    },
  ];

  const contacts = [
    {
      type: 'linkedIn',
      link: 'http://linkedin.com/in/abdulsaboor-in',
      icon: <BsLinkedin color="#22a0d6" />,
    },
    {
      type: 'Email',
      link: 'mailto:abdulsaboor.contact@gmail.com?subject=Feedback%20on%20Your%20Portfolio&body=Hi%21%20I%20saw%20your%20portfolio%20and%20I%27d%20love%20to%20give%20you%20some%20feedback.%20Are%20you%20open%20to%20a%20quick%20chat%3F',
      icon: <SiGmail color="#ff9500" />,
    },
    {
      type: 'Lahore, Pakistan',
      link: '',
      icon: <MdLocationPin color="#7cdf63" />,
    },
  ];

  const footerLinks = [
    {
      type: 'LinkedIn',
      link: 'http://linkedin.com/in/abdulsaboor-in',
      icon: <BsLinkedin color="#22a0d6" />,
    },
    {
      type: 'Github',
      link: '',
      icon: <BsGithub color="#fff" />,
    },
  ];

  const handleButtonClick = (index) => {
    setNavBtns((prevNavBtns) =>
      prevNavBtns.map((btn, i) =>
        i === index ? { ...btn, isActive: true } : { ...btn, isActive: false },
      ),
    );
  };

  return (
    <main className="flex flex-col items-center justify-between bg-[#000013] text-[#f9f9f9]">
      <div className="max-w-[1440px] w-full">
        <Header navBtns={navBtns} handleButtonClick={handleButtonClick} />
        <Main user={user} />
        <Qualification education={education} experience={experience} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Contact contacts={contacts} />
        <Footer footerLinks={footerLinks} user={user} />
      </div>
    </main>
  );
}
