
const Hero = ({ span1, span2, maintext, dark }) => {
  return (
    <section className={`hero  ${dark ? "bg-dark" : ""}`}>
      <div className="container container-sm">
        <h2>
          <span className="bg-primary">{span1 + " "}</span>
          {maintext}
          <span className="bg-primary">{" " + span2}</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;
