import React from "react";

function Footr() {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #0d6efd;
            color: white;
            text-align: center;
            padding: 25px;
          }

          .footer h3 {
            margin-bottom: 10px;
          }

          .footer p {
            margin: 5px;
          }
        `}
      </style>

      <footer className="footer">
        <h3>LTS - Ladder To Success</h3>

        <p>Maths & Coding Classes</p>

        <p>
          © 2026 LTS. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footr;