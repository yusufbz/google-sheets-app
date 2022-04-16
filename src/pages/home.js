import React from "react";
import AutomationsList from "../components/AutomationsList";
import Header from "../components/Header";

export default function Home() {
  const automations = [
    {
      id: "01",
      name: "marekting",
      createdDate: "24 mar, 2022",
      status: true,
    },
    {
      id: "02",
      name: "marekting",
      createdDate: "23 mar, 2022",
      status: true,
    },
    {
      id: "03",
      name: "marekting",
      createdDate: "14 jan, 2022",
      status: false,
    },
    {
      id: "04",
      name: "marekting",
      createdDate: "24 mar, 2022",
      status: true,
    },
    {
      id: "05",
      name: "marekting",
      createdDate: "23 mar, 2022",
      status: true,
    },
    {
      id: "06",
      name: "marekting",
      createdDate: "14 jan, 2022",
      status: false,
    },
  ];

  return (
    <div className="home">
      <div className="container-xl">
        <Header />
        <AutomationsList automations={automations} />
      </div>
    </div>
  );
}
