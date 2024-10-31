// import React, { useState } from 'react';
import React from 'react';
import { Github, Linkedin, Book, Code, Brain, GamepadIcon, Mountain} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image'
const Portfolio = () => {
  //const [activeTab, setActiveTab] = useState('ml');

  // Define all data within the component
  const projects = {
    ml: [
      {
        title: "AI Fitness Trainer",
        description: "Real-time pose landmark detection for exercise form correction",
        tags: ["MediaPipe", "TensorFlow", "OpenCV", "Python"],
        category: "Computer Vision",
        image: "/images/ANPR-800.png" 
      },
      {
        title: "Pose Classification System",
        description: "ROI-based exercise classifier for automated workout tracking",
        tags: ["PyTorch", "CNN", "Transfer Learning"],
        category: "Machine Learning"
      },
      {
        title: "Background Removal Tool",
        description: "Real-time background removal using semantic segmentation",
        tags: ["DeepLab", "OpenCV", "TensorFlow"],
        category: "Computer Vision"
      },
      {
        title: "Face & Hand Landmark Detection",
        description: "Camweara demo featuring precise facial and hand tracking",
        tags: ["MediaPipe", "OpenCV", "Python"],
        category: "Computer Vision"
      },
      {
        title: "ANPR System",
        description: "Automated Number Plate Recognition with OCR",
        tags: ["Tesseract", "YOLO", "OpenCV", "RegEx"],
        category: "Computer Vision"
      },
      {
        title: "RAG with Ollama",
        description: "Local LLM implementation with document retrieval",
        tags: ["LangChain", "Ollama", "Vector DB"],
        category: "NLP"
      },
      {
        title: "AI Ping Pong",
        description: "Reinforcement learning based ping pong game",
        tags: ["PyTorch", "RL", "Gymnasium"],
        category: "Reinforcement Learning"
      }
    ],
    robotics: [
      {
        title: "Mobile Robotic Arm",
        description: "Versatile robotic arm with 6 DOF",
        tags: ["ROS", "Arduino", "Inverse Kinematics"],
        category: "Robotics",
        image: "/images/ANPR-800.png" 
      },
      {
        title: "Bionic Arm",
        description: "EMG controlled prosthetic arm",
        tags: ["Signal Processing", "Arduino", "3D Printing"],
        category: "Biomedical"
      },
      {
        title: "DIY 3D Printer",
        description: "Custom built 3D printer with enhanced features",
        tags: ["Marlin", "CAD", "Electronics"],
        category: "Manufacturing"
      }
    ]
  };

  const travels = [
    {
      region: "Himalayas",
      places: ["Kedarkantha Trek", "Tapova and Gaumukh Trek", "Rishikesh", "Leh Ladakh"],
      description: "Challenging treks and spiritual journeys in the mighty Himalayas"
    },
    {
      region: "Maharashtra",
      places: ["Anjneri", "Raigad", "Lohagad", "Pune"],
      description: "Historical forts and monsoon treks"
    },
    {
      region: "International",
      places: ["Singapore", "Malaysia", "New York", "New Jersey"],
      description: "Exploring diverse cultures and cityscapes"
    }
  ];

  const books = [
    {
      title: "The Fountainhead",
      author: "Ayn Rand",
      genre: "Philosophy",
      review: "A powerful exploration of individualism and architectural integrity"
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      review: "Chilling portrayal of surveillance and totalitarianism"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      review: "A mystical story about following one's dreams"
    },
    {
      title: "The Krishna Key",
      author: "Ashwin Sanghi",
      genre: "Mystery",
      review: "Blend of mythology and modern thriller"
    },
    {
      title: "The Immortals of Meluha",
      author: "Amish Tripathi",
      genre: "Mythology",
      review: "Creative reimagining of Indian mythology"
    },
    {
      title: "Animal Farm",
      author: "George Orwell",
      genre: "Political Satire",
      review: "Brilliant allegory of political revolution and corruption"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Animation */}
      <header className="container mx-auto px-4 py-16 relative overflow-hidden">
        <div className="text-center animate-fadeIn">
          <h1 className="text-5xl font-bold mb-4 animate-slideDown">Swapnil Gautam</h1>
          <p className="text-xl text-gray-600 mb-6 animate-slideUp">
            ML Engineer | Roboticist | Explorer
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="p-2 hover:text-blue-600 transform hover:scale-110 transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/swapnil-gautam" className="p-2 hover:text-blue-600 transform hover:scale-110 transition-all">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com" className="p-2 hover:text-blue-600 transform hover:scale-110 transition-all">
              <Code className="w-6 h-6" />
            </a>
            <a href="https://chess.com" className="p-2 hover:text-blue-600 transform hover:scale-110 transition-all">
              <GamepadIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section with Tabs */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="w-6 h-6" />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <Tabs defaultValue="ml" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="ml">Machine Learning</TabsTrigger>
            <TabsTrigger value="robotics">Robotics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ml">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.ml.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-full h-48 relative overflow-hidden rounded-t-lg">
                  <Image 
                    src={project.image || "/images/ANPR-800.png"} 
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{project.category}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="robotics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.robotics.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-all transform hover:-translate-y-1">
                  <div className="w-full h-48 relative overflow-hidden rounded-t-lg">
                  <Image 
                    src={project.image || "/images/ANPR-800.png"} 
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{project.category}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Travel Section */}
      <section className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mountain className="w-6 h-6" />
              <CardTitle>Adventures & Travels</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {travels.map((region, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold text-lg">{region.region}</h3>
                  <p className="text-sm text-gray-600">{region.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {region.places.map((place, placeIndex) => (
                      <li key={placeIndex}>{place}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Reading Section */}
      <section className="container mx-auto px-4 py-8 mb-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Book className="w-6 h-6" />
              <CardTitle>Reading List</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map((book, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <span className="inline-block px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full mt-2">
                    {book.genre}
                  </span>
                  <p className="text-sm mt-2 text-gray-700">{book.review}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Portfolio;
