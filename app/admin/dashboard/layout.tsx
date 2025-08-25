"use client";
import SideNav from "@/app/admin/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {


  return (
    <>
      <div className="flex md:h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64 ">
          <SideNav />
        </div>
        <div className="flex-grow !p-5 md:overflow-y-auto bg-[#26355D]">{children}</div>
      </div>
    </>
  );

  return null;
}
