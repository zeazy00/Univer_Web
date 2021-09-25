import FlowersOptionsProps from "./FlowersOptionsProps";
import './flowers-options.scss';
import classNames from "classnames";

export default function FlowersOptions(props: FlowersOptionsProps) {

    const items = props.children.map(x => <p className='flowers-options__option'>{x}</p>);

    return (
        <section className={classNames('flowers-options', props.className)}>
            {items}
        </section>
    )
}