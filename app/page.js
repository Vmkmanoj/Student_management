import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import Navbar from "./Navbar/page";
import StudentFrom from "./StudentFrom";

export default function Home() {
  return (
    <Row
      gutter={[16, 16]} // Adds spacing between columns
      style={{
        minHeight: "100vh",
        // padding: "20px",
        background: "linear-gradient(135deg, #e3f2fd, #ede7f6)", // Gradient background
      }}
    >
      {/* Navbar Column */}
      <Col
        xs={24} // Full width on extra small screens
        sm={6} // 6-column width on small screens
        md={5} // 5-column width on medium screens
        lg={4} // 4-column width on large screens
        xl={4} // 4-column width on extra-large screens
        style={{
          // background: "#fff",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for navbar
          borderRadius: "8px",
          // padding: "16px",
        }}
      >
        <Navbar />
      </Col>

      {/* Student Form Column */}
      <Col
        xs={24}
        sm={18}
        md={14}
        lg={10}
        xl={8}
        style={{
          // background: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          // padding: "16px",
          margin: "0 auto", // Center the column
        }}
      >
        <StudentFrom />
      </Col>
    </Row>
  );
}
