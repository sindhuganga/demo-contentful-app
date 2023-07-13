import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Grailed fashion axe godard, lumbersexual echo park la croix mlkshk
            next level. Disrupt mukbang bitters lomo raw denim, normcore
            vibecession poutine chicharrones cupping pinterest before they sold
            out austin pok pok.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="women and the browser" className="img"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
