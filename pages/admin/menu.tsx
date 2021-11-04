import React, { useState, useCallback, useEffect } from "react";
import { Typography, Table, Skeleton, Row, Col, Button } from "antd";
import MenuMakanan from "../../models/menu";
import { MenuService } from "../../services/MenuService";
import { useRouter } from "next/dist/client/router";

export default function Menu() {
  const [listMakanan, setListMakanan] = useState(Array<MenuMakanan>());
  const [loading, setloading] = useState(false);
  const { getMenu } = MenuService();
  const router = useRouter();

  const getData = useCallback(async () => {
    setloading(true);
    getMenu().then((res) => {
      setListMakanan(res);
      setloading(false);
    });
  }, [getMenu]);

  const onRowClick = (record, rowIndex) => {
    return {
      onClick: (event) => {
        console.log(record.id);
        router.push(`/admin/menu/${record.id}`);
      },
    };
  };

  useEffect(() => {
    getData();
  }, [getData]);

  const columns = [
    {
      title: "No. ",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Nama",
      dataIndex: "nama",
      key: "nama",
    },
    {
      title: "Harga",
      dataIndex: "harga",
      key: "harga",
    },
    {
      title: "Url gambar",
      dataIndex: "url_gambar",
      key: "url_gambar",
    },
  ];

  return (
    <div>
      <Row>
        <Col span={18}>
          <Typography.Title level={3}>Menu Makanan</Typography.Title>
        </Col>
        <Col span={6}>
          {" "}
          <Button
            href="/admin/menu/tambah"
            type="primary"
            style={{ float: "right" }}
          >
            Tambah
          </Button>{" "}
        </Col>
      </Row>
      {loading ? (
        <Skeleton paragraph={{ rows: 10 }} active />
      ) : (
        <Table
          dataSource={listMakanan}
          columns={columns}
          rowKey="id"
          onRow={onRowClick}
        />
      )}
    </div>
  );
}
