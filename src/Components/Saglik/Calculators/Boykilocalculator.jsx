import React, { useState } from 'react';

const Boykilocalculator = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmh, setBmh] = useState(0);


  const resultText = () => {
    if (bmh < 18.49) {
        return `(İdeal Kilonun Altındasınız)  Oran : ${parseInt(bmh)} kg/m²`;
      } else if (bmh > 18.5 && bmh <= 24.99) {
        return `(Kilonuz İdeal)  Oran : ${parseInt(bmh)} kg/m²`;
      } else if (bmh > 25 && bmh <= 29.99) {
        return `(İdeal Kilonun Üstündesiniz)  Oran : ${parseInt(bmh)} kg/m²`;
      } else if (bmh > 30) {
        return `(İdeal Kilonun Çok Üstündesiniz)  Oran : ${parseInt(bmh)} kg/m²`;
      } 
  }

  const calculateBmh = () => {
    if (weight <= 0 || height <= 0) {
      alert('Lütfen geçerli değerler girin.');
      return;
    }

    let result = 0;
      result = weight / [(height/100) * (height/100)];
    setBmh(result);
  };
  

  return (
    <div className='bmh-container boy'>
      <h2 className='bmh-baslik boy'>Boy-kilo endeksi hesaplama</h2>
      <br />
      <label className='range'>
        <p className='range-info'>Vücut Ağırlığı (kg)</p>
        <input type="range" className='range-slider' min={0} max={300} value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
      <p className='bilgi'>{weight} kg</p>
      </label>
      <label className='range'>
        <p className='range-info'>Boy (cm)</p>
        <input type="range" className='range-slider' placeholder='bir sayi giriniz' min='0' max={255} maxLength={3} value={height} onChange={(e) => setHeight(Number(e.target.value))} />
        <p className='bilgi'>{height} cm</p>
      </label>


      <button className='bmh-btn boy' onClick={calculateBmh}>Hesapla</button>
      <h3 className='bmh-sonuc boy'>
            {bmh ? resultText() : null}
      </h3>
    </div>
  );
};
export default Boykilocalculator;
