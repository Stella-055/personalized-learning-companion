import { PricingTable } from "@clerk/nextjs";

const page = () => {
  return (
    <main className=" flex flex-wrap justify-center pt-20">
      <PricingTable />
    </main>
  );
};

export default page;
