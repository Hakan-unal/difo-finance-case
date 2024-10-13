import { Typography, Card, Image, Row, Col, Badge } from "antd";
import homeCardImage from "../../assets/home-card.png";
import {
  AiOutlinePicture,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { coinList } from "../../staticData/coinList.json";
const { Paragraph, Text, Title } = Typography;

const Home = (props: any) => {
  const CoinIcon = (type: any) => {
    return (
      <AiOutlinePicture size={25} color="red">
        {type}
      </AiOutlinePicture>
    );
  };

  return (
    <Row gutter={[0, 36]}>
      <Card className="home-card">
        <Row gutter={[12, 36]}>
          <Col span={24} order={1} md={{ span: 16, order: 0 }}>
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
          <Col span={24} order={0} md={{ span: 8, order: 1 }}>
            <Image preview={false} src={homeCardImage} />
          </Col>
        </Row>
      </Card>

      <Col span={24}>
        <Title className="title-2 text-center">TRENDING </Title>

        <Row gutter={[12, 12]}>
          {coinList.map((coin: any, index: number) => {
            return (
              <Col key={index} span={4}>
                <Badge.Ribbon
                  color={coin.color}
                  text={
                    <>
                      {" "}
                      {coin.color === "green" ? (
                        <AiOutlineArrowUp />
                      ) : (
                        <AiOutlineArrowDown />
                      )}{" "}
                      {coin.rate}
                    </>
                  }
                >
                  <Card className="coin-card cursor-pointer">
                    <Row>
                      <Col span={6}>
                        <CoinIcon type={coin.icon} />
                      </Col>
                      <Col span={12}>
                        <Paragraph className="text-white f-12 text-bold">
                          {coin.name}
                        </Paragraph>
                        <Paragraph className="text-white f-14">
                         {coin.price}
                        </Paragraph>
                      </Col>
                    </Row>
                  </Card>
                </Badge.Ribbon>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
