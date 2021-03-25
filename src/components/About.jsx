import "./About.css";
function About(props) {
  const data = props.data;

  return (
    <>
      <section id="infos">
        <article className="content-apropos">
          <h2>{data.title}</h2>
          <h3>{data.headline}</h3>
          <p>{data.content}</p>
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
