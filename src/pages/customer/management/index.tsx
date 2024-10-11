import { Button, Col, Row, Space, Table, Tooltip } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { FiTrash2 } from "react-icons/fi";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sample = (props: any) => {
  interface DataType {
    key: React.Key;
    id: number;
    name: string;
    contact: string;
    country: string;
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },

    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Contact",
      dataIndex: "contact",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Düzenle" color={"blue"}>
            <BsPencil className="cursorPointer" size={16} color="blue" />
          </Tooltip>

          <Tooltip title="Sil" color={"red"}>
            <FiTrash2 className="cursorPointer" size={16} color="red" />
          </Tooltip>
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      id: 11,
      name: "A müşterisi",
      country: "İstanbul",
      contact: "test@test.com",
    },
    {
      key: "2",
      id: 22,
      name: "B müşterisi",
      country: "İstanbul",
      contact: "test@test.com",
    },
    {
      key: "3",
      id: 13,
      name: "C müşterisi",
      country: "İstanbul",
      contact: "test@test.com",
    },
    {
      key: "4",
      id: 44,
      name: "D müşterisi",
      country: "Ankara",
      contact: "test@test.com",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Row gutter={[12, 36]}>
      <Col offset={18} span={4}>
        <Link to="/customer/create" type="primary">
          <Button block>Create New</Button>
        </Link>
      </Col>

      <Col offset={2} span={20}>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default Sample;
