// Import images
import mlIcon from '../assets/ml.png';
import plantImage from '../assets/plant.jpg';
import chatImage from '../assets/chat.jpg';
import youtubeImage from '../assets/youtube.jpg';
import bookingImage from '../assets/booking.jpg';
import bookImage from '../assets/book.jpg';
import pcImage from '../assets/pc.jpg';
import flowerImage from '../assets/flower.jpg';

// Original JSON data
export interface Service {
  icon: string;
  title: string;
  text: string;
}

export interface Project {
  field: string;
  description: string;
  title: string;
  image: string;
  url: string;
}

export interface Data {
  services: Service[];
  fields: string[];
  projects: Project[];
}
const originalData : Data = {
  "services": [
    {
      "icon": mlIcon,
      "title": "Full Stack Web Development",
      "text": "Expert in full stack web development with MERN stack, React, and Tailwind CSS."
    },
    {
      "icon": mlIcon,
      "title": "Recommendation Systems",
      "text": "Design and implement personalized recommendation systems to enhance user experience."
    },
    {
      "icon": mlIcon,
      "title": "Image Classification",
      "text": "Develop machine learning models for image classification in computer vision tasks."
    },
    {
      "icon": mlIcon,
      "title": "Chat Applications",
      "text": "Build chat applications with real-time messaging, file sharing, and multimedia support."
    },
    {
      "icon": mlIcon,
      "title": "Prediction Systems",
      "text": "Develop prediction systems to forecast trends using historical data and machine learning."
    },
    {
      "icon": mlIcon,
      "title": "E-commerce Websites",
      "text": "Create custom e-commerce websites tailored to specific business needs and requirements."
    },
    {
      "icon": mlIcon,
      "title": "Delivery Services",
      "text": "Develop delivery management systems to optimize routes and track shipments in real-time."
    }
  ],
  "fields": [
    "Machine Learning",
    "Websites",
    "Image Classification"
  ],
  "projects": [
    {
      "field": "Image Classification",
      "description": "Developed a model to detect plant diseases from images with high accuracy.",
      "title": "Plant Disease Detection",
      "image": plantImage,
      "url": "https://github.com/aymen-000/Plant-Diseases-Prediction"
    },
    {
      "field": "Websites",
      "description": "Built a chat application supporting real-time messaging and media sharing.",
      "title": "Chat App",
      "image": chatImage,
      "url": "https://github.com/aymen-000/Plant-Diseases-Prediction"
    },
    {
      "field": "Machine Learning",
      "description": "Created a system to classify YouTube comments using machine learning models.",
      "title": "YouTube Comments Classification",
      "image": youtubeImage,
      "url": "https://github.com/aymen-000/Youtube_comments_classification"
    },
    {
      "field": "Websites",
      "description": "Developed a booking website with features for managing reservations online.",
      "title": "Booking Website",
      "image": bookingImage,
      "url": "https://github.com/aymen-000/booking_web"
    },
    {
      "field": "Websites",
      "description": "Created an online bookstore with a catalog of books and user reviews.",
      "title": "Book Store",
      "image": bookImage,
      "url": "https://github.com/aymen-000/booking_web"
    },
    {
      "field": "Machine Learning",
      "description": "Developed a recommendation system to suggest laptop prices based on specs.",
      "title": "Laptop Price Recommendation",
      "image": pcImage,
      "url": "https://github.com/aymen-000/laptop_price"
    },
    {
      "field": "Image Classification",
      "description": "Built a model to classify different types of flowers from image data.",
      "title": "Flower Classification",
      "image": flowerImage,
      "url": "https://github.com/aymen-000/Flower-classification-"
    }
  ]
};
export default originalData