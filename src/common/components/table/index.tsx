import { Table as TableAntd } from "antd";
import React from "react";
import type { } from 'antd/es/table';

interface TableProps {
  dataSource: any;
  scroll?: {
    x: number
  };
  pagination: any
  column: any
  onChange: (paginate: any, _: any, sorter: any) => Promise<void>
  loading: boolean
};

const Table = ({ dataSource, scroll = { x: 1300 }, pagination, column, onChange, loading, ...props }: TableProps) => {
  return (
    <div className="table-wrapper">
      <TableAntd
        showSorterTooltip={false}
        rowKey="id"
        dataSource={dataSource}
        locale={{ emptyText: "データなし" }}
        scroll={scroll}
        columns={column}
        onChange={onChange}
        pagination={{
          ...pagination,
          pageSizeOptions: [10, 20, 50],
          showSizeChanger: true,
          locale: { items_per_page: "件" },
        }}
        loading={loading}
        {...props}
      />
    </div>
  );
};

export default Table;
