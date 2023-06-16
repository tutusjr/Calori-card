import './Styles/style.scss'
import Anasayfa from './Components/Anasayfa/Anasayfa';
import {Routes, Route} from 'react-router-dom'
import Hakkimizda from './Components/Hakkimizda/About';
import Saglik from './Components/Saglik/Saglik';
import CalorieCard from './Components/Calorie-Card/CaliorieCard';
import Beslenme from './Components/Beslenme/Beslenme';
import GunlukCalori from './Components/Saglik/GunlukCalori';
import Metabolizma from './Components/Saglik/Metabolizma';
import BoyKilo from './Components/Saglik/BoyKilo';
import Nabiz from './Components/Saglik/Nabiz';
import GunlukSu from './Components/Saglik/GunlukSu';
import BelKalca from './Components/Saglik/BelKalca';
import HarcananKalori from './Components/Saglik/HarcaninKalori';
import Tarifler from './Components/Beslenme/Tarifler';
import Login from './Components/Login/Login';
import Profile from './Components/Profil/Profile';
import PrivateRoute from './Components/PrivateRoute';
import Sign from './Components/Sign/Sign'
function App() {
  return (
   <>
   <div lang='tr'>
    <Routes>
      <Route path='/' element={<Anasayfa/>}/>
      <Route path='/anasayfa' element={<Anasayfa/>}/>
      <Route path='/beslenme' element = {<Beslenme/>}/>
      <Route>
        <Route path='/beslenme/Tarifler' element={<Tarifler/>}/>
      </Route>
      <Route path='/hakkimizda' element={<Hakkimizda/>}/>
      <Route path='/saglik' element={<Saglik/>}/>
         <Route>
        <Route path='/saglik/Gunluk-kalori-Ihtiyaci' element={<GunlukCalori/>}/>
        <Route path='/saglik/Metabolizma-Hizi-Hesaplama' element={<Metabolizma/>}/>
        <Route path='/saglik/Boy-Kilo-Endeksi-Hesaplama' element={<BoyKilo/>}/>
        <Route path='/saglik/Nabiz-Hesaplama' element={<Nabiz/>}/>
        <Route path='/saglik/Gunluk-Su-Ihtiyaci-Hesaplama' element={<GunlukSu/>}/>
        <Route path='/saglik/Bel-Kalca-Orani-Hesaplama' element={<BelKalca/>}/>
        <Route path='/saglik/Harcanan-Kalori-Hesaplama' element={<HarcananKalori/>}/>
        </Route>
      <Route path='/calorie-card' element={<CalorieCard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute> }/>
    </Routes>
    </div>
   </>
  );
}

export default App;
