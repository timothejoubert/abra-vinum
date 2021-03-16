import { render, Component } from "preact";

export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("mounted");
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <div id="paper-texture"></div>
        <div id="map-texture"></div>

        <header id="home">
          <nav>
            <ul class="scroll-link">
              <a href="#infos">
                <li>À propos</li>
              </a>
              <a href="#vignerons">
                <li>Vignerons</li>
              </a>
              <a href="#map">
                <li>Carte</li>
              </a>
              <a href="#contact">
                <li>Contact</li>
              </a>
            </ul>
          </nav>

          <div class="content-home">
            <div class="container-logo">
              <h1>Abra Vinum</h1>
              <h1>Abra Vinu</h1>
              <h1>Abra Vin</h1>
              <h1>Abra Vi</h1>
              <h1>Abra V</h1>
              <h1>Abra</h1>
              <h1>Abr</h1>
              <h1>Ab</h1>
              <h1>A</h1>
            </div>
            <div class="container-polyedre container-polyedre-home">
              <img src="static/polyedre-1.png" alt="" />
            </div>
          </div>
        </header>

        <main>
          <section id="infos">
            <article class="content-apropos">
              <h2>À propos</h2>
              <h3>
                Assurément un des plus grands champagnes de la Vallée de la
                Marne. Jérôme Dehours vinifie des vins singuliers à la
                bourguignonne.
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                veritatis hic. Voluptate, consequuntur soluta excepturi,
                similique in repellendus nam eligendi adipisci modi sequi
                voluptatum. Id nobis aut officiis consequatur voluptatibus quos
                odio harum facilis, sed, temporibus sequi autem rem distinctio.
              </p>

              <div
                class="container-polyedre para container-polyedre-apropos"
                data-rellax-speed="1.8"
              >
                <img src="static/polyedre-2.png" alt="" />
              </div>
            </article>

            <article id="container-apropos-img"></article>
          </section>

          <section id="vignerons">
            <h2>Vignerons</h2>

            <template>
              <div class="domaine-section">
                <div class="nom-domaine">
                  <h4>Champagne</h4>
                </div>

                <div class="container-list">
                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Champagne Dehours</h5>
                    </div>

                    <div class="txt-vigneron">
                      <p>
                        Assurément un des plus grands champagnes de la Vallée de
                        la Marne. Jérôme Dehours vinifie des vins singuliers à
                        la bourguignonne (42 parcelles répertoriées). Les vins
                        clairs sont élevés en barrique de plusieurs vins
                        ajoutant une étoffe supplémentaire au champagne.
                        Quelques bouteilles de l’immense millésime 2012 sont
                        disponibles pour mettre en cave (2012 en champagne
                        tiendra dans les 50 prochaines années). Au domaine, le
                        cépage phare est le Pinot Meunier qui est travaillé en
                        Soléra* pour la grande réserve. Privilégier les verres à
                        vin pour le service, servir frais 9°C/10°C mais pas
                        froid 5°.
                      </p>
                      <br />
                      <p>
                        *Soléra : La solera, appelée aussi réserve perpétuelle,
                        est une méthode d'assemblage et d'élevage du vin
                        pratiquée en particulier en Espagne. Ce procédé est
                        aussi utilisé aujourd'hui dans la production de certains
                        champagnes.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="container-polyedre para container-polyedre-champagne"
                  data-rellax-speed="2.5"
                >
                  <img src="static/polyedre-3.png" alt="" />
                </div>
              </div>

              <div class="domaine-section" id="bourgogne">
                <div class="nom-domaine">
                  <h4>Beaujolais et Bourgogne</h4>
                </div>

                <div class="container-list">
                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Thibaud Lemaitre</h5>
                    </div>

                    <div class="txt-vigneron">
                      <p>
                        Thibaud et moi sommes amis depuis 20 ans, il est l’homme
                        pédagogue sur les pratiques vinicoles, faisant preuve de
                        discernement et d’écoute dans les débats animés par ceux
                        qui boivent du vin mais qui n’en font pas ! Sa première
                        signature, 2017 est particulièrement plaisante. Elle est
                        représentative du millésime, tardif et capricieux,
                        l’élevage est élégant il souligne mais ne farde pas. Un
                        style de gamay pur où la juste charpente et la juste «
                        buvabilité » font de ce premier Moulin une vraie
                        réussite. 2018, tout aussi réussi est le portrait d’une
                        année plus précoce, plus solaire et plus riche. Les vins
                        sont déjà prêts et ne demandent qu’à être ouverts pour
                        étancher les soifs automnales.
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Jacqueson</h5>
                    </div>

                    <div class="txt-vigneron">
                      <p>
                        Le vigneron emblématique de Rully, certains le
                        connaissent déjà. Un modèle de régularité, les vins sont
                        à l’image des grands blancs de la Côte Chalonnaise juste
                        gras, cristallins, précis et immédiats.
                      </p>
                      <p>
                        Très faible rendement sur 2019. Précipitez-vous il y en
                        a peu. A boire maintenant et, ou, à oublier entre 5 et
                        10 ans.
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Brintet</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Brintet, le roi du Mercurey ! des rouges friands, des
                        blancs gourmands et une profondeur grandissante dans les
                        vins. Brintet s’est propulsé en peu de temps comme une
                        des références de l’appellation.
                      </p>
                      <p>
                        C’est « glouglou » c’est la Bourgogne des ripailleurs
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Thénard</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Illustre famille bourguignonne inscrivant son nom dans
                        la lutte contre le Phylloxera au dix-neuvième siècle et
                        discret propriétaire d’un quart de l’appellation
                        Montrachet grand cru, voici quelques attributs de ce
                        domaine d’exception. Discrétion, humilité et générosité
                        sont les valeurs fortes des barons Thénard. Les vins
                        sont taillés pour la garde et le style gagne en finesse
                        depuis l’arrivée du fils. Fait remarquable, les vins
                        sont élevés plus de trente mois en vieux foudres ou
                        vieilles pièces. A ma connaissance, pas d’autres
                        vignerons en bourgogne ne font des élevages si long. Du
                        Givry 1er cru au Montrachet grand cru, les soins
                        apportés au vin sont les mêmes. J’ai la chance d’avoir
                        quelques bouteilles de la plus prestigieuse appellation
                        de bourgogne en blanc à votre disposition (à boire ou à
                        garder pendant plus de 30 ans). Lors de mon passage au
                        domaine en juin Les Pernand-Vergelesses et Corton 2017
                        n’ont jamais aussi bien goûté depuis que je suis les
                        vins du domaine.
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Lucien Muzard</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Nous quittons la Côte Chalonnaise pour entrer en Côte de
                        Beaune. Ici aussi, un domaine d’une régularité sans
                        faille. Le Clos Faubard est très élégant, c’est
                        l’introduction au grand style de la côte de Beaune
                        (cerises dans un panier d’osier comme dirait un
                        Beaunois)
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Heitz-Lochardet</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Armand, c’est un ami. J’ai eu la chance de suivre
                        l’aventure de la création du domaine depuis le début.
                        2013 premier millésime à la vente, cinq ans plus tard je
                        suis heureux de pouvoir vous proposer ses vins. Le Clos
                        des Poutures (0,7ha !!!) est mon coup de cœur sur
                        Pommard. Les Rugiens et les Perrières sont les « grands
                        crus » de Pommard et de Meursault avec un potentiel de
                        garde supérieur à 20 ans. Le Crémant est une vraie bulle
                        élégante,
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Comte Senard</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Lorraine Senard, est la cinquième génération de la
                        famille. 10Ha et le plus beau parcellaire sur la colline
                        de Corton voilà le décor planté. Encore un domaine
                        possédant un monopole : le clos des Meix 1,64 ha (4000
                        bouteilles/an). Des vins de temps, en rouge comme en
                        blanc, plaisants dans la jeunesse, séduisants dans la
                        maturité.
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Jean Chartron</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Ici encore, c’est la cinquième génération qui est
                        gardienne de ce superbe domaine. Une maison classique au
                        style qui s’est affuté ces dernières années. Les grands
                        blancs de Puligny par excellence, pensez à carafer,
                        surtout les blancs ! Le seul Chevaliers-Montrachet en
                        Clos Monopole
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Virgine Taupenot-Merme</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        La louve de Morey-Saint-Denis, (les habitants de Morey
                        sont surnommés les loups). Virginie est aussi une amie
                        (pour les amis snob, ses vins sont présents Au Bon
                        Marché comme sur cette liste). Une grande dame de la
                        Côte de Nuits qui participe activement à l’association
                        Femme et Vins de Bourgogne.
                      </p>
                      <p>
                        Les Passetoutgrains sont de superbes vins de soif, les
                        Morey sont à garder comme à consommer jeunes. 2017 comme
                        2018 sont des réussites intégrales au domaine.
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Nicole Lamarche</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Décidément, nous sommes proche de la parité dans cette
                        offre ! Avec Nicole la fête est plus folle ! Domaine
                        emblématique de Vosne-Romanée. Avant le confinement j’ai
                        pu goûter l’intégralité des 2018 où le floral rouge
                        dominait (rose, pivoine). Les vins sont d’une longueur
                        intense et les couleurs sublimes. Les 2017 se referment
                        un peu les 2018 commencent à s’ouvrir. Encore et
                        toujours un Monopole : La Grande Rue, cette fois une
                        appellation monopole entre la Tâche et la Romanée-Conti.
                        Interdiction d’ouvrir avant au moins 10 à 15 ans de
                        vieillissement.
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Jean Tardy</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Domaine confidentiel de 3,5 ha, des petites cuvées, un
                        style plus musclé. Avec Guillaume le style main de fer
                        dans gant de soie s’impose. Les couleurs sont plus
                        sombres, l’aromatique plus ronce et graphite. Tanins
                        moelleux présents. Fixin – la Place et Gevrey-Chambertin
                        – Champerrier sont les deux climats qu’il faut avoir
                        goûté impérativement dans sa vie de « flaconneur » de
                        Côte de Nuits.
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Sérafin</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Karine, encore une grande dame à la tête de ce domaine.
                        6ha, parcellaire fabuleux, haute maturité des raisins et
                        fûts servants à élever les Hermitage de Jean-Louis
                        Chave, que dire d’autre ? Pour moi : la légende des
                        admirateurs de Gevrey-Chambertin, dont je fais partie.
                      </p>
                    </div>
                  </div>

                  <div class="list-vigneron">
                    <div class="nom-vigneron">
                      <h5>Bertagna</h5>
                    </div>
                    <div class="txt-vigneron">
                      <p>
                        Les grands vins d’une appellation rare et confidentielle
                        : Vougeot (à l’extérieur du Clos).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </section>
          <section id="map"></section>

          <section id="contact">
            <h2 id="section3">Contact</h2>
            <div class="content-contact">
              <h5>
                <span>Vous conseiller</span>, <span>vous aiguiller</span> et
                surtout <span>vous faire savourer</span> sont nos priorités.{" "}
                <br />
                Créons des contacts dès à présent.
              </h5>
              <p>
                Téléphone : <span> 06.23.45.81.98</span>
              </p>
              <p>
                E-mail : <span> abra-vinum@info.com</span>
              </p>
            </div>
          </section>
        </main>
      </>
    );
  }
}