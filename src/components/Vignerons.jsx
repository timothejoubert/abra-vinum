function Vignerons(props) {
  const data = props.data;
  const regionData = props.regionData;

  const getElement = (vignobles) => {
    {
      console.log({ vignobles });
    }
    return (
      <>
        <div class="list-vigneron">
          <div class="nom-vigneron">
            <h5>{vignobles.name}</h5>
          </div>
        </div>
        <div class="txt-vigneron">
          <p>{vignobles.headline}</p>
        </div>
      </>
    );
  };

  return (
    <>
      <section id="vignerons">
        <h2>{data.title}</h2>
        {Object.keys(regionData).map(function (domaines, keyIndex) {
          {
            console.log(regionData[domaines]);
          }
          return (
            <div class="domaine-section">
              <div class="nom-domaine">
                <h4>{domaines}</h4>
              </div>

              <div class="container-list">
                {regionData[domaines].map((item) => getElement(item))}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Vignerons;
