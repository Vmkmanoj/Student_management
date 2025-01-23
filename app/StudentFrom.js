"use client";

import React from "react";
import { Form, Input, Button, Radio, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-10">
      
          {/* <h1 className="text-2xl font-bold text-center mb-6">Add Student</h1> */}
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
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input
                className="rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
            >
              <Input
                className="rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
            >
              <Input
                className="rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
            >
              <Radio.Group className="flex">
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
            >
              <Select
                className="rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Select Department"
              >
                <Select.Option value="CSE">
                  CSE
                </Select.Option>
                <Select.Option value="IT">IT</Select.Option>
                <Select.Option value="ECE">
                  ECE
                </Select.Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2"
              >
                <PlusOutlined /> Add Student
              </Button>
            </Form.Item>
          </Form>
        </div>
     
    </>
  );
};

export default Home;
