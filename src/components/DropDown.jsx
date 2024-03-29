import { Fragment, useContext, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import deleteFolder from "../services/deleteFolder";
import deleteFile from "../services/deleteFile";
import Context from "../context/UserContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
//hacer que se ejecute el updateDataDirectory en folder
export default function DropDown({ id, type, updateData }) {
  const { token } = useContext(Context);
  const [showError, setShowError] = useState(false);
  const handleOnClick = (e) => {
    e.stopPropagation();
    setShowError(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    if (type == "folder") {
      deleteFolder(id, token).then((data) => {
        if (data.data.status == 200) {
          updateData();
        } else {
          setShowError(true);
        }
      });
    } else {
      deleteFile(id, token).then((data) => {
        if (data.data.status == 200) {
          updateData();
        } else {
          setShowError(true);
        }
      });
    }
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button onClick={handleOnClick} className="mt-[6px]">
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 hover:text-white text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={handleDelete}
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Delete{" "}
                  {showError && <span className="text-red-500">Try Again</span>}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
