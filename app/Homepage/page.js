import { Col, Flex } from "antd";
import Navbar from "../Navbar/page";

export default function HomePage() {
  return (
    <>
      <Flex direction="column" style={{ height: '100vh' }}> 
        <Col span={4}> 
          <Navbar /> 
        </Col>
        <Col span={20}> 
          <h1>Hello, it's the home page</h1> 
          {/* Rest of your home page content here */} 
        </Col>
      </Flex>
    </>
  );
}