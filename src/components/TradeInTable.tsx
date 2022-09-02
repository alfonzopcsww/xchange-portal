import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type TradeIn = {
  transactionNo: string;
  devices: string;
  tradeInDate: string;
  status: string;
  totalValue: number;
};

const defaultData: TradeIn[] = [
  {
    transactionNo: "12345",
    devices: "Multiple",
    tradeInDate: new Date().toDateString(),
    status: "Completed",
    totalValue: 5000,
  },
  {
    transactionNo: "12345",
    devices: "Multiple",
    tradeInDate: new Date().toDateString(),
    status: "Completed",
    totalValue: 5000,
  },
];

const columnHelper = createColumnHelper<TradeIn>();

const columns = [
  columnHelper.accessor("transactionNo", {
    header: "Transaction No.",
  }),
  columnHelper.accessor("devices", {
    header: "Devices",
  }),
  columnHelper.accessor("tradeInDate", {
    header: () => "Trade In Date",
  }),
  columnHelper.accessor("status", {
    header: () => "Status",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("totalValue", {
    header: "Total Value",
  }),
];

const TradeInTable = () => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id} fontWeight="600" color="black">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id} _hover={{bg:"gray.100"}}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div className="h-4" />
    </TableContainer>
  );
};

export default TradeInTable;
