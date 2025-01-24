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
        background: "linear-gradient(135deg, #e0f7fa, #e1bee7)",
        padding: "20px",
      }}
    >
      <Col xs={24} sm={20} md={16} lg={12} xl={10}>
        <Card
          title="Add New Student"
          style={{
            borderRadius: "12px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
          bodyStyle={{ padding: "24px" }}
          headStyle={{
            backgroundColor: "#673ab7",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.5rem",
            textAlign: "center",
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
                >
                  <Input placeholder="Enter student name" />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Roll No"
                  name="rollNo"
                  rules={[{ required: true, message: "Please input your roll number!" }]}
                >
                  <Input placeholder="Enter roll number" />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ type: "email", message: "Please enter a valid email!" }]}
                >
                  <Input placeholder="Enter email address" />
                </Form.Item>
              </Col>

              <Col xs={24}>
                <Form.Item
                  label="Gender"
                  name="gender"
                  rules={[{ required: true, message: "Please select a gender!" }]}
                >
                  <Radio.Group>
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
                >
                  <Select placeholder="Select Department">
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
                      backgroundColor: "#673ab7",
                      borderColor: "#673ab7",
                      color: "#fff",
                      borderRadius: "8px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      height: "48px",
                      boxShadow: "0 4px 10px rgba(103, 58, 183, 0.3)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#5e35b1")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#673ab7")}
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
