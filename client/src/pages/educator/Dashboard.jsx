import React from "react";
import {
  FaBook,
  FaUsers,
  FaRupeeSign,
  FaStar,
} from "react-icons/fa";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Courses",
      value: "8",
      icon: <FaBook size={30} color="#4F46E5" />,
    },
    {
      title: "Students",
      value: "256",
      icon: <FaUsers size={30} color="#16A34A" />,
    },
    {
      title: "Rating",
      value: "4.8",
      icon: <FaStar size={30} color="#2563EB" />,
    },
  ];

  return (
    <div style={{ padding: "30px", background: "#f5f7fb", minHeight: "100vh" }}>

      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Welcome Back 
      </h1>

      <p style={{ color: "gray", marginBottom: "30px" }}>
        Here's what's happening with your courses today.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,.08)",
            }}
          >
            {card.icon}

            <h3>{card.title}</h3>

            <h2>{card.value}</h2>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,.08)",
        }}
      >
        <h2>My Courses</h2>

        <table width="100%" cellPadding="15">
          <thead>
            <tr>
              <th align="left">Course</th>
              <th>Students</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>React for Beginners</td>
              <td align="center">85</td>
              <td align="center">₹499</td>
              <td align="center">Published</td>
            </tr>

            <tr>
              <td>JavaScript Mastery</td>
              <td align="center">65</td>
              <td align="center">₹699</td>
              <td align="center">Published</td>
            </tr>

            <tr>
              <td>Python Complete Course</td>
              <td align="center">106</td>
              <td align="center">₹799</td>
              <td align="center">Draft</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;