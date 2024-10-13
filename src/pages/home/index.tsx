import { Typography, Card, Image, Row, Col } from "antd";
import homeCardImage from "../../assets/home-card.png";
const { Paragraph, Text } = Typography;

const Home = (props: any) => {
  return (
    <Row>
      <Card className="home-card">
        <Row gutter={[12, 36]}>
          <Col span={24} order={1} md={{span:16,order:0}}>
            <Paragraph strong className="home-card-paragraph-1">
              <Text className="home-card-paragraph-text"> Difo Launchpad </Text>
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
          <Col span={24} order={0} md={{span:8,order:1}} >
            <Image preview={false} src={homeCardImage} />
          </Col>
        </Row>
      </Card>


    </Row>
  );
};

export default Home;
