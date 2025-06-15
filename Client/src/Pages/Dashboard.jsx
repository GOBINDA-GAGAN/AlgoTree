
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import { useProblems } from "../Context/ProblemContext";

const Dashboard = () => {
  const { problems } = useProblems();
  const total = problems?.length || 0;
  const solved = problems?.filter((p) => p.done).length || 0;
  const progress = total ? (solved / total) * 100 : 0;

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome Back 👋</h1>
        <p className="text-gray-600 mb-6">Crack DSA with consistency and focus 🚀</p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Questions" value={total} color="blue" />
          <StatCard title="Solved" value={solved} color="green" />
          <StatCard title="Pending" value={total - solved} color="yellow" />
          <StatCard title="Progress" value={`${progress.toFixed(0)}%`} color="purple" />
        </div>

        {/* Progress Bar */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Overall Progress</h2>
          <div className="bg-gray-300 rounded-full h-4">
            <div
              className="h-4 bg-[#78B801] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">{progress.toFixed(0)}% completed</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

const StatCard = ({ title, value, color }) => {
  const colorMap = {
    blue: "border-blue-500 text-blue-700",
    green: "border-green-500 text-green-700",
    yellow: "border-yellow-500 text-yellow-700",
    purple: "border-purple-500 text-purple-700",
  };

  return (
    <div className={`bg-white border-l-4 ${colorMap[color]} rounded-2xl shadow p-4`}>
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className={`text-2xl font-bold ${colorMap[color].split(" ")[1]}`}>{value}</p>
    </div>
  );
};

export default Dashboard;
