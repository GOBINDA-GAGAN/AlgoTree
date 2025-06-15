import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProblems } from "../Context/ProblemContext";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { FaCode, FaRegStickyNote, FaYoutube } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import DashboardLayout from "../components/Dashboard/DashboardLayout";

const TopicProblems = () => {
  const { topicName } = useParams();
  const decodedTopic = decodeURIComponent(topicName);
  const { problems, setProblems } = useProblems();

  const [searchTerm, setSearchTerm] = useState("");
  const [notesMap, setNotesMap] = useState({});
  const [modal, setModal] = useState({
    show: false,
    index: null,
    text: "",
    title: "",
  });

  const topicProblems = problems.filter((p) => p.topic === decodedTopic);
  const filteredProblems = topicProblems.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const solvedCount = topicProblems.filter((p) => p.done).length;

  const handleNoteSave = () => {
    setNotesMap({ ...notesMap, [modal.index]: modal.text });
    setModal({ show: false, index: null, text: "", title: "" });
  };

  const toggleDone = (id) => {
    const updatedProblems = problems.map((p) =>
      p.id === id ? { ...p, done: !p.done } : p
    );
    setProblems(updatedProblems);
  };

  return (
    <DashboardLayout>
      <div className="flex min-h-screen">
        <div className="flex-1 p-4 md:p-8 bg-[#F4F8EE]">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-[#78B900]">
              {decodedTopic} Problems
            </h1>
            <p className="text-gray-600 mt-1">
              Total: <strong>{topicProblems.length}</strong> | Solved:{" "}
              <strong>{solvedCount}</strong>
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full bg-gray-900 rounded-full h-4 overflow-hidden">
              <div
                className="h-4 bg-[#78B900] transition-all duration-500"
                style={{
                  width: `${
                    topicProblems.length
                      ? (solvedCount / topicProblems.length) * 100
                      : 0
                  }%`,
                }}
              />
            </div>
            <p className="text-sm mt-1 text-gray-600">
              Progress: {solvedCount} / {topicProblems.length} solved
            </p>
          </div>

          {/* Search */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search question..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <div className="min-w-[700px]">
              <table className="w-full bg-white rounded-lg shadow border border-gray-900">
                <thead className="bg-[#78B900] text-white">
                  <tr>
                    <th className="px-4 py-3 text-left border border-gray-900">
                      #
                    </th>
                    <th className="px-4 py-3 text-left border border-gray-900">
                      Question
                    </th>
                    <th className="px-4 py-3 text-left border border-gray-900">
                      Done
                    </th>
                    <th className="px-4 py-3 text-left border border-gray-900">
                      Links
                    </th>
                    <th className="px-4 py-3 text-left border border-gray-900 hidden md:table-cell">
                      YouTube
                    </th>
                    <th className="px-4 py-3 text-left border border-gray-900 hidden md:table-cell">
                      Note
                    </th>
                    <th className="px-4 py-3 text-left border border-gray-900">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProblems.map((problem, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 border border-gray-900"
                    >
                      <td className="px-4 py-3 border border-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-800 border border-gray-900">
                        {problem.title}
                      </td>
                      <td className="px-4 py-3 border border-gray-900">
                        <input
                          type="checkbox"
                          checked={problem.done}
                          onChange={() => toggleDone(problem.id)}
                          className="w-5 h-5 text-green-600 accent-green-600"
                        />
                      </td>
                      <td className="px-4 py-3 flex gap-3 items-center  border-gray-900">
                        {problem.url_gfg && (
                          <a
                            href={problem.url_gfg}
                            target="_blank"
                            rel="noreferrer"
                            title="GFG"
                          >
                            <SiGeeksforgeeks
                              size={25}
                              className="text-green-600"
                            />
                          </a>
                        )}
                        {problem.url_leetcode && (
                          <a
                            href={problem.url_leetcode}
                            target="_blank"
                            rel="noreferrer"
                            title="LeetCode"
                          >
                            <SiLeetcode size={25} className="text-yellow-500" />
                          </a>
                        )}
                        {problem.url_codingNinja && (
                          <a
                            href={problem.url_codingNinja}
                            target="_blank"
                            rel="noreferrer"
                            title="Coding Ninjas"
                          >
                            <FaCode size={25} className="text-orange-500" />
                          </a>
                        )}
                      </td>
                      <td className="px-4 py-3 border border-gray-900  md:table-cell">
                        {problem.youtube ? (
                          <a
                            href={problem.youtube}
                            target="_blank"
                            rel="noreferrer"
                            title="Watch on YouTube"
                          >
                            <FaYoutube size={25} className="text-red-500" />
                          </a>
                        ) : (
                          <span className="text-gray-400 text-sm">N/A</span>
                        )}
                      </td>
                      <td className="px-4 py-3 border border-gray-900 hidden md:table-cell">
                        {notesMap[index] ? (
                          <FaRegStickyNote
                            className="text-green-600 text-lg"
                            title="Note exists"
                          />
                        ) : (
                          <span className="text-gray-400 text-xs md:text-sm">No note</span>
                        )}
                      </td>
                      <td className="px-4 py-3 border border-gray-900">
                        <button
                          onClick={() =>
                            setModal({
                              show: true,
                              index,
                              text: notesMap[index] || "",
                              title: problem.title,
                            })
                          }
                          className="text-purple-600 hover:text-purple-800 text-xl"
                          title="Add/Edit Note"
                        >
                          📝
                        </button>
                      </td>
                    </tr>
                  ))}
                  {filteredProblems.length === 0 && (
                    <tr>
                      <td
                        colSpan="7"
                        className="text-center text-gray-500 py-6 border border-gray-900"
                      >
                        No questions found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Modal */}
          {modal.show && (
            <div className="fixed inset-0 z-50 bg-black/30 bg-opacity-40 flex items-center justify-center">
              <motion.div
                drag
                dragConstraints={{
                  top: -200,
                  bottom: 200,
                  left: -300,
                  right: 300,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-white p-6 rounded-lg w-full max-w-2xl relative shadow-xl"
              >
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
                  onClick={() =>
                    setModal({ show: false, index: null, text: "", title: "" })
                  }
                >
                  <AiOutlineClose size={20} />
                </button>
                <h2 className="text-xl font-semibold text-blue-700 mb-3">
                  📝 {modal.title}
                </h2>
                <textarea
                  value={modal.text}
                  onChange={(e) => setModal({ ...modal, text: e.target.value })}
                  className="w-full border border-gray-900 rounded-lg p-3 h-[180px] focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Write your note here..."
                />
                <div className="mt-4 flex justify-end gap-3">
                  <button
                    onClick={handleNoteSave}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={() =>
                      setModal({
                        show: false,
                        index: null,
                        text: "",
                        title: "",
                      })
                    }
                    className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TopicProblems;
