/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/media-has-caption */
import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
import Play from '@/constants/svg/play.svg';
import Pause from '@/constants/svg/pause.svg';

import React from 'react';

const PlayButton = (props: any) => (
  <button
    type="button"
    className={tw(
      `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
      -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl mt-6`,
    )}
    onClick={() => {
      props.onPress();
    }}
    aria-label="play video"
  >
    {props.play ? (
      <Pause className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
    ) : (
      <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0`)} />
    )}
    <span className={tw(`ml-3`)}>{props.play ? `Reiniciar` : `Assista`} a demonstração (30 seg)</span>
  </button>
);

function VideoSection() {
  const ref = React.useRef<any>();
  const [play, setPlay] = React.useState(false);

  return (
    <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
      <div className={tw(`max-w-7xl mx-auto`)}>
        <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
          <div className={tw(`w-full`)}>
            <div className={tw(`relative shadow-2xl mx-6 lg:mx-0 `)}>
              <video className={tw(``)} key={`${play}_state`} autoPlay={play} ref={ref} src="/example.mov" />
              <PlayButton play={play} onPress={() => setPlay(!play)} videoRef={ref} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
