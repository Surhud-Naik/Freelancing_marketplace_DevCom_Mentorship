import "./ServiceDetailItem.css";

const ServiceDetailItem = ({ service }) => {

  return (
    <div className="detcontainer">

      <div className="dethead">

        <img src={service.image} alt={service.name} className="detimg" />

        <div className="detinfo">
          <h2>{service.name}</h2>
          <p>{service.title}</p>

          
          <p className="detail-price">${service.price}/hr</p>

          <p>Email: {service.email}</p>
          <p>Phone: {service.phone}</p>
        </div>

        <button className="message-btn">Message</button>

      </div>

      <div className="detail-section">
        <h3>Expertise</h3>
        <div className="skills">
          {service.skills.map((skill, i) => (
            <span key={i} className="skill">{skill}</span>
          ))}
        </div>
      </div>

      <div className="detail-section">
        <p>{service.description}</p>
      </div>

    </div>
  );
};

export default ServiceDetailItem;
