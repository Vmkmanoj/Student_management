"use client";

import { Flex, Col, Row, Card, Spin, Button } from "antd";
import Navbar from "../Navbar/page";
import { useState, useEffect } from "react";
import { DeleteOutlined } from "@ant-design/icons"

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
      const response = await fetch(`http://127.0.0.1:5000/delete-user?id=${studentId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== studentId));
    } catch (err) {
      setError(`Failed to delete student: ${err.message}`);
    }
};



  return (
    <Flex direction="column" style={{ height: "100vh" }}>
      <Col span={4}>
        <Navbar />
      </Col>
      <Col span={20} style={{ padding: "20px" }}>
        <h1 className="text-2xl font-bold mb-6">Student List</h1>
        {error && <p className="text-red-500">{error}</p>}
        {loading && (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <Spin size="large" tip="Loading Students..." />
          </div>
        )}
        {!loading && students.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "50px" }}>No students found.</p>
        )}
        {!loading && students.length > 0 && (
          <Row gutter={[16, 16]}>
            {students.map((student) => (
              <Col key={student.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  title={student.name}
                  bordered={true}
                  hoverable
                  style={{ width: "100%", textAlign: "center" }}
                  actions={[
                    <Button
                      type="danger"
                      onClick={() => handleDelete(student.id)}
                    >
                     <DeleteOutlined color="red"/>
                    </Button>,
                  ]}
                >
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
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Col>
    </Flex>
  );
}
