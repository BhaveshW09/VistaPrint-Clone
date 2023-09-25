import React from "react";
import { MoveRight } from "lucide-react";

export const Card = (item) => {
  return (
    <div>
      <div className=" w-56">
        <img src={item.thumbnail} alt="img" className=" h-48 " width={250} />

        <div className=" flex items-center justify-center gap-2 mt-3 font-medium">
          {item.title.split(" ").slice(0, 2).join(" ")}
          <span>
            <MoveRight />
          </span>
        </div>
      </div>
    </div>
  );
};
