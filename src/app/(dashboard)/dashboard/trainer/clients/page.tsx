



async function getData(): Promise<any> {
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
      {/* <DataTable columns={columns} data={data} /> */}
    </div>
  );
}
