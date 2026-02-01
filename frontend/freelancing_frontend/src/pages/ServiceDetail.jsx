import { useParams } from "react-router-dom";
import ServiceDetailItem from "../components/ServiceDetailItem";
import p1 from "../icons/p1.png";
import p2 from "../icons/p2.png";
import p3 from "../icons/p3.png";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Searchtool from "../components/Searchtool";

const ServiceDetail = () => {

  const { id } = useParams();

  const service = {
    id,
    name: "Neha Desai",
    title: "Content Writer | Storyteller & Brand Voice Specialist",
    rating: 4.85,
    price: 15,
    email: "nehads123@gmail.com",
    phone: "+91 95638 78934",
    image: p2 ,
    skills: [
      "Website Content",
      "Blog Writing",
      "Brand Storytelling",
      "SEO Content"
    ],
    description:
      "I specialize in crafting engaging content that connects brands with their audience."
  };

 return (
  <div className="container">
    <Sidebar />
    <div className="main-content">
      <Header />
      <ServiceDetailItem service={service} />
    </div>
  </div>
);

};


export default ServiceDetail;




 