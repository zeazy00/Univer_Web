import ServiceProps from "./ServiceProps";
import './service.scss';

export default function Service(props: ServiceProps) {
    return (
        <section className="service"
                 style={{ backgroundImage: `url(${props.img})` }}>
            <section className="service__number-animation">
                <p className="service__number-animation__number">
                    {props.number}
                </p>
                <hr/>
            </section>
            <div className='service__number-mock'></div>
            <section className="service__text-animation">
                <p className="service__text-animation__text">
                    {props.caption}
                </p>
                <button className="service__text-animation__button">
                    смотреть работы
                </button>
            </section>
        </section>
    )
}