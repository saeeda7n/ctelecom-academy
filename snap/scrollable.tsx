import React from "react";

function Scrollable() {
 return (
  <div className="w-screen overflow-scroll">
   <div className="flex w-max flex-1">
    <div className="h-32 w-screen bg-red-900">A</div>
    <div className="h-32 w-screen bg-blue-500">B</div>
    <div className="h-32 w-screen bg-blue-500">C</div>
    <div className="h-32 w-screen bg-blue-500">D</div>
   </div>
  </div>
 );
}
