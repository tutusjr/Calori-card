import React, { useState } from 'react';

const Metacalculator = () => {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [bmh, setBmh] = useState(0);

  const calculateBmh = () => {
    if (weight <= 0 || height <= 0 || age <= 0) {
      alert('Lütfen geçerli değerler girin.');
      return;
    }

    let result = 0;
    if (gender === 'male') {
      result = 66.5 + 13.75 * weight + 5 * height - 6.77 * age;
    } else {
      result = 655.1 + 9.56 * weight + 1.85 * height - 4.67 * age;
    }
    setBmh(result);
  };

  return (
    <div className='bmh-container'>
      <h2 className='bmh-baslik meta'>Metabolizma Hızı Hesaplama</h2>
      <label className='label-gender meta'>
        <p>Cinsiyet</p>
        <select className='option-gender' value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="male">Erkek</option>
          <option value="female">Kadın</option>
        </select>
      </label>
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
      <label className='range'>
       <p className='range-info'>Yaş</p>
        <input type="range" className='range-slider' min={0} max={100} value={age} onChange={(e) => setAge(Number(e.target.value))} />
        <p className='bilgi'>{age} yaş</p>
      </label>

      <label>
        
      </label>
      <button className='bmh-btn meta' onClick={calculateBmh}>Hesapla</button>
      <h3 className='bmh-sonuc meta'> {bmh ? `Metabolizma Hiziniz : ${parseInt(bmh)} kcal` : null} </h3>
    </div>
  );
};

export default Metacalculator;
