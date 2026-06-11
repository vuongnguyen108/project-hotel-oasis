import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="px-4 pt-6">
                  {children}
                </main>
            </div>
        </div>
    );
}
