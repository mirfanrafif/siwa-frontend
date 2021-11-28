import { Row, Col, Typography, Button, Skeleton, Table } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { EXT_API } from "../../utils/constant";
import MenuMakanan from "../../utils/models/menu";
import { MenuService } from "../../utils/services/MenuService";

export default function Transaksi() {
  const [listTransaksi, setListTransaksi] = useState(Array<MenuMakanan>());
  const [loading, setloading] = useState(false);

  const { getMenu } = MenuService()

  useEffect(() => {
    getMenu().then((res) => {
      setListTransaksi(res);
      setloading(false);
    });
  }, []);

  const columns = [
    {
      title: "Yang Melayani",
      dataIndex: "nama_pelayan",
      key: "nama_pelayan",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Tanggal Transaksi",
      dataIndex: "tanggal",
      key: "tanggal",
    },
  ];

  return (
    <div>
      <Row>
        <Col span={18}>
          <Typography.Title level={3}>Transaksi</Typography.Title>
        </Col>
        <Col span={6}>

        </Col>
      </Row>
      {loading ? (
        <Skeleton paragraph={{ rows: 10 }} active />
      ) : (
        <Table dataSource={listTransaksi} columns={columns} />
      )}
    </div>
  );
}
