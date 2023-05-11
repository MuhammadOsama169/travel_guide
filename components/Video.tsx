import React from 'react';

type Props = {
  className?: string;
  controls?: boolean;
  src: string;
  type: string;
  loop: boolean;
  autoPlay: boolean;
};

const Video = ({
  className,
  controls = false,
  src,
  type,
  loop,
  autoPlay,
}: Props) => (
  <video
    className={className}
    controls={controls}
    muted
    autoPlay={true}
    loop={true}
  >
    <source src={src} type={type} />
  </video>
);

export default Video;
