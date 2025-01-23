"use client";

import React, { useState } from "react";
import { Form, Input, Button, Radio, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
// import "./css/StudentForm.css";

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const Home = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-16 md:mt-24">
        <div className="bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center mb-6">
            Add Student
          </h1>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="space-y-6"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
              className="flex flex-col"
            >
              <Input
                className="rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item
              label="Roll No"
              name="rollNo"
              rules={[
                {
                  required: true,
                  message: "Please input your roll number!",
                },
              ]}
              className="flex flex-col"
            >
              <Input
                className="rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
              className="flex flex-col"
            >
              <Input
                className="rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please select a gender!",
                },
              ]}
              className="flex flex-col"
            >
              <Radio.Group>
                <Radio value="male" className="mr-4">
                  Male
                </Radio>
                <Radio value="female">Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              label="Department"
              name="department"
              rules={[
                {
                  required: true,
                  message: "Please select a department!",
                },
              ]}
              className="flex flex-col"
            >
              <Select className="rounded-lg">
                <Select.Option value="CSE">
                  Computer Science Engineering
                </Select.Option>
                <Select.Option value="IT">
                  Information Technology
                </Select.Option>
                <Select.Option value="ECE">
                  Electronics and Communication Engineering
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-2"
              >
                <PlusOutlined /> Add Student
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Home;
