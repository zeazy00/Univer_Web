import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import RadioSelectorProps from "./RadioSelectorProps";
import './assets.scss';

export default function RadioSelector(props: RadioSelectorProps): JSX.Element {

    const [id] = useState(uuidv4())

    return (
        <section className='radio-selector'>
            <input type="radio"
                name={props.name}
                id={id}
                className='radio-selector__radio' />
            <label htmlFor={id}
                className='radio-selector__label'>
                {props.children}
            </label>
        </section>
    );
}