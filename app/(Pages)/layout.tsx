import Navbar from "@/app/Components/Navbar/Navbar";
import Footer from "@/app/Components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
