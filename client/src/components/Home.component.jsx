import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import Navbar from "./Navbar.component";

export default function Home() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000/viewer/verify",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return !status && (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between items-center">
        <Navbar />
        <div>
          <h1 className="text-4xl text-stone-200 font-bold text-center mb-1">
            Welcome to Stageflix, {username}!
          </h1>
          <p className="text-2xl font-semibold text-center">
            A new way for people to access and enjoy
            <br />
            theatre productions
          </p>
        </div>
        <footer className="w-full p-2 text-sm text-grey-800">
          <div className="flex flex-col justify-between items-center">
            <small className="text-sm">Stageflix &copy; 2023</small>
            <a
              target="_black"
              title="drama icons"
              href="https://www.flaticon.com/free-icons/drama"
              className="no-underline hover:underline decoration-grey-800"
            >
              Drama icons created by Freepik - Flaticon
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
