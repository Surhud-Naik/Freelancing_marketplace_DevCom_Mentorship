import ServiceItem from "./ServiceItem";
import p1 from "../icons/p1.png";
import p2 from "../icons/p2.png";
import p3 from "../icons/p3.png";

const Services = ({ services }) => {

  const dummyServices = [
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

  const dataToRender =
    services && services.length > 0 ? services : dummyServices;

  return (
    <div style={{
      display: "flex",
      gap: "20px",
      flexWrap: "wrap"
    }}>
      {dataToRender.map(service => (
        <ServiceItem
          key={service.id}
          name={service.Name || service.name}
          title={service.Service_Name || service.title}
          price={service.Price || service.price}
          image={service.Profile_image || service.image}
        />
      ))}
    </div>
  );
};

export default Services;

