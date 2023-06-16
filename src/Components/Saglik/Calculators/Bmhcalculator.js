import React, { useState } from 'react';

const BmhCalculator = () => {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activityLevel, setActivityLevel] = useState(1.2);
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
    setBmh(result * activityLevel);
  };

  return (
    <div className='bmh-container'>
      <h2 className='bmh-baslik'>Günlük Kalori İhtiyacı Hesaplama</h2>
      <label className='label-gender'>
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


    <div className='aktivite-container'>
      <p className='aktivite-p'>Aktivite Seviyesi</p>
      <label className='aktivite'>
      <input type='radio' name="activityLevel" value={1.2} checked={activityLevel === 1.2} onChange={() => setActivityLevel(1.2)} /> 
      <p>Masa başı ve durağan</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type="radio" name="activityLevel" value={1.3} checked={activityLevel === 1.3} onChange={() => setActivityLevel(1.3)} /> 
      <p>Hafif düzeyde hareketli</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type="radio" name="activityLevel" value={1.4} checked={activityLevel === 1.4} onChange={() => setActivityLevel(1.4)} /> 
      <p>Orta düzeyde hareketli</p>
      <span class="checkbox-indicator"></span>
      </label>
      
      <label className='aktivite'>
      <input type="radio" name="activityLevel" value={1.5} checked={activityLevel === 1.5} onChange={() => setActivityLevel(1.5)} /> 
      <p>Yüksek düzeyde aktif</p>
      <span class="checkbox-indicator"></span>
      </label>
      </div>
      <button className='bmh-btn' onClick={calculateBmh}>Hesapla</button>
      <h3 className='bmh-sonuc'> {bmh ? `Günlük Kalori İhtiyacınız : ${parseInt(bmh)} kcal` : null} </h3>
    </div>
  );
};

export default BmhCalculator;
