// layout/DashboardLayout.js
import { FaMap, FaTable, FaUpload } from "react-icons/fa";
import Navbar from "./Navbar";
import Link from 'next/link';

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <aside className="flex-[22%] p-5">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Dashboard</h2>
          </div>
          <div className="mb-4 flex">
            <Link href="/">
              <div className="flex items-center text-md font-semibold mb-2 cursor-pointer">
                <FaMap className="mr-2 inline-block mt-1" />
                Maps
              </div>
            </Link>
          </div>
          <div className="mb-4 flex">
            <Link href="/pages/tables">
              <div className="flex items-center text-md font-semibold mb-2 cursor-pointer">
                <FaTable className="mr-2 inline-block mt-1" />
                Table
              </div>
            </Link>
          </div>
          <div className="mb-4 flex">
            <FaUpload className="mr-2 inline-block mt-1" />
            <h2 className="text-md font-semibold mb-2">Upload Shapefile</h2>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-[78%] p-4 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
