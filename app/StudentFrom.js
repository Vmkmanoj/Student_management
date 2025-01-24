"use client";

import React from "react";
import { Form, Input, Button, Radio, Select, message, Card, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Home = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await fetch("https://backend-ozb3.vercel.app/add-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        message.success("Student added successfully");
        window.alert("Student added");
        form.resetFields();
      } else {
        const errorData = await response.json();
        console.error("Error adding student:", errorData.error || "Unknown error");
        message.error(`Failed to add student: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Failed to fetch:", error.message);
      message.error(`Failed to add student: ${error.message}`);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4", // Soft background color
        padding: "40px 20px",
      }}
    >
      <Col xs={24} sm={20} md={16} lg={12} xl={20}>
        <Card
          title="Add New Student"
          style={{
            borderRadius: "16px", // Rounded corners for card
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
            background: "#fff", // White background for card
            border: "none",
          }}
          bodyStyle={{ padding: "40px" }}
          headStyle={{
            background: "#009688", // Gradient color for the header
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.6rem",
            textAlign: "center",
            borderRadius: "16px 16px 0 0", // Rounded top corners
            padding: "20px 0",
          }}
        >
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
            <Row gutter={[24, 16]}>
              <Col xs={24}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Please input your name!" }]}
                  labelStyle={{ color: "#333", fontWeight: "bold" }} // Darker label color
                >
                  <Input placeholder="Enter student name" style={{ borderRadius: "8px", padding: "10px" }} />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Roll No"
                  name="rollNo"
                  rules={[{ required: true, message: "Please input your roll number!" }]}
                  labelStyle={{ color: "#333", fontWeight: "bold" }}
                >
                  <Input placeholder="Enter roll number" style={{ borderRadius: "8px", padding: "10px" }} />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ type: "email", message: "Please enter a valid email!" }]}
                  labelStyle={{ color: "#333", fontWeight: "bold" }}
                >
                  <Input placeholder="Enter email address" style={{ borderRadius: "8px", padding: "10px" }} />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[{ required: true, message: "Please select a gender!" }]}
                  labelStyle={{ color: "#333", fontWeight: "bold" }}
                >
                  <Radio.Group style={{ display: "flex", gap: "20px" }}>
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Department"
                  name="department"
                  rules={[{ required: true, message: "Please select a department!" }]}
                  labelStyle={{ color: "#333", fontWeight: "bold" }}
                >
                  <Select
                    placeholder="Select Department"
                    style={{
                      // borderRadius: "8px",
                      // padding: "10px",
                    }}
                  >
                    <Select.Option value="CSE">CSE</Select.Option>
                    <Select.Option value="IT">IT</Select.Option>
                    <Select.Option value="ECE">ECE</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      backgroundColor: "#009688", // Main button color
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      height: "48px",
                      boxShadow: "0 4px 10px rgba(0, 150, 136, 0.2)",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#00796b")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#009688")}
                  >
                    <PlusOutlined /> Add Student
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
