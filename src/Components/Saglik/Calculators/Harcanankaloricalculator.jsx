import React, { useState } from 'react';

const Harcanankaloricalculator = () => {
  const [yapilan, setYapilan] = useState('Yürüyüş');
  const [weight, setWeight] = useState(0);
  const [duration, setDuration] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);

  const activities = [
    { name: 'Yürüyüş', caloriesPerMinute: 5 },
    { name: 'Koşu', caloriesPerMinute: 10 },
    { name: 'Bisiklet Sürme', caloriesPerMinute: 8 },
    // Diğer aktiviteleri buraya ekleyin
  ];

  const calculateCaloriesBurned = () => {
    const selectedActivity = activities.find((a) => a.name === yapilan);
    if (selectedActivity) {
      const totalCalories = selectedActivity.caloriesPerMinute * duration * weight;
      setCaloriesBurned((totalCalories / 1000).toFixed(2)); // Kalorileri 1000'e bölerek kcal cinsinden göster ve string olarak ayarla
    }
  };

  return (
    <div className='bmh-container harcanan'>
      <h2 className='bmh-baslik harcanan'>Harcanan Kalori Hesaplayıcı</h2>
      <label className='label-gender harcanan'>
        <p className='harcanan'>Aktivite Seçiniz</p>
      <select className='option-gender harcanan' value={yapilan} onChange={(e) => setYapilan(e.target.value)}>
        {activities.map((a) => (
          <option key={a.name} value={a.name}>
            {a.name}
          </option>
        ))}
      </select>
      </label>
      <label className='range harcanan'>
        <p className='range-info'>Vücut Ağırlığı (kg)</p>
        <input type="range" className='range-slider' min={0} max={300} value={weight} onChange={(e) => setWeight(Number(e.target.value))} />
        <p className='bilgi'>{weight} kg</p>
      </label>
      <label className='range harcanan'>
        <p className='range-info'>Aktivite Süresi (dk)</p>
        <input type="range" className='range-slider' value={duration} min={0} max={600} onChange={(e) => setDuration(Number(e.target.value))} />
        <p className='bilgi'>{duration} dk</p>
      </label>
      <button className='bmh-btn harcanan' onClick={calculateCaloriesBurned}>Hesapla</button>
      <h3 className='bmh-sonuc harcanan'>{caloriesBurned ? ` ${caloriesBurned} kcal Yakıldı` : null}</h3>
       {caloriesBurned ? <p className='not'> <b>Not:</b> Enerji harcaması için bulunan değer ortalama bir değer olup, bireyin vücut tipi, yaptığı aktivitenin şiddeti, yaşı vb. bireysel faktörlere göre değişiklik gösterebilir. </p> : null}
    </div>
  );
};

export default Harcanankaloricalculator;
