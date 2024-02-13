import { Link } from "react-router-dom";
import NewsContent from "../components/NewsContent";

const News = () => {
  const userInfo = {
    role: "writer",
  };
  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between p-4">
        <h2 className="text-xl font-medium">News</h2>
        {userInfo.role !== "admin" && (
          <Link
            to="/dashboard/news/create"
            className="px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-900"
          >
            Create News
          </Link>
        )}
      </div>
      <NewsContent />
    </div>
  );
};

export default News;
