import React from "react";

const Info = ({ selectedGuitar }) => {
  return (
    <div className="info-gitar">
      <div className="info-gitar-title">
        <h1>{selectedGuitar ? ` ${selectedGuitar}` : ""}</h1>
      </div>
    </div>
  );
};

export default Info;
