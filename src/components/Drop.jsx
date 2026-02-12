import { useState, useRef, useEffect } from "react";

function Drop() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Cart Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 transition rounded-full hover:bg-white/10"
      >
        🛒
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 z-50 w-40 mt-3 bg-black rounded-lg shadow-xl">
          <button
            onClick={() => {
              setOpen(false);
              console.log("Sign out clicked");
            }}
            className="w-full px-4 py-3 text-left text-white transition rounded-lg hover:bg-white/10"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
export default Drop