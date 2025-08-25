"use client";

import NavLinks from "@/app/admin/dashboard/nav-links";
import { useState } from "react";

const SideNav = () => {

  const [popUp, setPopUp] = useState(false);

  const logoutHandler = async () => {
    try {
      console.log("Logging out...");
      
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const togglePopUp = () => {
    setPopUp((prev) => prev);
  };

  return (
    <div className="flex h-full flex-col py-4 bg-green-200 px-5">
      <div className="p-5 bg-white/70 rounded-md mb-4">
        <p className="text-3xl text-black font-cormorant_garamond py-2">Welcome Back</p>
        <h2 className="text-start">Admin</h2>
      </div>

      <div className="flex gap-2 grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block" />

        <button
          type="button"
          onClick={togglePopUp}
          className="flex items-center justify-start gap-2 rounded-md px-5 py-3 text-base text-black font-medium border border-[var(--Black-3)]"
        >
          {/* <LogoutIcon /> */}
          <span className="hidden md:block">Sign Out</span>
        </button>

        {popUp && (
          <div
            className="fixed inset-0 bg-[var(--Black)] flex justify-center items-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="bg-white rounded-lg shadow-lg relative p-10 flex flex-col items-center gap-3">
              <button
                type="button"
                className="absolute -top-3 -right-3 text-2xl bg-[var(--Blue)] rounded-full w-8 h-8 flex items-center justify-center"
                onClick={togglePopUp}
              >
                {/* <ClosePopIcon /> */}
              </button>

              <div className="bg-[#F0E0AE] px-3 py-2.5 rounded-full">
                {/* <PopUpLogOutIcon /> */}
              </div>

              <h3 className="text-[var(--Blue)] font-bold font-archivo text-xl">
                Logging Out
              </h3>
              <p className="text-[var(--Black-2)] text-center">
                Are you sure you wanna log out. <br />
                You can Login Later
              </p>

              <div className="flex justify-center items-center gap-3">
                <button
                  type="button"
                  className="button2 px-3"
                  onClick={togglePopUp}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-[#E98D1D] px-3 py-2.5 rounded-sm text-white font-medium"
                  onClick={logoutHandler}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SideNav;
