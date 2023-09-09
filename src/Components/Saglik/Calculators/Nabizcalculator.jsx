import React, { useState } from 'react';

const Nabizcalculator = () => {
  const [age, setAge] = useState(0);
  const [bmh, setBmh] = useState(0);
  const [result , setResult] = useState(0)
  const [activityLevel, setActivityLevel] = useState(0.6);


  const calculateBmh = () => {
    if (age <= 0) {
      alert('Lütfen geçerli değerler girin.');
      return;
    }
    let final= 0
    final = 220 -age
    setResult(final)
    setBmh(final * activityLevel);
  };
  

  return (
    <div className='bmh-container boy'>
      <h2 className='bmh-baslik nabiz'>Kalp ritmi hesaplama</h2>
      <br />
      <label className='range nabiz'>
       <p className='range-info nabiz'>Yaş</p>
        <input type="range" className='range-slider nabiz' min={0} max={100} value={age} onChange={(e) => setAge(Number(e.target.value))} />
        <p className='bilgi nabiz'>{age} yaş</p>
      </label>


      <div className='aktivite-container nabiz'>
      <p className='aktivite-p nabiz'>Egzersiz Seviyesi</p>
      <label className='aktivite'>
      <input type='radio' name="activityLevel" value={0.6} checked={activityLevel === 0.6} onChange={() => setActivityLevel(0.6)} /> 
      <p>Düşük Şiddet</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type="radio" name="activityLevel" value={0.7} checked={activityLevel === 0.7} onChange={() => setActivityLevel(0.7)} /> 
      <p>Orta Şiddet</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type="radio" name="activityLevel" value={0.8} checked={activityLevel === 0.8} onChange={() => setActivityLevel(0.8)} /> 
      <p>Yüksek Şiddet</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type="radio" name="activityLevel" value={0.9} checked={activityLevel === 0.9} onChange={() => setActivityLevel(0.9)} /> 
      <p>Çok Yüksek Şiddet</p>
      <span class="checkbox-indicator"></span>
      </label>
      </div>



      <button className='bmh-btn nabiz' onClick={calculateBmh}>Hesapla</button>
      <h3 className='bmh-sonuc nabiz'>
      <div className='nabiz-sonuc'>
        {result ? <p>Maximum Kalp Atım Hızı</p>: null}
        {result ? `${parseInt(result)} atım/dakika` : null}
      </div>
        <div className='nabiz-sonuc'>
            {bmh ? <p>Hedef Kalp Hızı</p> : null}
            {bmh ? `${parseInt(bmh)} atım/dakika` : null} 
        </div>
      </h3>
    </div>
  );
};
export default Nabizcalculator;
