import React, { useState } from 'react';

const Belkalcacalculator = () => {
    const [kalca, setKalca] = useState(0)
    const [bel, setBel] = useState(0)
    const [bmh, setBmh] = useState(0);
    const [gender, setGender]= useState('male')


    const calculateBmh = () => {
        if (bel <= 0 || kalca <= 0) {
          alert('Lütfen geçerli değerler girin.');
          return;
        }
      
        let result = bel / kalca;
        setBmh(result);
      };
      
      

    const belKalca = () => {
  if (gender === 'male' && bmh > 1.01) {
    return `(Yüksek Sağlık Riski) Oran: ${bmh.toFixed(2)}`;
  } else if (gender === 'male' && bmh > 0.96 && bmh <= 1.0) {
    return `(Dikkat Edilmesi Gerek) Oran: ${bmh.toFixed(2)}`;
  } else if (gender === 'female' && bmh > 0.85) {
    return `(Yüksek Sağlık Riski) Oran: ${bmh.toFixed(2)}`;
  } else if (gender === 'female' && bmh >= 0.79 && bmh <= 0.84) {
    return `(Dikkat Edilmesi Gerek) Oran: ${bmh.toFixed(2)}`;
  } else {
    return `(Sağlık Durumunuz İyi) Oran: ${bmh.toFixed(2)}`;
  }

};
  return (
    <div className='bmh-container boy'>
        <h2 className='bmh-baslik boy'>Bel-Kalça endeksi hesaplama</h2>
        <label className='label-gender'>
        <p>Cinsiyet</p>
        <select className='option-gender' value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Erkek</option>
          <option value="female">Kadın</option>
        </select>
      </label>
      <br />
      <label className='range'>
        <p className='range-info'>Kalça Çevresi (cm)</p>
        <input type="range" className='range-slider' min={0} max={300} value={kalca} onChange={(e) => setKalca(Number(e.target.value))} />
      <p className='bilgi'>{kalca} cm</p>
      </label>
      <label className='range'>
        <p className='range-info'>Bel Çevresi (cm)</p>
        <input type="range" className='range-slider' min={0} max={255} maxLength={3} value={bel} onChange={(e) => setBel(Number(e.target.value))} />
        <p className='bilgi'>{bel} cm</p>
      </label>


      <button className='bmh-btn boy' onClick={calculateBmh}>Hesapla</button>
      <h3 className='bmh-sonuc boy'>
      {bmh ? belKalca() : null}
      </h3>
    </div>
  );
};
export default Belkalcacalculator;
