import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PageLayout({ children }) {
  return (
    <>
      <Navbar /> {children} <Footer />{" "}
    </>
  );
}