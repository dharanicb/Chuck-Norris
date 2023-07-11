import React, { useEffect, useState } from "react";

const PopUp = ({ item, onModalClose }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch("https://api.chucknorris.io/jokes/random?category=" + item)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data.value);
        setData(data.value);
      });
  };

  return (
    <div className=" absolute shadow-2xl md:top-56  top-72 lg:rounded-md card p-5 xl:w-1/2 md:w-1/2 w-full">
      <div id="myModal" className="modal ">
        <div className="modal-content w-full top-[150px] lg:w-1/2 lg:top-[100px] ">
          <div className="modal-header">
            <span className="close" onClick={() => onModalClose(false)}>
              &times;
            </span>
            <h1 className="text-center text-xl text-white font-bold">
              <span className=" block capitalize text-3xl text-white">
                {item}
              </span>
            </h1>
          </div>

          <div className="w-full border border-black m-auto mt-6 shadow-xl flex flex-col items-center justify-center">
            <p className="text-center font-semibold text-blue-100   font-sans  m-5 text-xl md:text-3xl">
              {data}
            </p>
            <button
              className="px-4 py-2 bg-blue-700  my-2 mx-3 cursor-pointer lg:w-96 md:96  rounded-md hover:bg-blue-600 font-bold "
              role="button"
              onClick={() => fetchUserData()}
            >
              Next Joke
            </button>
          </div>
          {/* 
          <div className="modal-footer"></div> */}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
