import React from "react";

const Footer = () => {
  return (
    <div>
      {/* ***** Footer Start *****  */}
      <footer className="p-3" style={{ "backgroundColor": "#ed563b"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 fs-5">
              <p>
                Copyright © 2022 &nbsp;&nbsp;<a style={{ "color": "white"}} href="#!">Surajit Pal</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
