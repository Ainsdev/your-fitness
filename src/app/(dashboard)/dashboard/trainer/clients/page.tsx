import { columns } from "@/components/tables/clients/columns";
import { DataTable } from "@/components/tables/clients/data-table";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "a@example.com",
    },{
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "b@example.com",
    },
    // ...
  ];
}

export default async function ClientsPage() {
  const data = await getData();
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
