import { AnimatePresence } from "framer-motion";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/output.css";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <AnimatePresence>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={2}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
      <Layout>
        <Navigation />
        <Main />
        <Footer />
      </Layout>
    </AnimatePresence>
  );
};

export default App;
