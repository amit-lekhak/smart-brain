import React from "react";

const Facebox = ({ boxes,imageSize:{height,width} }) => {
  return (
    <>
      {boxes.map((box) => {
        return <div
         key={box.id}
         style={{
             "position": "absolute",
             "top": `${box.region_info.bounding_box.top_row*height}px`,
             "bottom" : `${height-box.region_info.bounding_box.bottom_row*height}px`,
             "left": `${box.region_info.bounding_box.left_col*width}px`,
             "right": `${width-box.region_info.bounding_box.right_col*width}px`,
             "border": "3px solid #149df2",
             "cursor": "pointer",
         }}
         >
         </div>;
      })}
    </>
  );
};

export default Facebox;
