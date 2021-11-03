import { Row, Col, Typography, Button, Skeleton, Table } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { EXT_API } from "../../constant";
import MenuMakanan from "../../models/menu";
import service from "../../services/MenuService";

export default function Transaksi() {
  const [listTransaksi, setListTransaksi] = useState(Array<MenuMakanan>());
  const [loading, setloading] = useState(false);
  useCallback(async () => {
    setloading(true);
    await service.getMenu().then((data) => {
      setListTransaksi(data);
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
          <Typography.Title level={3}>Menu Makanan</Typography.Title>
        </Col>
        <Col span={6}>
          <Button
            href="/admin/transaksi/tambah"
            type="primary"
            style={{ float: "right" }}
          >
            Tambah
          </Button>
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
