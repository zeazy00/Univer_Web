import './assets.scss';
import SocialMedias from 'components/social-media-container/SocialMedias';
import FlowersOptions from './flowers-options/FlowersOptions';

export default function SecondScreen() {
    return (
        <section className='second-page'>
            <header>

            </header>
            <article>

            </article>
            <footer className='main-page-footer'>
                <hr />
                <FlowersOptions className='main-page-footer__options'>
                    {
                        [
                            'Свадебная флористика',
                            'Букеты на любые мероприятия',
                            'Букеты невесты',
                            'Композиции',
                            'Оформление мероприятий'
                        ]
                    }
                </FlowersOptions>
                <SocialMedias className='main-page-footer__social-medias' />
                <div className='main-page-footer__mock_bottom'></div>
            </footer>
        </section>
    );
}