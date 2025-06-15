import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaListUl,
  FaLink,
  FaLayerGroup,
  FaStream,
  FaTree,
  FaProjectDiagram,
  FaHashtag,
  FaUndo,
  FaBrain,
  FaBolt,
  FaPuzzlePiece,
  FaWindowRestore,
  FaArrowsAltH,
  FaSearch,
} from "react-icons/fa";

const dsaTopics = [
  { name: "Array", icon: <FaListUl />, color: "#EC4899" },
  { name: "Linked List", icon: <FaLink />, color: "#3B82F6" },
  { name: "Stack", icon: <FaLayerGroup />, color: "#F59E0B" },
  { name: "Queue", icon: <FaStream />, color: "#EF4444" },
  { name: "Tree", icon: <FaTree />, color: "#22C55E" },
  { name: "Graph", icon: <FaProjectDiagram />, color: "#8B5CF6" },
  { name: "Hashing", icon: <FaHashtag />, color: "#6366F1" },
  { name: "Recursion", icon: <FaUndo />, color: "#E11D48" },
  { name: "DP", icon: <FaBrain />, color: "#1E3A8A" },
  { name: "Greedy", icon: <FaBolt />, color: "#FBBF24" },
  { name: "Backtracking", icon: <FaPuzzlePiece />, color: "#DB2777" },
  { name: "Sliding Window", icon: <FaWindowRestore />, color: "#06B6D4" },
  { name: "Two Pointers", icon: <FaArrowsAltH />, color: "#FB923C" },
  { name: "Binary Search", icon: <FaSearch />, color: "#4B5563" },
];

const Home = () => {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Set initial random positions
  useEffect(() => {
    const initialPositions = dsaTopics.map(() => {
      const container = containerRef.current;
      const maxX = container.offsetWidth - 150;
      const maxY = container.offsetHeight - 60;
      return {
        x: Math.random() * maxX,
        y: Math.random() * maxY,
      };
    });
    setPositions(initialPositions);
  }, []);

  // Animate movement every second if animation is active
  useEffect(() => {
    let interval = null;
    if (isAnimating) {
      interval = setInterval(() => {
        setPositions((prev) =>
          prev.map(() => {
            const container = containerRef.current;
            const maxX = container.offsetWidth - 150;
            const maxY = container.offsetHeight - 60;
            return {
              x: Math.random() * maxX,
              y: Math.random() * maxY,
            };
          })
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <div className="bg-[#F4F8EE] min-h-screen px-4 py-10 md:px-20">
      <div className="w-full max-w-7xl mx-auto">
     
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:min-h-[70vh] overflow-hidden">
       
          <img
            src="/leaf1.png"
            alt="leaf"
            className="absolute w-12 sm:w-60 top-0 left-13"
          />
          <img
            src="/leaf2.png"
            alt="leaf"
            className="absolute w-40 md:w-40 bottom-0 right-5  rotate-[45deg]"
          />
          <img
            src="/leaf1.png"
            alt="leaf"
            className="absolute w-14 sm:w-30 top-1/2 left-1/3 rotate-90 "
          />
          <img
            src="/leaf3.png"
            alt="leaf"
            className="absolute w-10 sm:w-30 bottom-3 left-15 "
          />
          <img
            src="/leaf2.png"
            alt="leaf"
            className="absolute w-40 md:w-40 bottom-9 right-72  rotate-[45deg]"
          />

          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#071B1A]">
              Master <span className="text-[#78B801]">DSA</span> with Practice
            </h1>
            <p className="text-gray-700 text-sm md:text-lg max-w-md mx-auto md:mx-0">
              Practice all core Data Structures & Algorithms topics in a
              structured way.
            </p>
            <Link
              to="/dashboard"
              className="inline-block bg-[#78B801] text-white px-6 py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-[#5d7236] transition"
            >
              Get Started
            </Link>
          </div>

          {/* Tree Image */}
          <img
            src="/Tree.png"
            alt="Tree"
            className="w-64 md:w-[450px] object-contain z-10"
          />
        </div>
        {/* Divider */}
        <div className="my-10 h-[2px] bg-[#78B801] rounded-full w-full" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B1A]">
            DSA Topics
          </h2>
          <button
            onClick={() => setIsAnimating((prev) => !prev)}
            className={`px-4 py-2 sm:px-5 sm:py-3 rounded-xl shadow-lg font-semibold transition ${
              isAnimating
                ? "bg-red-500 hover:bg-red-600"
                : "bg-[#78B801] hover:bg-[#5d7236]"
            } text-white text-sm sm:text-base`}
          >
            {isAnimating ? "🛑 Stop Magic" : "✨ Show Magic"}
          </button>
        </div>
        {/* DSA Topics Floating Cards */}
        <div
          ref={containerRef}
          className="relative h-[60vh] sm:h-[70vh] rounded-3xl border-4 border-transparent bg-clip-padding bg-no-repeat bg-cover bg-center overflow-auto sm:overflow-hidden p-3 sm:p-6"
          style={{
            backgroundImage: `url('/Tree1.jpg')`,
          }}
        >
          {dsaTopics.map((topic, index) => (
            <motion.div
              key={index}
              drag
              dragMomentum={false}
              animate={positions[index]}
              transition={{ duration: 1 }}
              className="absolute cursor-pointer w-fit px-3 py-2 sm:p-5 rounded-xl sm:rounded-2xl text-white backdrop-blur-md border border-white/20 shadow-lg bg-clip-padding flex items-center gap-2 sm:gap-3"
              style={{
                background: `linear-gradient(to bottom right, ${topic.color}80, rgba(0,0,0,0.4))`,
              }}
            >
              <div
                className="text-xl sm:text-3xl"
                style={{ color: topic.color }}
              >
                {topic.icon}
              </div>
              <h3 className="text-sm sm:text-lg font-semibold">{topic.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
