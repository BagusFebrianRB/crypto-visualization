import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a0a]">
      <Navbar />
      <main className="flex-grow flex justify-center ">
        <Outlet /> {/* tempat render halaman */}
      </main>
    </div>
  );
}
