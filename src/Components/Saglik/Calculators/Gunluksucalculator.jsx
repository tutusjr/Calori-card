import React, { useState } from 'react';

const Gunluksucalculator = () => {
  const [weight, setWeight] = useState(0);
  const [bmh, setBmh] = useState(0);
  const [activityLevel, setActivityLevel] = useState(0);
  const [hava, setHava] = useState(0)


  const calculateBmh = () => {
    if (weight === 0) {
      alert('Lütfen geçerli değerler girin.');
      return;
    }

    let final= 0
    let result = 0
    
    final = weight * activityLevel
    result = final + hava
    setBmh(result.toFixed(1));
  };
  

  return (
    <div className='bmh-container su'>
      <h2 className='bmh-baslik su'>Günlük Su İhtiyacı Hesaplama</h2>
      <br />
      <label className='range su'>
       <p className='range-info su'>Vücut Ağırlığı (kg)</p>
        <input type="range" className='range-slider su' min={0} max={300} value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        <p className='bilgi su'>{weight} kg</p>
      </label>


      <div className='aktivite-container su'>
      <p className='aktivite-p nabiz'>Aktiflik Düzeyi</p>
      <label className='aktivite'>
      <input type='radio' name="activityLevel" value={0.03} checked={activityLevel === 0.03} onChange={() => setActivityLevel(0.03)} /> 
      <p>Az Aktif</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type='radio' name="activityLevel" value={0.04} checked={activityLevel === 0.04} onChange={() => setActivityLevel(0.04)} /> 
      <p>Orta Düzey Aktif</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type="radio" name="activityLevel" value={0.05} checked={activityLevel === 0.05} onChange={() => setActivityLevel(0.05)} /> 
      <p>Yüksek Düzey Aktif</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type="radio" name="activityLevel" value={0.06} checked={activityLevel === 0.06} onChange={() => setActivityLevel(0.06)} /> 
      <p>Yoğun Fiziksel Aktivite</p>
      <span class="checkbox-indicator"></span>
      </label>
      </div>

      <div className='aktivite-container hava'>
        <p className='aktivite-p hava'>Hava Koşulları</p>
      <label className='aktivite'>
      <input type="radio" name="hava" value={1.5} checked={hava === 1.5} onChange={() => setHava(1.5)} /> 
      <p>Sicak Hava Veya Yüksek Nem</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type="radio" name="hava" value={0.2} checked={hava === 0.2} onChange={() => setHava(0.2)} /> 
      <p>Soğuk Hava</p>
      <span class="checkbox-indicator"></span>
      </label>
      <label className='aktivite'>
      <input type="radio" name="hava" value={0} checked={hava === 0} onChange={() =>setHava(0)} /> 
      <p>Normal Hava Koşulları</p>
      <span class="checkbox-indicator"></span>
      </label>
      </div>



      <button className='bmh-btn su' onClick={calculateBmh}>Hesapla</button>
      <h3 className='bmh-sonuc su'>
        {bmh} (lt)
      </h3>
    </div>
  );
};
export default Gunluksucalculator;
