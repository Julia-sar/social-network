import React from 'react';
import preloader from '../../../assets/images/loading.gif';

export default function Preloader() {
  return (
    <div style={{ backgroundColor: 'red' }}>
      <img alt="Анимация прелоуда" src={preloader} />
    </div>
  );
}
