import { tw } from 'twind';
import Particles from 'react-particles-js';
import Arrow from '@/constants/svg/arrow.svg';

const ParticleBg = () => (
  <Particles
    params={{
      particles: {
        number: {
          value: 400,
          density: {
            enable: true,
            value_area: 3000,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          direction: `right`,
          speed: 0.3,
        },
        size: {
          value: 1,
        },
        opacity: {
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.1,
          },
        },
      },
      interactivity: {
        events: {
          onclick: {
            enable: false,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

const articles = [
  {
    title: `Oculos 1`,
    image: `/images/case-1.webp`,
    alt: `Modelo primario`,
    name: `Modelo x`,
  },
  {
    title: `Oculos 2`,
    image: `/images/case-2.webp`,
    alt: `Modelo secundario.`,
    name: `Modelo y`,
  },
  {
    title: `Oculos 3`,
    image: `/images/case-3.webp`,
    alt: `Modelo terciario`,
    name: `Modelo z`,
  },
];

const CasesSection = () => (
  <section>
    <div className={tw(`w-full min-h-screen bg-gray-900 relative `)}>
      <div className={tw(`absolute left-0 top-0 h-screen w-full overflow-hidden`)}>
        <ParticleBg />
      </div>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40`)}>
        <h1 className={tw(`text-white text-4xl lg:text-5xl font-bold text-center`)}>
          Como você quer enchergar o mundo hoje?
        </h1>
        <p className={tw(`text-white text-gray-400 text-center text-xl mt-12`)}>Encontre o seu estilo de ser</p>
        <div className={tw(`mx-auto pt-24`)}>
          <div className={tw(`w-full flex flex-wrap justify-around`)}>
            {articles.map((article) => (
              <div
                key={article.title}
                className={tw(
                  // eslint-disable-next-line max-len
                  `xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20 xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105 transition duration-500 ease-in-out`,
                )}
              >
                <div className={tw(`h-64 z-20`)}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={tw(`h-full w-full object-cover overflow-hidden rounded`)}
                    width={400}
                    height={300}
                  />
                </div>
                <div className={tw(`p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative`)}>
                  <p className={tw(`uppercase text-sm text-gray-700 text-center pb-1`)}>{article.name}</p>
                  <p className={tw(`text-gray-500 text-center pb-1 text-sm`)}>{article.title}</p>
                </div>
              </div>
            ))}
            <span
              className={tw(
                `-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                text-use cursor-pointer z-30 hover:text-green-300`,
              )}
            >
              Em breve mais novidades 😎
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
