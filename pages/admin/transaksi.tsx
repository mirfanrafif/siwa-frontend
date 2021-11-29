import { Row, Col, Typography, Button, Skeleton, Table } from "antd";
import router from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { EXT_API } from "../../utils/constant";
import MenuMakanan from "../../utils/models/menu";
import { MenuService } from "../../utils/services/MenuService";
import TransaksiService from "../../utils/services/TransaksiService";

export default function Transaksi() {
  const [listTransaksi, setListTransaksi] = useState([]);
  const [loading, setloading] = useState(false);

  const onRowClick = (record, rowIndex) => ({
    onClick: (event) => {
      router.push(`/admin/transaksi/${record.id}`);
    },
  });

  useEffect(() => {
    setloading(true)
    TransaksiService().getTransaksi().then((res) => {
      const dataTransaksi = res.map(transaksi => {
        const tanggal = new Date(transaksi.createdAt)
        return {
          id: transaksi.id,
          nama_kasir: transaksi.kasir.nama,
          tanggal: tanggal.toUTCString()
        }
      })
      setListTransaksi(dataTransaksi);
      setloading(false);
    }).catch(err => {
      Swal.fire({
        title: 'Gagal mengambil data',
        text: 'Gagal mengambil data transaksi : ' + err,
        icon: 'error'
      })
    })
  }, []);

  const columns = [
    {
      title: 'No. ',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: "Nama Kasir",
      dataIndex: "nama_kasir",
      key: "nama_kasir",
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
        <Table dataSource={listTransaksi}
          columns={columns}
          rowKey="id"
          onRow={onRowClick} />
      )}
    </div>
  );
}
