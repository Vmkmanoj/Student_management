import { Flex, Col } from "antd";
import Navbar from "../Navbar/page";

export default function ViewStudent() {
  return (
    <Flex direction="column" style={{ height: '100vh' }}> 
      <Col span={4}> 
        <Navbar /> 
      </Col>
      <Col span={20}> 
        <h1 className="">Hello Student</h1> 
        {/* Rest of your student view content here */} 
      </Col>
    </Flex>
  );
}