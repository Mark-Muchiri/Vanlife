import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";

function VanDetail() {
  const { id } = useParams();
  return (
    <>
      <Nav />
      <h1>Van detail page goes here {id}</h1>
      <Footer />
    </>
  );
}

export default VanDetail;