import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const allSuggestions = [
    { id: 1, title: "Guinness World Records 2023" },
    { id: 2, title: "One: Simple One-Pan Wonders" },
    { id: 3, title: "The Bullet That Missed" },
    { id: 4, title: "Interesting Facts For Curious Minds" },
    { id: 5, title: "It Start with Us" },
    { id: 6, title: "SPACEBOY" },
    { id: 7, title: "Lessons in Chemistry" },
    { id: 8, title: "2023 Guide to the Night Sky" },
    { id: 9, title: "No Plan B" },
    { id: 10, title: "BOSS Men's Prime Shirt" },
    { id: 11, title: "Apple 2022 10.9-inch iPad" },
    { id: 12, title: "DeLonghi Nescafé Dolce Coffee Machine" },
    { id: 13, title: "Apple iPhone 14 Pro - Deep Purple" }
  ];

  const filteredSuggestions = searchTerm.trim() === "" ? [] : 
    allSuggestions.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setShowSuggestions(false);
    }
  };

  return (
    <div className="w-full max-w-2xl relative">
      <div className="flex items-stretch h-10 bg-yellow-400 rounded-md overflow-hidden">
        <input 
          type="text" 
          placeholder="Search Amazon" 
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="flex-1 px-4 text-black placeholder-gray-600 focus:outline-none"
        />
        <button 
          onClick={handleSearch}
          className="w-12 bg-yellow-500 hover:bg-yellow-600 flex items-center justify-center"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-black" />
        </button>
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 shadow-lg rounded-b-md z-50">
          {filteredSuggestions.map((item) => (
            <div 
              key={item.id}
              className="p-2 hover:bg-gray-100 cursor-pointer text-black"
              onClick={() => {
                setSearchTerm(item.title);
                navigate(`/search?q=${encodeURIComponent(item.title)}`);
                setShowSuggestions(false);
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;