import { Typography, Card, Image, Row, Col, Button } from "antd";
import homeCardImage from "../../assets/home-card.png";
const { Paragraph, Text, Title } = Typography;
import { AiOutlinePicture } from "react-icons/ai";

const Home = (props: any) => {
  const CoinIcon = (type: any) => {
    return (
      <AiOutlinePicture size={25} color="red">
        {type}
      </AiOutlinePicture>
    );
  };

  const coinList = [
    {
      icon: "SOL",
      name: "SOL/USDT",
      price: 152.59,
      rate: 2.14,
      color: "red",
    },
    {
      icon: "SOL",
      name: "SOL/USDT",
      price: 152.59,
      rate: 2.14,
      color: "green",
    },
    {
      icon: "SOL",
      name: "SOL/USDT",
      price: 152.59,
      rate: 2.14,
      color: "red",
    },
    {
      icon: "SOL",
      name: "SOL/USDT",
      price: 152.59,
      rate: 2.14,
      color: "green",
    },
    {
      icon: "SOL",
      name: "SOL/USDT",
      price: 152.59,
      rate: 2.14,
      color: "green",
    },
    {
      icon: "SOL",
      name: "SOL/USDT",
      price: 152.59,
      rate: 2.14,
      color: "red",
    },
  ];
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
        <Title className="paragraph-2">TRENDING </Title>

        <Row gutter={[12, 24]}>
          {coinList.map((coin: any, index: number) => {
            return (
              <Col span={4}>
                <Card  className="coin-card cursor-pointer">
                  <Row>
                    <Col span={6}>
                      <CoinIcon type={coin.icon} />
                    </Col>
                    <Col span={12}>
                      <Text className="text-white f-14 text-bold">{coin.name}</Text>
                      <Text className="text-white f-12">{coin.price}</Text>
                    </Col>
                    <Col span={6}>
                      <Text style={{color:coin.color}}>{coin.rate}</Text>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};

export default Home;
