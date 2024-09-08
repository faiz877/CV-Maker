import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MainLayout from "../components/layout/MainLayout";

export default function Home() {
  return (
    <div>
      <div>
        <Header></Header>
        <MainLayout></MainLayout>
        <Footer></Footer>
      </div>
    </div>
  );
}
