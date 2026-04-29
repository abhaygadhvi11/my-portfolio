import { Code2, Zap, BookOpen } from 'lucide-react';
import React from 'react';

const base = import.meta.env.BASE_URL;

export const projects = [
    {
        id: "todochimp",
        title: "TodoChimp – Task Management",
        images: [
            `${base}thumbnails/todochimp_1.png`,
            `${base}thumbnails/todochimp_2.png`,
            `${base}thumbnails/todochimp_3.png`,
        ],
        desc: "Full task assignment & progress tracking system with complete activity history.",
        tech: ["React", "Node.js", "PostgreSQL", "Express"],
        github: "https://github.com/abhaygadhvi11/REMINDER-V2-",
        icon: <Code2 size={15} color="#666" />,
        problem: "Task management tools often lack a dedicated full history log of activities or become overly convoluted. Users need a streamlined way to assign tasks and track specific activity steps without feeling overwhelmed by complex interfaces.",
        solution: "Developed a focused task tracking system where every piece of progress is logged into a unified activity history. Added clean assignment features to keep teams aligned.",
        impact: "Created a simplified workflow that ensures 100% visibility into task progression, reducing context switching and the need for external update messages."
    },
    {
        id: "attendance-system",
        title: "Facial Recognition Attendance",
        images: [
            `${base}thumbnails/attendance_1.png`,
            `${base}thumbnails/attendance_2.png`,
            `${base}thumbnails/attendance_3.png`,
        ],
        desc: "AI-powered attendance system using facial recognition for real-time tracking.",
        tech: ["Python", "OpenCV", "FastAPI"],
        github: "https://github.com/abhaygadhvi11",
        icon: <Zap size={15} color="#666" />,
        problem: "Manual attendance tracking in large organizations is time-consuming, prone to human error, and easy to bypass (buddy punching).",
        solution: "Engineered a real-time facial recognition pipeline using OpenCV and FastAPI, automatically identifying individuals and logging their arrival/departure times.",
        impact: "Eliminated manual tracking completely, providing a secure, touchless, and instantaneous method for recording presence with high accuracy."
    },
    {
        id: "ai-service",
        title: "AI Service Platform",
        images: [
            `${base}thumbnails/ai_service_1.png`,
            `${base}thumbnails/ai_service_2.png`,
            `${base}thumbnails/ai_service_3.png`,
            `${base}thumbnails/ai_service_4.png`,
        ],
        desc: "Centralized AI prompt & integration platform with reusable APIs across projects.",
        tech: ["Next.js", "OpenAI", "Node.js"],
        github: "https://github.com/abhaygadhvi11",
        icon: <Code2 size={15} color="#666" />,
        problem: "Managing multiple AI integrations and standardizing prompt engineering across different applications was redundant and difficult to scale.",
        solution: "Built a centralized microservice and platform allowing developers to create, test, and deploy AI prompts safely via reusable API endpoints.",
        impact: "Significantly accelerated the integration of AI features into new projects, cutting down repetitive setup and creating a single source of truth for prompt logic."
    },
    {
        id: "content-library",
        title: "Content Library for Web Dev",
        images: [
            `${base}thumbnails/contentlib_1.png`,
            `${base}thumbnails/contentlib_2.png`,
        ],
        desc: "Comprehensive resource library for building and optimizing websites.",
        tech: ["React", "CSS", "JS"],
        github: "https://github.com/abhaygadhvi11",
        icon: <BookOpen size={15} color="#666" />,
        problem: "Web developers constantly search for scattered resources, UI components, and optimization techniques across the internet.",
        solution: "Curated a comprehensive, searchable static library of hand-picked web development resources, categorized by use case and stack.",
        impact: "Provides a centralized hub for developers to quickly find verified resources, speeding up their workflow and improving code quality."
    }
];
