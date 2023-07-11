import React, { useEffect, useState } from "react";
import PopUp from "./popUp";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [popUpData, setPopUpData] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  const ontoggle = (e) => {
    setToggle(true);
    setPopUpData(e);
  };

  return (
    <div className="homeBg   h-fit flex flex-col items-center justify-center">
      <h1 className="animate-bounce">Chuck Norris</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-4   bg-transparent text-white text-lg   md:gap-y-3  md:w-fit">
        {data &&
          data.map((ele) => (
            <div
              onClick={() => ontoggle(ele)}
              className="xl:pt-10 shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg  
              cursor-pointer false md:p-3"
              key = {ele}
            >
              <span className="flex justify-center items-center text-blue-900 font-bold capitalize text-sm md:text-2xl ">
                {ele}
              </span>
              <p className="hidden lg:block capitalize text-purple-800 text-sm  md:block ">
                Unlimited Jokes On {ele}
              </p>
            </div>
          ))}
      </div>
   
        {toggle && (
          <PopUp item={popUpData} onModalClose={(e) => setToggle(e)} />
        )}
    
    </div>
  );
};

export default Homepage;
