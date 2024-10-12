import { Typography, Card, Image, Row, Col } from "antd";
import homeCardImage from "../../assets/home-card.png";
const { Paragraph, Text } = Typography;

const Home = (props: any) => {
  return (
    <Card className="home-card">
      <Row>
        <Col span={24} md={16}>
          <Paragraph strong className="home-card-paragraph-1">
            <Text  className="home-card-paragraph-text"> Difo Launchpad </Text>
            is a new generation hybrid launch ramp that brings together the
            valuable features of both centralized
            <Text className="home-card-paragraph-text"> IEO </Text>
            platforms and decentralized
            <Text className="home-card-paragraph-text"> IDO </Text>
            platforms
          </Paragraph>
          <Paragraph className="home-card-paragraph-2">
            Gain early access to promising ideas of tomorrow with Difo
            Launchpad.
          </Paragraph>
        </Col>
        <Col span={24} md={8}>
          <Image  preview={false} src={homeCardImage} />
        </Col>
      </Row>
    </Card>
  );
};

export default Home;
