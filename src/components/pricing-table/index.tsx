import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';
import HtmlContainer from '@/html';

const features = [
  `Laboris nulla`,
  `Lorem pariatur nisi`,
  `Id aute amet pariatur`,
  `Do duis sint aliquip`,
  `Nostrud duis tempor`,
  `Consequat eiusmod`,
  `Reprehenderit`,
  `Adipisicing reprehenderit`,
];

const PricingTable = () => (
  <section id="comecar-agora" className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Você está preparado?</h2>
          <div>
            <HtmlContainer />
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
          <p className={tw(`text-lg font-medium text-gray-800 w-full`)}>Se interessou? entre em contato!</p>
          <input
            placeholder="Seu email de contato"
            className={tw(`my-4 flex items-center justify-center p-6 leading-none text-gray-800 w-full lg:p-2`)}
          />
          <Button primary modifier="mt-6">
            Contato de vendas
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
