import './service-list.scss';
import Service from "./service/Service";
import mock2 from './imgs/flowers_mock_2.jpg';

export default function ServiceList() {
    return (
        <section className="services">
            <Service number={"02"}
                     img={mock2}
                     caption={'букеты на торжества'}/>
        </section>
    );
}