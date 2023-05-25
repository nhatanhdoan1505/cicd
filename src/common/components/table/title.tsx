import React from "react";
import { ArrowUp } from "common/icons/arrow-up";
import { ArrowDown } from "common/icons/arrow-down";
interface TitleProps {
  title: string,
  name: string,
  sortColumn?: any,
}

const TitleTable = ({ title, name, sortColumn }: TitleProps) => {
  return (
    <div className="flex items-center">
      <span className="mr-1.5 text-base">{title}</span>
      {sortColumn ? (
        sortColumn?.sortColumn?.dataIndex === name &&
          sortColumn?.sortOrder === "descend"
          ? <ArrowUp />
          : <ArrowDown />
      ) : (
        <></>
      )}
    </div>
  );
};

export default TitleTable;
