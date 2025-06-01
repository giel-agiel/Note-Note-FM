import React from "react";
import { Link } from "react-router-dom";
import { Vlan } from "./VlanData";

const Home = () => {
  const regions = Vlan.map((item) => Object.keys(item)[0]);

  return (
    <div>
      <h1>Daftar Region</h1>
      <ul>
        {regions.map((region) => (
          <li key={region}>
            <Link to={`/vlan/${region}`}>{region.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;