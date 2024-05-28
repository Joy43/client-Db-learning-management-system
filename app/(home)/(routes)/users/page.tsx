'use client';

import { useSession, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

const Users: React.FC = () => {
  const { user } = useUser();
  const [location, setLocation] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [activeDevices, setActiveDevices] = useState<any[]>([]);
const {session}=useSession()
  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        },
        (error) => {
          console.error("Error fetching location:", error);
          setLocation("Location not available");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }

    // Set current time
    const updateCurrentTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString();
      setCurrentTime(formattedTime);
    };

    updateCurrentTime();
    const intervalId = setInterval(updateCurrentTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // Fetch active devices
    const fetchActiveDevices = async () => {
      try {
        const sessions = await user?.getSessions();
        if (sessions) {
          setActiveDevices(sessions);
        }
      } catch (error) {
        console.error("Error fetching active devices:", error);
      }
    };

    fetchActiveDevices();
  }, [user]);

  return (
    <div>
      <div className="md:grid grid-cols-4 grid-rows-2 bg-white gap-2 p-4 rounded-xl">
        <div className="md:col-span-1 h-72 shadow-xl">
          <div className="flex w-full h-full relative">
            {user?.profileImageUrl && (
              <Image
                key={user?.id}
                src={user.profileImageUrl}
                className="w-44 h-44 m-auto"
                alt="Profile Image"
                width={176}
                height={176}
              />
            )}
          </div>
        </div>
        <div className="md:col-span-3 h-72 shadow-xl p-4 space-y-2">
          <div className="flex">
            <span className="text-sm font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
              Name:
            </span>
            <input
              className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
              type="text"
              value={user?.fullName || ''}
              readOnly
            />
          </div>
          <div className="flex">
            <span className="text-sm bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
              Email:
            </span>
            <input
              className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
              type="text"
              value={user?.emailAddresses[0]?.emailAddress || ''}
              readOnly
            />
          </div>
          <div className="flex">
            <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
              Location:
            </span>
            <input
              className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
              type="text"
              value={location || ''}
              readOnly
            />
          </div>
          <div className="flex">
            <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
              Current Time:
            </span>
            <input
              className="px-4 text-blue-500 font-semibold border-l-0 cursor-default border-gray-300 focus:outline-none rounded-md rounded-l-none shadow-sm -ml-1 w-4/6"
              type="text"
              value={currentTime}
              readOnly
            />
          </div>
          <div className="flex">
            <span className="text-sm border bg-blue-50 font-bold uppercase border-2 rounded-l px-4 py-2 bg-gray-50 whitespace-no-wrap w-2/6">
             last Active Devices:
            </span>
            <div className="px-4 border-l-0 cursor-default border-gray-300 focus:outline-none rounded-md rounded-l-none shadow-sm -ml-1 w-4/6">
              {activeDevices.length > 0 ? (
                <ul>
                  {activeDevices.map((device) => (
                    <li key={device.id}>{session.lastActiveAt.toLocaleString()} <span>on</span> {device.deviceType}</li>
                  ))}
                </ul>
              ) : (
                "No active devices"
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Users;
