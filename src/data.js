import drums from "../src/images/drums.jpg";
import guitar from "../src/images/guitar.jpg";
import sax from "../src/images/sax.jpg";
import violin from "../src/images/violin.jpg";
import record from "../src/images/record.jpg";
import mic from "../src/images/mic.jpg";
import lesson from "../src/images/lessons.jpg";
import video from "../src/images/video.jpg";

import PublicIcon from "@mui/icons-material/Public";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MicIcon from "@mui/icons-material/Mic";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import SchoolIcon from "@mui/icons-material/School";

export const Instruments = [
  {
    image: guitar,
    instrument: "Guitar",
    instructor: "mathew Cyrus",
    time: "6 months program",
    pricing: "10000 ksh per month",
  },
  {
    image: violin,
    instrument: "Violin",
    instructor: "James White",
    time: "6 months program",
    pricing: "10000 ksh per month",
  },
  {
    image: sax,
    instrument: "Saxophone",
    instructor: "Joe Heathers",
    time: "6 months program",
    pricing: "10000 ksh per month",
  },
  {
    image: drums,
    instrument: "Drums",
    instructor: "mathew Cyrus",
    time: "6 months program",
    pricing: "10000 ksh per month",
  },
];
export const features = [
  {
    name: "Recording Area",
    image: record,
    description:
      "Our recording area is a state of the art facility, equipped wit the latest technology and equipments. We have a variety ofrecording spaces, including a live room, control room and isolation booths to accomodate all types of projects. Our  engineers work closely with pour clients to ensure that each recording is of the highest quality.",
  },
  {
    name: "Photo Booth",
    image: mic,
    description:
      "Our photobooth is a professional grade equipment thta is perfect for capturing stunning images of you or your band. We have a avariety of backgrounds and lightings setup to choose from, and out=r team of proffesional photographers will help you get the perfect shots for your website, social media and album covers",
  },
  {
    name: "Lessons room",
    image: video,
    description:
      " Our music lessons rooms are designed to provide the perfect enviroment for learning. Each room is equipped with high quality instruments and equipments and our experienced teachers will help you achieve your goals, wg=hether you are a begginer or a professional musician",
  },
  {
    name: "Lounge Area",
    image: lesson,
    description:
      " Our lounge area is the poerfect place to relax and unwind after s long day of recording or lessons. it is equipped with comforttable seating, a TV and a avariety of refreshments so you can take a break and recharge.",
  },
  {
    name: "Sound Proof Rooms",
    image: guitar,
    description:
      " Our studio is sound proofed to emsure that recordings are of the highest quality and that there is no outside noise interference. Our soundproofing is specifically designed to provide an optimal recording enviroment and to reduce sound leakage",
  },
  {
    name: "Control Room",
    image: sax,
    description:
      " Our control room is where all ther magic happens. It is equipped with the latest technology and equipment, including a mixing console, audio interfaces and producers work closely with clients in the control room to ensure recording is of the highest quality.",
  },
];

export const services = [
  {
    service: "Music Production",
    service_description:
      "Our music production services are designed to help you bring your music to life. We offer professional recording, mixing, and mastering services, as well as songwriting, arranging, and production services to help you create music that stands out.",
    pricing: 5000,
    icon: <MusicNoteIcon />,
  },
  {
    service: "Music Lessons",
    service_description:
      "Learn to play an instrument or improve your singing with our experienced instructors.",
    pricing: 100,
    icon: <SchoolIcon />,
  },
  {
    service: "Video Production",
    service_description:
      "Our video production team can help you create stunning video content that engages and inspires your audience. We offer a full range of video production services, including pre-production planning, filming, editing, and post-production.",
    pricing: 3000,
    icon: <MovieCreationIcon />,
  },
  {
    service: "Digital Marketing",
    service_description:
      "Our digital marketing services are designed to help you build your brand and connect with your target audience online. We can create and execute a custom digital marketing strategy that includes social media management, email marketing, search engine optimization, and more.",
    pricing: 1500,
    icon: <PublicIcon />,
  },
  {
    service: "Ads",
    service_description:
      "Our advertising services can help you reach new customers and grow your business through a variety of channels. We can create and manage advertising campaigns on social media, search engines, and other online platforms, as well as traditional advertising channels like TV and radio.",
    pricing: 2000,
    icon: <OndemandVideoIcon />,
  },

  {
    service: "Podcast Production",
    service_description:
      "Our podcast production services are designed to help you create high-quality podcasts that engage and entertain your audience. We can handle every aspect of podcast production, from recording and editing to post-production and distribution.",
    pricing: 2500,
    icon: <MicIcon />,
  },
  {
    service: "Audio Post-Production",
    service_description:
      "Our audio post-production services can help you create high-quality sound for your films, TV shows, and other multimedia projects. We offer sound editing, mixing, and mastering services to help you create immersive soundscapes that enhance your visual content.",
    pricing: 3500,
    icon: <VolumeUpIcon />,
  },
  {
    service: "Jingle Production",
    service_description:
      "Our jingle production services can help you create catchy and memorable jingles for your commercials and other advertising campaigns. We can work with you to create a jingle that perfectly captures your brand and message.",
    pricing: 1500,
    icon: <RecordVoiceOverIcon />,
  },
  {
    service: "Voiceover Production",
    service_description:
      "Our voiceover production services can help you create high-quality voiceover content for your projects. We offer scriptwriting, editing, and post-production services to help you create professional voiceover recordings that stand out.",
    pricing: 2000,
    icon: <RecordVoiceOverIcon />,
  },
];
