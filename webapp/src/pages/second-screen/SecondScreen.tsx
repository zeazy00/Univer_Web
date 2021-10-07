import './second-screen.scss';
import SocialMediaList from 'components/social-media-list/SocialMediaList';
import FlowersOptions from './flowers-options/FlowersOptions';
import ServiceList from "./service-list/ServiceList";

export default function SecondScreen() {
    return (
        <section className="second-screen">
            <header className="second-page__header">
                <p className="second-page__header__text">
                    каталог услуг
                </p>
                <hr/>
            </header>
            <article className="second-page__article">
                <ServiceList/>
            </article>
            <footer className="main-page-footer">
                <hr/>
                <FlowersOptions className="main-page-footer__options">
                    {
                        [
                            'Свадебная флористика',
                            'Букеты на любые мероприятия',
                            'Букеты невесты',
                            'Композиции',
                            'Оформление мероприятий',
                        ]
                    }
                </FlowersOptions>
                <SocialMediaList className="main-page-footer__social-medias"/>
                <div className="main-page-footer__mock_bottom"></div>
            </footer>
        </section>
    );
}