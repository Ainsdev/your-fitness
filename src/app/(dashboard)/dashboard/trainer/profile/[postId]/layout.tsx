import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full p-1 space-y-4">
      <Button asChild variant="link">
        <Link href="/dashboard/trainer/profile">
          <ArrowLeftIcon />
          Volver a mis planes
        </Link>
      </Button>
      {children}
    </div>
  );
}
