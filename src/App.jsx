import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MainLayout from "./components/layout/MainLayout";
import { CVProvider } from "./context/CVContext";

export default function App() {
  return (
    <div>
      <CVProvider>
        <Header></Header>
        <MainLayout></MainLayout>
        <Footer></Footer>
      </CVProvider>
    </div>
  );
}
