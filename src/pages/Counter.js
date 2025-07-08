import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Counter() {
  return (
    <>
      <section>
        <div className="bg-yellow">
          <div>
            <div>
              <h1>2k</h1>
              <span>
                <FaPlus />
              </span>
            </div>
            <div>
              <h2>Consultations</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
