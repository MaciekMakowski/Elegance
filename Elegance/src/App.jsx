import { AnimatePresence } from "framer-motion";
import "./assets/output.css";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <AnimatePresence>
      <Layout>
        <Navigation />
        <Main />
        <Footer />
      </Layout>
    </AnimatePresence>
  );
};

export default App;
