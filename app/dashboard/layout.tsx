import SideNav from "@/app/ui/dashboard/sidenav";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Authentication check
  const session = await auth();
  if (!session) redirect("/login");

  // Page layout
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
