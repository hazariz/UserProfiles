import React from 'react';
import{ BrowserRauter as Rauter ,Switch,Route,Link} from 'react-router-dom';


//Ana Sayfa bileşeni
const Anasayfa = () => (
    <div>
        <h1>Klinik Adı</h1>
        <p>klinik tanıtımı ve hizmetleri hakkında bilgiler.</p>
        <link to="/hizmetler">Hizmetlerimize Göz Atın</link>
        <link to="/doktorlar">Doktorlarımızı Tanıyın</link>
        <link to="/iletişim">Bize Ulaşım</link>
    </div>
);
 // Hizmetler Sayfası Bileşeni

 const HizmetlerSayfası =() => (
    <div>
        <h2>Doktorlarımız</h2>
        <p> Klinikte çalışan doktorların tanımı.</p>
        {/*Doktorların Listesi*/}
        </div>
 );

    // İletişim Sayfası bileşeni
     
     const İletişimSayfası =() => (
       <div>
        <h2>Bize Ulaşın</h2>
        <p>İletişim bilgileri ve randevu talebi için form.</p>
          {/* İletişim Formu */}
    </div>

 );
  //Ana Uygulama bileşeni
    const App =() =>(
        <Rauter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Ana Sayfa</Link>
                        </li>
                    <li>
                        <Link to="/doktorlar">Doktorlarımız</Link>
                      </li>
                      <li>
                         <Link to="/iletisim">İletisim</Link>
                         </li>
                         </ul>
                         </nav>

                         <Switch>
                            <Route path="/hizmetler">
                                <HizmetlerSayfası></HizmetlerSayfası>
                            </Route>
                            <Route path ="/iletisim">
                              <DoktorlarSayfası />
                            </Route>
                            <Route path="/İletisim">
                                <İletişimSayfası/>
                            </Route>
                            <Route  path ="/">
                                <AnaSayfa />
                                </Route>
                                </Switch>
                                </div>
                            </Router>
    );
    export default App;
                    

                
            
        
    