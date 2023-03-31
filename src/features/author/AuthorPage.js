
import { Container } from '../../common/Container/styled';
import Header from '../../common/Header';
import Section from '../../common/Section';
import { Wrapper } from './styled';

export default () => (
    <Container>
            <Header title="O autorze" />
            <Section title="Karolina Jasiówka" body={
                <Wrapper>
                <p>
                    Cześć, miło Cię powitać🙂
                </p>
             <p>Interesuję się już od kilku lat zdrowym trybem życia - <b>Life balance</b> dbaj o siebie.
             W zdrowym ciele zdrowy duch.
         </p>
         <p> Lubię
             w wolnym czasie wybrać się na wycieczkę pieszą lub rowerową. Zimą wybrać się na skitury, pozjeżdżać na nartach. Ostatnio spodobało mi się żeglarstwo.
              Czas spędzony po
             pracy / programowaniu na łonie natury jest ceniony przeze mnie 😊
             </p>
             <p>
                Ta aplikacja powstała w ramach kursu YouCode FrontEnd Developer. Aby zobaczyć więcej moich projektów zapraszam na stronę <a href="https://github.com/KarolinaJ33" target="_blank">GitHub</a>
             </p>
             </Wrapper>
            } 
            />
    </Container>
);