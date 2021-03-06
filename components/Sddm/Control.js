import React from 'react';
import styles from './Control.css';

function RebootIcon() {
  return (
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 126" version="1.1">
      <g transform="translate(-6.1297004,-913.75296)">
        <path
          d="m 70.1297,917.75272 c -10.812855,0 -21.022208,2.76937 -29.765625,
          7.73437 l 5.390625,5.15626 0.468751,0.46874 20.625,20.85938 5.390624,
          -5.39063 -18.75,-18.51562 c 5.23749,-1.76018 10.79358,-2.8125 16.640625,
          -2.8125 29.08477,0 52.5,23.415 52.5,
          52.5 0,8.71875 -2.12907,16.91888 -5.85937,
          24.14088 l 5.625,5.625 c 4.96538,
          -8.74371 7.73437,-18.95313 7.73437,-29.76588 0,-33.24 -26.76026,
          -60 -60,-60 z m -52.265625,
          30.23437 c -4.965383,8.74351 -7.734375,18.95288 -7.734375,29.76563 0,
          33.24028 26.760255,60.00028 60,60.00028 10.812855,
          0 21.022208,-2.7694 29.76563,-7.7344 l -5.15625,-5.1563 -0.46875,-0.4687 -20.859379,
          -20.8594 -5.156251,
          5.3907 18.515626,18.5156 c -5.237491,1.7601 -10.793588,
          2.8125 -16.640626,2.8125 -29.084775,0 -52.5,-23.415 -52.5,
          -52.50028 0,-8.71875 2.129071,-16.91888 5.859375,-24.14063 l -5.625,-5.625 z"
        />
      </g>
    </svg>
  );
}

function ShutdownIcon() {
  return (
    <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 126 126" version="1.1">
      <g transform="translate(-6.1297004,-913.75296)">
        <path
          d="m 62.629708,917.75291 0,52.50001 15.000003,0 0,-52.50001 -15.000003,
          0 z m -7.500001,1.99219 c -25.916616,6.63446 -45.000008,29.9654 -45.000008,
          58.00782 0,33.23998 26.760005,59.99998 60.00001,59.99998 33.240011,0 60.000011,
          -26.76 60.000011,-59.99998 0,-28.04242 -19.08339,-51.37336 -45.000008,
          -58.00782 l 0,7.77832 c 21.712808,6.4289 37.500008,26.37669 37.500008,
          50.2295 0,29.08498 -23.415006,52.49998 -52.500011,52.49998 -29.085005,
          0 -52.500009,-23.415 -52.500009,-52.49998 0,-23.85281 15.787193,
          -43.8006 37.500007,-50.2295 l 0,-7.77832 z"
        />
      </g>
    </svg>
  );
}
export default function Control({ }) {
  return (
    <div className={styles.control}>
      <button className={styles.reboot}>
        <RebootIcon />
      </button>
      <span className={styles.divider}></span>
      <button className={styles.shutdown}>
        <ShutdownIcon />
      </button>
    </div>
  );
}
