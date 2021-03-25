import "./About.css";
function About(props) {
  const data = props.data;

  return (
    <>
      <section id="infos">
        <article className="content-apropos">
          <h2>{data.nomSection}</h2>
          <h3>{data.contentSection1}</h3>
          <p>{data.contentSection2}</p>
          <div
            class="container-polyedre para container-polyedre-apropos"
            data-rellax-speed="1.8"
          >
            <img src="static/polyedre-2.png" alt="" />
          </div>
        </article>
        <article id="container-apropos-img"></article>
      </section>
    </>
  );
}

export default About;
