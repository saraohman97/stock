import getCurrentUser from "@/actions/getCurrentUser";
import DashboardNavbar from "@/components/dashboard-navbar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect("/auth");
  }

  return (
    <div>
      <DashboardNavbar currentUser={currentUser} />
      {children}
    </div>
  );
}
