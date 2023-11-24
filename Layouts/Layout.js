import Sidebar from "../components/Sidebar";
export default function Layout({ children }) {
  return (
    <div>
      <Sidebar />
      <div className="lg:ml-64">
        <main className="max-w-[100vw] ">
          {children}
        </main>
      </div>
    </div>
  );
}
