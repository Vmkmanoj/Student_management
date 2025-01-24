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
        window.alert("Update Student");
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
    <div className="flex justify-center items-center  sm:px-6 lg:px-16 mt-36">
      <Card
        title="Add New Student"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "8px",
          margin: "0 auto", // Centering the card
        }}
        bodyStyle={{ padding: "24px" }}
        headStyle={{
          backgroundColor: "#1890ff",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="space-y-4"
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Enter student name" />
          </Form.Item>

          <Form.Item
            label="Roll No"
            name="rollNo"
            rules={[{ required: true, message: "Please input your roll number!" }]}
          >
            <Input placeholder="Enter roll number" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email", message: "Please enter a valid email!" }]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>

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

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                backgroundColor: "#1890ff",
                borderColor: "#1890ff",
                borderRadius: "5px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#40a9ff")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#1890ff")}
            >
              <PlusOutlined /> Add Student
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Home;
