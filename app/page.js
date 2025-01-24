import Image from "next/image";
import { Col, Flex } from "antd";
import Navbar from "./Navbar/page";
import StudentFrom from "./StudentFrom";

export default function Home() {
  return (
    <Flex> 

    <Col span={4}>
      <Navbar />
    </Col>

    <Col span={8}>
        <StudentFrom></StudentFrom>
    </Col>
     
     
    </Flex>
  );
}