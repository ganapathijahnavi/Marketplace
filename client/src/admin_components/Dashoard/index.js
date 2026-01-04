import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Wrapper,
  Heading,
  CardGrid,
  StatCard,
  CardTitle,
  CardValue,
  ActionButton,
} from "./styledComponents";

const Dashboard = () => {
  const [summary, setSummary] = useState({
    projects: 0,
    users: 0,
    orders: 0,
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const token = localStorage.getItem("adminJwtToken");
        if (!token) return;

        const res = await axios.get(
          "http://localhost:5100/api/admin/summary",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setSummary({
          projects: res.data.projectCount || 0,
          users: res.data.userCount || 0,
          orders: res.data.orderCount || 0,
        });
      } catch (err) {
        console.error(
          "Failed to fetch summary:",
          err.response?.data || err.message
        );
      }
    };

    fetchSummary();
  }, []);

  const statCards = [
    {
      title: "Total Carbon Projects",
      value: summary.projects,
      link: "/admin/all-products", // keeping route unchanged
      type: "view",
    },
    {
      title: "Total Users",
      value: summary.users,
      link: "/admin/users",
      type: "view",
    },
    {
      title: "Total Orders",
      value: summary.orders,
      link: "/admin/orders",
      type: "view",
    },
    {
      title: "Add Carbon Project",
      value: "+",
      link: "/admin/add-product", // keeping route unchanged
      type: "add",
    },
    {
      title: "Add Project Category",
      value: "+",
      link: "/admin/add-category",
      type: "add",
    },
  ];

  return (
    <Wrapper>
      <Heading>Admin Dashboard</Heading>

      <CardGrid>
        {statCards.map((card, index) => (
          <StatCard key={index}>
            <CardTitle>{card.title}</CardTitle>
            <CardValue>{card.value}</CardValue>
            <ActionButton to={card.link} type={card.type}>
              {card.type === "add" ? "Add" : "View"}
            </ActionButton>
          </StatCard>
        ))}
      </CardGrid>
    </Wrapper>
  );
};

export default Dashboard;
