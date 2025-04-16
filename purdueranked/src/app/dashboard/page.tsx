import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ScrapeProfileForm } from "@/components/ScrapeProfileForm";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  // Redirect if not logged in
  if (!session?.user) {
    redirect("/api/auth/signin");
  }
  
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <ScrapeProfileForm />
        </div>
        
        <div className="border rounded-md p-5 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Your Account</h2>
          <div className="space-y-2">
            <p><strong>Name:</strong> {session.user.name || "Not provided"}</p>
            <p><strong>Email:</strong> {session.user.email || "Not provided"}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 