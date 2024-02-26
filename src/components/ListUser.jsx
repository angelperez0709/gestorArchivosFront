import { useRef, useEffect } from "react";
import gsap from "gsap";
import useUser from "../hooks/useUser";

export default function ListUser({openModalUser}) {
  const { logOut } = useUser();
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, { duration: 1, x: "0" });
  }, []);
  const openModal = () => {
    openModalUser();
  };
  return (
    <div
      ref={ref}
      className="absolute top-[--height-header] translate-x-[200px] right-0 z-50"
    >
      <ul id="listUser" className="bg-gray-50">
        <li
          onClick={()=>{logOut()}}
          className="font-mono cursor-pointer hover:bg-gray-100 p-2"
        >
          Log out
        </li>
        <li 
        onClick={openModal}
        className="font-mono cursor-pointer hover:bg-gray-100 p-2">
          Change user data
        </li>
      </ul>
    </div>
  );
}
