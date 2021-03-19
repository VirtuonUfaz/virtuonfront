import React, { useState } from "react";

const Search = () => {
  const videos = [
    {
      name: "OOP lecture 1",
    },
    {
      name: "DSA lecture 1",
    },
    {
      name: "DSA lecture 2",
    },
    {
      name: "French lecture 1",
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? videos
    : videos.filter((video) =>
        video.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div className="mt-8">
      <div className="flex flex-ai-c gap-4">
        <div className="flex-5">
          <input
            type="text"
            placeholder="Search"
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="flex-1">
          <div className="flex gap-4">
            <button className="btn bg-white text-blue px-4 py-3 bold border">
              Search
            </button>
            <button className="btn bg-white text-blue px-4 bold">Clear</button>
          </div>
        </div>
      </div>
      <div className="table border rounded mt-4">
        <div className="flex table-content px-4 border-bottom">
          <div className="text text-blue bold text-sm py-4"></div>
          <div className="text text-blue bold text-sm py-4">Name</div>
          <div className="text text-blue bold text-sm py-4">Size</div>
          <div className="text text-blue bold text-sm py-4">Length</div>
          <div className="text text-blue bold text-sm py-4">Uploaded</div>
          <div className="text text-blue bold text-sm py-4">Modified</div>
          <div className="text text-blue bold text-sm py-4"></div>
        </div>

        {results.map((video, index) => (
          <div key={index} className="flex table-content px-4 flex-ai-c">
            <div className="text text-black p-4">
              <div className="image-wrapper">
                <img
                  className="w-100 "
                  src="https://s30876.pcdn.co/wp-content/uploads/Five-Skills-You-Need-to-Become-a-Lecturer-in-Higher-Education-1170x630.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="text text-gray py-4">{video.name}</div>
            <div className="text text-gray py-4">13MB</div>
            <div className="text text-gray py-4">13:01</div>
            <div className="text text-gray py-4">12 March 2021</div>
            <div className="text text-gray py-4">20 March 2021</div>
            <div className="text text-gray py-4 flex">
              <button className="btn bg-white text-blue px-4 py-3 bold border">
                Edit
              </button>
              <button className="btn bg-white text-blue px-4 py-3 bold border text-md">
                ⋮
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
