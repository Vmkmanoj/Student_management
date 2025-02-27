"use client";

import { Flex, Col, Row, Card, Skeleton, Button, Typography } from "antd";
import Navbar from "../Navbar/page";
import { useState, useEffect } from "react";
import { DeleteOutlined, UserOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function ViewStudent() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://backend-ozb3.vercel.app/getUser");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setStudents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const handleDelete = async (studentId) => {
    try {
      const response = await fetch(
        `https://backend-ozb3.vercel.app/delete-user?id=${studentId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== studentId)
      );
    } catch (err) {
      setError(`Failed to delete student: ${err.message}`);
    }
  };

  return (
    <Flex direction="column" style={{ minHeight: "100vh", backgroundColor: "#303030" }}>
      <Col span={4}>
        <Navbar />
      </Col>
      <Col span={20} style={{ padding: "20px" }}>
        <Title level={2} className="mb-6 text-center" style={{ color: "#ffffff" }}>
          <UserOutlined /> Student List
        </Title>

        {error && (
          <p style={{ color: "#f5222d", textAlign: "center" }}>{error}</p>
        )}

        {loading && (
          <Row gutter={[16, 16]}>
            {Array.from({ length: 8 }).map((_, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Skeleton active paragraph={{ rows: 4 }} />
              </Col>
            ))}
          </Row>
        )}

        {!loading && students.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "50px" }}>
            No students found.
          </p>
        )}

        {!loading && students.length > 0 && (
          <Row gutter={[16, 16]}>
            {students.map((student) => (
              <Col key={student.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  title={<div style={{ textAlign: "center" }}>{student.name}</div>}
                  bordered={true}
                  hoverable
                  style={{
                    width: "100%",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    marginTop: "30px",
                    backgroundColor: "#ffffff", // Card background
                  }}
                  actions={[
                    <Button
                      type="danger"
                      onClick={() => handleDelete(student.id)}
                      icon={<DeleteOutlined />}
                      size="large"
                      style={{
                        backgroundColor: "#ff4d4f", // Delete button color
                        borderColor: "#ff4d4f",
                        color: "#fff",
                      }}
                    >
                      Delete
                    </Button>,
                  ]}
                >
                  <div className="font-sans">
                    <p>
                      <strong>Roll No:</strong> {student.roll_no}
                    </p>
                    <p>
                      <strong>Email:</strong> {student.email}
                    </p>
                    <p>
                      <strong>Gender:</strong> {student.gender}
                    </p>
                    <p>
                      <strong>Department:</strong> {student.department}
                    </p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </Flex>
  );
}
