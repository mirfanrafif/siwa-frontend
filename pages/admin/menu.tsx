import React, { useState, useCallback, useEffect } from "react";
import { Typography, Table, Skeleton, Row, Col, Button } from "antd";
import MenuMakanan from "../../utils/models/menu";
import { MenuService } from "../../utils/services/MenuService";
import { useRouter } from "next/dist/client/router";
import { connect } from "react-redux";

export function Menu() {
  const [listMakanan, setListMakanan] = useState(Array<MenuMakanan>());
  const [dataLoading, setDataLoading] = useState(false);
  const { getMenu } = MenuService();

  const router = useRouter();

  const onRowClick = (record, rowIndex) => ({
    onClick: (event) => {
      router.push(`/admin/menu/${record.id}`);
    },
  });

  const onClickTambah = () => {
    router.push('/admin/menu/tambah')
  }

  useEffect(() => {
    setDataLoading(true);
    getMenu().then((res) => {
      setListMakanan(res);
      setDataLoading(false);
    });
  }, []);

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
            onClick={onClickTambah}
            type="primary"
            style={{ float: "right" }}
          >
            Tambah
          </Button>{" "}
        </Col>
      </Row>
      {dataLoading ? (
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

export default connect()(Menu)
