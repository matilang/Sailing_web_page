import '../../App.css'
import SideHeader from '../SideHeader';
import TitleBar from '../TitleBar';

const PartnerPage = () => {
    const pageTitle = 'Partnerzy';
    const pageLinks = [
        { text: 'Politechnika Gdańska', href: '/#'},
        { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#'},
        { text: 'Partnerzy', href: '/partner'},
  ];
    return(
        <div className='main-content'>
            <TitleBar mainTitle={pageTitle} pageLinks={pageLinks}/>
            <div className='container1'>
                <div className='text'>
                    <h3>Wpierają nas:</h3>
                    <ul>
                        <li>Krzysztof Wilde - Rektor PG</li>
                        <li>Janusz Kozak - Dziekan wydziału Oceanotechniki i Okrętownictwa</li>
                        <li>Marek Dzida - Pełnomocnik Rektora ds. Żeglarstwa na PG, Prorektor ds. Kształcenia i Dydaktyki</li>
                        <li>Jan Hupka - Kierownik Katedry Technologii Chemicznej i wielki sympatyk Sekcji Żeglarskiej</li>
                    </ul>
                </div>
            </div>
            <SideHeader/>
        </div>
    );
}
export default PartnerPage;
