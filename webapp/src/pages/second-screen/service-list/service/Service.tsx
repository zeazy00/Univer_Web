import RadioSelector from "./radio-selector/RadioSelector";
import ServiceProps from "./ServiceProps";

export default function Service(props: ServiceProps) {
    return (
        <section key={props.key}
            className='service'>
            <img src={props.img}
                alt='Pretty flowers'
                className='service__background-img' />
            <section className='service__number-animation'>
                <p className='service__number-animation__number'>
                    {props.key}
                </p>
                <hr />
            </section>
            <section className='service__text-animation'>
                <p className='service__text-animation__text'>
                    {props.caption}
                </p>
                <button className='service__text-animation__button'>
                    смотреть работы
                </button>
            </section>
        </section>
    )
}