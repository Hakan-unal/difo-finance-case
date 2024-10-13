import { Typography, Card, Image, Row, Col, Badge, Input } from "antd";
import homeCardImage from "../../assets/home-card.png";
import {
  AiOutlinePicture,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { coinList } from "../../staticData/coinList.json";
import { Divider } from "antd";

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
      <Col span={24}>
        <Card className="home-card">
          <Row gutter={[12, 36]}>
            <Col span={24} order={1} md={{ span: 16, order: 0 }}>
              <Paragraph strong className="home-card-paragraph-1">
                <Text className="home-card-paragraph-text">
                  {" "}
                  Difo Launchpad{" "}
                </Text>
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
      </Col>

      <Col span={24}>
        <Divider style={{ borderColor: "#85abf4" }}>
          <Title className="title-2 text-center">TRENDING</Title>
        </Divider>

        <Row gutter={[12, 12]}>
          {coinList.map((coin: any, index: number) => {
            return (
              <Col key={index} span={4}>
                <Badge.Ribbon
                  color={coin.color}
                  text={
                    <>
                      {coin.color === "green" ? (
                        <AiOutlineArrowUp />
                      ) : (
                        <AiOutlineArrowDown />
                      )}{" "}
                      {coin.rate}%
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

      <Divider style={{ borderColor: "#85abf4" }} />

      <Col span={24}>
        <Row>
          <Col span={9} offset={1}>
            <Card className="coin-card">
              <Text className="text-white">
                Would You Like to Earn $12 for EachFriend You Invite?
              </Text>
            </Card>
          </Col>
          <Col span={1} offset={1}>
            <AiOutlinePicture color="blue" size={50} />
          </Col>
          <Col span={9} offset={1}>
            <Card className="coin-card">
              <Text className="text-white">
                Buy $DIFO token now to get early access to promising projects.
              </Text>
            </Card>
          </Col>
        </Row>
      </Col>

      <Divider style={{ borderColor: "#85abf4" }} />

      <Col span={22} offset={1}>
        <Card className="counter-card text-center text-bold">
          <Paragraph className="text-white rf-7">
            The highly anticipated discounted public pre-sale rounds of $DIFO
            token are now live.{" "}
          </Paragraph>

          <Row>
            <Col
              span={3}
              offset={5}
              className="counter-input-card text-white f-22 cursor-pointer"
            >
              2 <br />
              Day
            </Col>
            <Col
              span={3}
              offset={1}
              className="counter-input-card text-white f-22 cursor-pointer"
            >
              23
              <br /> Hour
            </Col>
            <Col
              span={3}
              offset={1}
              className="counter-input-card text-white f-22 cursor-pointer"
            >
              59
              <br /> Minute
            </Col>
            <Col
              span={3}
              offset={1}
              className="counter-input-card text-white f-22 cursor-pointer"
            >
              54 <br />
              Second
            </Col>
          </Row>

          <Row style={{ marginTop: 50 }}>
            <Col span={24}>
              <Paragraph className="text-white rf-6 text-bold">
                Sale Details of the $DIFO Token
              </Paragraph>
            </Col>
            <Col span={24}>
              <Paragraph className="text-white f-14">
                The public sale will have 3 rounds. Round 1 will satrt on
                October 15 at 15:00 UTC.{" "}
              </Paragraph>
            </Col>
          </Row>
          <Row gutter={[12, 36]}>
            <Col className="bg-dark">
              <Card>
                <Title className="text-green">Total Token Supply</Title>
                <Paragraph>Total Token Supply</Paragraph>
              </Card>
            </Col>
            <Col>
              <Card>
                <Title className="text-green">Type of Sale</Title>
                <Paragraph>Public Sale</Paragraph>
              </Card>
            </Col>
            <Col>
              <Card>
                <Title className="text-green">Token Sale Format</Title>
                <Paragraph>First come, first served</Paragraph>
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default Home;
