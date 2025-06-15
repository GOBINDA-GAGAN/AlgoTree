import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import { useProblems } from "../Context/ProblemContext";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

const Problems = () => {
  const { problems } = useProblems();
  const navigate = useNavigate();

  const groupedProblems =
    problems?.reduce((acc, problem) => {
      const topic = problem.topic;
      if (!acc[topic]) acc[topic] = [];
      acc[topic].push(problem);
      return acc;
    }, {}) || {};

  // ✅ Global progress
  const totalQuestions = problems?.length || 0;
  const totalSolved = problems?.filter((p) => p.done)?.length || 0;
  const overallProgress = totalQuestions
    ? (totalSolved / totalQuestions) * 100
    : 0;

  return (
    <DashboardLayout>
      <div className="flex min-h-screen overflow-y-hidden">
        <div className="flex-1 p-2 md:p-8 bg-[#F4F8EE]">
          {/* 🔥 Top Header Section */}
          <div className="mb-8 p-4 bg-white rounded-2xl shadow border-l-8 border-[">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              Crack the Code. Crack the Interview. 🎯
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-2">
              Total Questions Solved:{" "}
              <span className="font-semibold text-[#78B801]">
                {totalSolved}
              </span>{" "}
              ({overallProgress.toFixed(2)}% Done)
            </p>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 bg-[#78B801] rounded-full transition-all duration-500"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>

          {/* 🔖 Page Title */}
          <h1 className="text-xl md:text-3xl font-bold mb-4">All Topics</h1>
          <p className="text-sm md:text-lg text-gray-700 mb-6">
            Click a topic to view problems.
          </p>

          {/* 🧩 Topic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(groupedProblems).map(
              ([topic, topicProblems], index) => {
                const total = topicProblems.length;
                const solved = topicProblems.filter((p) => p.done).length;
                const progress = total ? (solved / total) * 100 : 0;

                let status = "Not Started";
                let badgeColor = "bg-red-600 text-white";
                let borderColor = "border-red-500";

                if (solved === total && total > 0) {
                  status = "Completed";
                  badgeColor = "bg-green-600 text-white";
                  borderColor = "border-green-500";
                } else if (solved > 0) {
                  status = "In Progress";
                  badgeColor = "bg-yellow-500 text-black";
                  borderColor = "border-yellow-400";
                }

                return (
                  <div
                    key={topic}
                    className={`relative bg-[#f1f2f1] text-black rounded-2xl border-2 shadow-md hover:shadow-lg transition border-l-8 ${borderColor} p-4 flex flex-col justify-between`}
                  >
                    {/* Status Badge */}
                    <div
                      className={`absolute top-2 right-2 text-xs font-semibold px-3 py-1 rounded-full shadow ${badgeColor}`}
                    >
                      {status}
                    </div>

                    {/* Title and Stats */}
                    <div>
                      <h2 className="text-xl font-bold">{topic}</h2>
                      <p className="text-sm mt-2">
                        Total Questions:{" "}
                        <span className="font-semibold">{total}</span>
                      </p>
                      <p className="text-sm">
                        Solved: <span className="font-semibold">{solved}</span>
                      </p>

                      {/* Progress Bar */}
                      <div className="mt-4">
                        <div className="bg-gray-900 bg-opacity-20 rounded-full h-3 overflow-hidden">
                          <div
                            className="h-3 bg-[#78B801] rounded-full transition-all duration-500"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-xs mt-1 text-black font-semibold">
                          {progress.toFixed(0)}% solved
                        </p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-4 flex justify-end">
                      <button
                        className="bg-[rgb(120,184,1)] cursor-pointer text-[#ffffff] px-4 py-2 rounded-xl hover:bg-[rgba(120,184,97)] text-sm font-semibold shadow"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/problems/${encodeURIComponent(topic)}`);
                        }}
                      >
                        Start Now
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Problems;
