import FlowersOptionsProps from "./FlowersOptionsProps";
import './assets.scss';
import classNames from "classnames";

export default function FlowersOptions(props: FlowersOptionsProps) {

    const items = props.children.map(x => <p className='flowers-options__option'>{x}</p>);

    return (
        <section className={classNames('flowers-options', props.className)}>
            {items}
        </section>
    )
}