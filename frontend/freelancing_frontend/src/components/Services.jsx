import ServiceItem from "./ServiceItem";
import p1 from "../icons/p1.png";
import p2 from "../icons/p2.png";
import p3 from "../icons/p3.png";



const Services = () => {

  const services = [
    {
      id: 1,
      name: "Neha Desai",
      title: "Content Writer | Storytelling",
     
      price: 15,
      image: p2
    },
    {
      id: 2,
      name: "Mark Latham",
      title: "Content Marketer",
   
      price: 12,
      image: p1
    },
    {
      id: 3,
      name: "Ashley Jones",
      title: "UX/UI Designer",
      
      price: 18,
      image: p3
    }
  ];

  return (
    <div style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap"
    }}>
      {services.map(service => (
        <ServiceItem key={service.id} {...service} />
      ))}
    </div>
  );
};

export default Services;
