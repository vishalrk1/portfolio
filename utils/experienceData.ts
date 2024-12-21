import { Experience } from "./types";

import jioLogo from "../assets/jio-logo.png";
import noLogo from "../assets/building-logo.png";

export const ExperienceData = [
  {
    company: "JIO Platforms",
    position: "Software Developer",
    companyLogo: jioLogo,
    description: [
      "Developed a farmer-focused chatbot powered by GPT, optimizing response time from several days to under a minute. Implemented Retrieval-Augmented Generation (RAG) techniques to enhance the chatbot's ability to provide accurate and contextually relevant responses. Built APIs using Django to serve the chatbot pipeline for the web & mobile applications.",
      "Designed and implemented data extraction pipelines to streamline data processing for the agri chatbot, ensuring efficient query handling and data retrieval.",
      "Contributed to a crop detection flow for the Jio Krishi mobile application, enhancing its ability to identify crop names for better user experience automatically.",
      "Worked on developing the Jio Krishi website and PWA, leveraging ReactJS, React Query, and Styled Components to deliver responsive and feature-rich user interfaces.",
      "Built demo application POCs using React Native to explore innovative ideas and functionalities.",
    ],
    isCurrent: true,
    startDate: "5-1-2023",
    jobType: "Full Time",
  },
  {
    company: "HDFC Life",
    position: "AI Intern",
    companyLogo: noLogo,
    description: [
      "Utilized GAN models (Swimswap, First-order-model, LIP GAN) to create personalized insurance ads/videos. Employed TTS models (Tacotron, Fastspeech, VITS) for voice cloning/synthesis, enhancing customer engagement.",
      "Developed an anti-face spoofing detection model to improve and prevent attacks on the face recognition system",
      "Worked in all project phases in Agile/Scrum methodology with Jira",
    ],
    isCurrent: false,
    startDate: "6-9-2022",
    endDate: "12-9-2022",
    jobType: "Internship",
  },
] as Experience[];
