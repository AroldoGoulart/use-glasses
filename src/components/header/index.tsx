/* eslint-disable prettier/prettier */
import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Tictac from '@/constants/svg/tictac.svg';
import SeuFilo from '@/constants/svg/seu_filo.svg';
import Aws from '@/constants/svg/aws.svg';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
        Use Glasses
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>Seu óculos sem sair de casa</p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Compre aqui</Button>
        <span className={tw(`mx-2`)}>ou</span>
        <Button>Contato</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Apoiadores</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <SeuFilo className={tw(`-mt-6`)} />
          <Tictac className={tw(`-mt-6`)} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
