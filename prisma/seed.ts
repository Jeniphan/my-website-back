import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
async function main() {
  const pass: string = 'Jeni78547854';
  const saltOrRounds: string = await bcrypt.genSaltSync();
  const hash = await bcrypt.hashSync(pass, saltOrRounds);
  const Id = '532b13b5-3ebb-465d-a29a-2d9036fd2fab';
  const akiira = await prisma.users.upsert({
    where: {
      username: 'akiira',
    },
    update: {},
    create: {
      id: Id,
      name: 'SA Admin',
      username: 'akiira',
      password: hash,
      salt: 'akiira',
      email: 'SA@akiira.com',
      phoneNumber: '0809153786',
      role: 'admin',
    },
  });

  const contacts = await prisma.contents.upsert({
    where: {
      id: 'akiira',
    },
    update: {},
    create: {
      id: uuidv4(),
      title: `Hi' I am`,
      name: 'Jaay Jetniphan',
      skips: `Web Developer with hands-on experience in JavaScript, TypeScript, html, CSS, Angular Framework, NextJS. And also experience in Back-End Developer such as Nodejs, Express, NestJS Framework, GCP, and others.`,
      content: 'Web Developer',
      profilePic: '',
      authorId: Id,
      createAt: new Date(),
      updateAt: new Date(),
      isActive: true,
    },
  });

  const personal = await prisma.personals.upsert({
    where: {
      id: 'Jetniphan Pukkham',
    },
    update: {},
    create: {
      id: uuidv4(),
      title: 'Jetniphan Pukkham',
      skips: `Hello. My name is Jetniphan Pukkham, everyone called me Jay. Bachelor of Enginering in Electronic and Telecommunication Engineering at King Mongkut's University of Technology Thonburi. I'm interested about Web Development.`,
      content: '',
      resume: '',
      personalPic: '',
      authorId: Id,
      createAt: new Date(),
      updateAt: new Date(),
    },
  });

  const education = await prisma.educations.createMany({
    data: [
      {
        id: uuidv4(),
        start: '2013',
        end: '2015',
        name: 'Soemngam Witthayakhom School.',
        marjor: 'Junior high school.',
        link: 'http://swt.ac.th/',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 0,
      },
      {
        id: uuidv4(),
        start: '2015',
        end: '2018',
        name: 'Soemngam Witthayakhom School.',
        marjor: 'Sciences and Mathematics Program.',
        link: 'http://swt.ac.th/',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 1,
      },
      {
        id: uuidv4(),
        start: 'Aprill, 2018',
        end: 'Aprill, 2022',
        name: `King Mongkut's University of Technology Thonburi.`,
        marjor: 'Electronic and Telecommunication Dept.',
        link: 'https://www.kmutt.ac.th/',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 2,
      },
    ],
  });

  const work = await prisma.works.createMany({
    data: [
      {
        id: uuidv4(),
        start: 'Jun 1st, 2021',
        end: 'Nov 30th, 2021',
        name: `TOYOTA TSUSHO DENSO ELECTRONIC(THAILAND)Co.,Ltd.`,
        marjor: 'Software Engineer Intern.',
        link: 'https://www.denso.com/th/th/about-us/company-information/tdet/',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 0,
      },
      {
        id: uuidv4(),
        start: 'May 30th, 2022',
        end: 'Sep 5th, 2022',
        name: `KARNKANOK PROPERTY COMPANY Limited.`,
        marjor: 'Front End Developer.',
        link: 'https://www.kkn.co.th/',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 1,
      },
      {
        id: uuidv4(),
        start: 'Sep 6th, 2022',
        end: 'Present',
        name: `Logicton Co.,Ltd.`,
        marjor: 'Full Stack Developer.',
        link: 'https://logicton.com/',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 2,
      },
    ],
  });

  const skills_front = await prisma.skills_front.createMany({
    data: [
      {
        id: uuidv4(),
        title: 'JavaScript',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 0,
      },
      {
        id: uuidv4(),
        title: 'TypeScript',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 1,
      },
      {
        id: uuidv4(),
        title: 'html',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 2,
      },
      {
        id: uuidv4(),
        title: 'CSS, SCSS',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 3,
      },
      {
        id: uuidv4(),
        title: 'Bootstrap, Tailwind',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 4,
      },
      {
        id: uuidv4(),
        title: 'Angular Framework',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 5,
      },
      {
        id: uuidv4(),
        title: 'NextJS Framework',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 6,
      },
      {
        id: uuidv4(),
        title: 'VueJS Framework',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 7,
      },
    ],
  });

  const skills_back = await prisma.skills_back.createMany({
    data: [
      {
        id: uuidv4(),
        title: 'NodeJS',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 0,
      },
      {
        id: uuidv4(),
        title: 'TypeScript',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 1,
      },
      {
        id: uuidv4(),
        title: 'Express',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 2,
      },
      {
        id: uuidv4(),
        title: 'NestJS Framework',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 3,
      },
      {
        id: uuidv4(),
        title: 'MySQL, SQL',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 4,
      },
      {
        id: uuidv4(),
        title: 'GCP, Nginx, Linux Server',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 5,
      },
      {
        id: uuidv4(),
        title: 'Firebase',
        discription: 'Basic',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 6,
      },
      {
        id: uuidv4(),
        title: 'Dotnet core, Dotnet Framework, C#',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 7,
      },
    ],
  });

  const skills = await prisma.skills_soft.createMany({
    data: [
      {
        id: uuidv4(),
        title: 'Arduino',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 0,
      },
      {
        id: uuidv4(),
        title: 'Raspberry pi',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 1,
      },
      {
        id: uuidv4(),
        title: 'ESP32 & CatLoRa',
        discription: 'Intermediate',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 2,
      },
      {
        id: uuidv4(),
        title: 'MIPs Assembly',
        discription: 'Basic',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 3,
      },
      {
        id: uuidv4(),
        title: 'C++',
        discription: 'Basic',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 4,
      },
      {
        id: uuidv4(),
        title: 'Python',
        discription: 'Basic',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
        order: 5,
      },
    ],
  });

  const project = await prisma.projects.createMany({
    data: [
      {
        id: uuidv4(),
        title: 'Project management system',
        date: `Nov, 2021s`,
        discription: `Design and create an software project management system. Design UX/UI from AdobeXD and Coding from Angular Framework and NestJS Framework in BackEnd.`,
        link: 'https://pms.akiira.site/',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        title: 'Monitoring Parameters of Three-Phase Induction Motor Using IoT',
        date: 'October, 2020s',
        discription: `Project Advisor to Monitoring Parameter of Three-Phase Induction Motor Using IOT.`,
        link: 'https://ieeexplore.ieee.org/document/9440368',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        title: 'Hotel management system',
        date: 'Mar, 2020s',
        discription: `Design and create an software hotel management system. Design UX/UI from AdobeXD and Coding from Angular Framework and NodeJS Express in BackEnd.`,
        link: 'https://github.com/Jeniphan/Hotel-management-system-project',
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        title: 'Robo Innovator Challenge 2020',
        date: 'September, 2020s',
        discription: `Member of Raidee team to design and create AI car that can self- driving and logistics for join competition by using ESP32 and NVIDIA Jetson Nano.`,
        link: null,
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        title: 'Intelligent Parking Project.',
        date: 'April, 2019s',
        discription: `Member of Raidee team to design and create AI car that can self- driving and logistics for join competition by using ESP32 and NVIDIA Jetson Nano.`,
        link: null,
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        title: '2B-KMUTT #14',
        date: 'April, 2017s',
        discription: `Design and create an Controlling the water system using for Crayfish shrimp farming IOT project by using Arduino and ESP8266.`,
        link: null,
        authorId: Id,
        createAt: new Date(),
        updateAt: new Date(),
      },
    ],
  });

  const id_platform1 = uuidv4();
  const id_platform2 = uuidv4();
  const id_platform3 = uuidv4();
  const id_platform4 = uuidv4();
  const id_platform5 = uuidv4();
  const id_platform6 = uuidv4();

  const platformTypes = prisma.platFormTypes.createMany({
    data: [
      {
        id: id_platform1,
        platFormName: 'Facebook',
        platFormSlug: 'facebook',
      },
      {
        id: id_platform2,
        platFormName: 'LinkIn',
        platFormSlug: 'linkin',
      },
      {
        id: id_platform3,
        platFormName: 'Email',
        platFormSlug: 'email',
      },
      {
        id: id_platform4,
        platFormName: 'Instagram',
        platFormSlug: 'instagram',
      },
      {
        id: id_platform5,
        platFormName: 'Phone',
        platFormSlug: 'phone',
      },
      {
        id: id_platform6,
        platFormName: 'Git Hub',
        platFormSlug: 'github',
      },
    ],
  });

  const Contacts = prisma.contacts.createMany({
    data: [
      {
        id: uuidv4(),
        platFormName: 'Jeniphan Pukkham',
        platFormId: id_platform1,
        authorId: Id,
        platFormLink: 'https://www.m.me/jeniphan.pukkham',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        platFormName: 'Jetniphan Pukkham',
        platFormId: id_platform2,
        authorId: Id,
        platFormLink:
          'https://www.linkedin.com/in/jetniphan-pukkham-957671212/',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        platFormName: 'Jeni.pukkham@gmail.com',
        platFormId: id_platform3,
        authorId: Id,
        platFormLink:
          'https://mail.google.com/mail/u/0/?view=cm&ui=2&tf=0&fs=1&to=jeni.pukkham@gmail.com',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        platFormName: '@jaay__ni',
        platFormId: id_platform4,
        authorId: Id,
        platFormLink: 'https://www.instagram.com/jaay__ni/',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        platFormName: 'Jetniphan Pukkham',
        platFormId: id_platform6,
        authorId: Id,
        platFormLink: 'https://github.com/Jeniphan',
        createAt: new Date(),
        updateAt: new Date(),
      },
      {
        id: uuidv4(),
        platFormName: '080-915-3786',
        platFormId: id_platform5,
        authorId: Id,
        platFormLink: '0809153786',
        createAt: new Date(),
        updateAt: new Date(),
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
