import { tw } from 'twind';

const productLinks = [
  {
    href: `mailto:startup.useglasses@gmail.com`,
    content: `startup.useglasses@gmail.com`,
  },
  {
    href: `http://instagram.com/_u/startup_useglasses`,
    content: `@startup_useglasses`,
  },
];

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

      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Contato</h4>
              <ul>
                {productLinks.map((link) => (
                  <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link.content}>
                    <a className={tw(`hover:text-use`)} href={link.href}>
                      {link.content}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
