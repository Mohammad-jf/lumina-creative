import { services } from "@/constant/services";
import React from "react";

const Services = () => {
  return (
    <section className="services bg-dark">
      <div className="container">
        <h2 className="section-heading">Our Services</h2>

        <div className="services-flex">
          {services.map((service) => (
            <div className="service-item">
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
