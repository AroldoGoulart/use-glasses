import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';
import Lottie from 'react-lottie';
import Glass1 from '../../constants/lottie/glass1.json';
import Glass2 from '../../constants/lottie/glass2.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Glass2,
};

const listItems = [
  {
    title: `Tecnologia de ponta`,
    description: `Pediu chegou`,
  },
  {
    title: `Facil de usar`,
    description: `Facil igual ser bloguerinha`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-glass font-semibold tracking-wide uppercase`)}>
          <a className={tw(`text-use`)}>Use</a> Glasses
        </h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-700`)}>Conectando visões</p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-glass`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
