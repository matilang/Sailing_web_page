import './SectionPage.css'
import SideHeader from '../SideHeader';
import TitleBar from '../TitleBar';
import Question from '../Question';

const CalendarPage = () => {
    const pageTitle = 'FAQ';
    const pageLinks = [
        { text: 'Politechnika Gdańska', href: '/#', title: 'Wróć do poprzedniej strony' },
        { text: 'Sekcja Żeglarska Politechniki Gdańskiej', href: '/#', title: 'Obecna strona' },
        { text: 'FAQ', href: '/calendar', title: 'Obecna strona' },
    ];
    const questions = [
            { question: 'Czy gdy został tydzień do kursu mogę nadal się zapisać?', answer: 'Tak, możesz nadal się zapisać nawet gdy został tydzień do kursu. Zachęcamy do szybkiego dokonania zgłoszenia, abyśmy mogli lepiej się przygotować do Twojego udziału. Prosimy o skorzystanie z formularza zgłoszeniowego dostępnego na naszej stronie internetowej lub kontakt z naszym biurem obsługi klienta. Zapraszamy do udziału w naszym kursie!' },
            { question: 'Czy potrzebuję doświadczenia do odbycia podróży morskiej?', answer: 'Tak, wymagania dotyczące doświadczenia mogą zależeć od rodzaju podróży morskiej, na jaką się decydujesz. W przypadku prostych rejsów w okolicach przybrzeżnych lub krótkich wycieczek, doświadczenie może nie być konieczne. Jednakże, jeśli planujesz dłuższą trasę lub bardziej zaawansowane rejsy, posiadanie pewnego stopnia doświadczenia w żeglowaniu może być zalecane.'}
          
  ];
    return(
        <div>
            <TitleBar mainTitle={pageTitle} pageLinks={pageLinks}/>
            <Question questions={questions}/>
            <SideHeader/>
        </div>
    );
}
export default CalendarPage;