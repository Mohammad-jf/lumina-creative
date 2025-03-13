import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section className="team">
      <div className="container container-lg">
        <h2 className="section-heading">Our Team</h2>

        <div className="team-flex">
          <div className="team-item">
            <Image src={"/images/team1.jpg"} height={200} width={300} />
            <h4>Kevin Samson</h4>
            <p>Founder</p>
          </div>

          <div className="team-item">
            <Image src={"/images/team2.jpg"} height={200} width={300} />
            <h4>Rebecca Williams</h4>
            <p>Designer</p>
          </div>

          <div className="team-item">
            <Image src={"/images/team3.jpg"} height={200} width={300} />
            <h4>Ben Markson</h4>
            <p>Designer/Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
