/* eslint-disable prettier/prettier */

import { tw } from 'twind';

function HtmlContainer() {
  return (
    <>
      <iframe title="TDD" src="/tdd.html" className={tw(`w-full h-96`)} />
    </>
  );
}

export default HtmlContainer;
