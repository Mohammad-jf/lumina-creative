import { services } from "@/constant/services";

const Services = () => {
  return (
    <section className="services bg-dark">
      <div className="container">
        <h2 className="section-heading">Our Services</h2>

        <div className="services-flex">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
