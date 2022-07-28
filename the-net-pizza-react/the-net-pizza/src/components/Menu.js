import React from "react";
import MenuItem from "./MenuItem";

export default function Menu({ piatti }) {
  return (
    <section className="menu">
      <div className="row">
        <div className="col-12">
          <h2 className="section-title">I Nostri Piatti</h2>
          <div className="separator"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 pt-5 pb-2">
          <h3>Antipasti</h3>
        </div>
        {piatti
          .filter((x) => x.category === "antipasti")
          .map((piatto, index) => (
            <MenuItem key={index} piatto={piatto} />
          ))}
      </div>

      <div className="row ">
        <div className="col-12 pt-5 pb-2">
          <h3>Primi</h3>
        </div>
        {piatti
          .filter((x) => x.category === "primi")
          .map((piatto, index) => (
            <MenuItem key={index} piatto={piatto} />
          ))}
      </div>

      <div className="row ">
        <div className="col-12 pt-5 pb-2">
          <h3>Dolci</h3>
        </div>
        {piatti
          .filter((x) => x.category === "dolci")
          .map((piatto, index) => (
            <MenuItem key={index} piatto={piatto} />
          ))}
      </div>
    </section>
  );
}
