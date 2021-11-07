import { tw } from 'twind';

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img className={tw(`h-12 w-12 mr-4`)} src="logo.svg" alt="logo" width={48} height={48} />
        <p className={tw(`text-4xl text-glass font-bold`)}>
          <a className={tw(`text-use`)}>Use</a>
          Glasses
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
