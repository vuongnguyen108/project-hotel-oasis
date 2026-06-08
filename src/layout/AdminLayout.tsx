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
                <main>
                  {children}
                </main>
            </div>
        </div>
    );
}
