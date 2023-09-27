import React from "react";

export const MainCategory = () => {
  return (
    <>
      <div className=" mx-auto flex-col md:max-lg:flex-row max-w-[1280px] mt-40 items-center space-y-4 px-2 py-10  md:gap-6 md:space-y-0">
        <h1 className="font-bold text-4xl ">Main Category</h1>
        <br />
        {/* Main Images */}
        <div className=" md:lg:max-w-[1280px] w-full m-auto flex flex-col md:lg:flex-row">
          {/* Mobile */}
          <div className=" md:max-lg:w-1/2  m-auto md:max-lg:mr-4 max-h-[800px] mb-4">
            <img
              src="https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              className=" md:lg:h-[800px] md:lg:object-cover"
              alt="img"
            />
          </div>
          {/* Laptops and HeadPhones */}
          <div className=" flex flex-col w-full md:lg:-w-1/2 md:lg:flex-col justify-between h-[800px] ">
            <div className=" w-full  h-[390px] ">
              <img
                src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                className="h-[390px] w-full object-cover"
                alt="img"
              />
            </div>
            <div className=" w-full  h-[390px]">
              <img
                src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhcHRvcHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                className="h-[390px] w-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
