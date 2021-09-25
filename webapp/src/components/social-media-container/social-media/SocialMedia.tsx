import SocialMediaProps from "./SocialMediaProps";
import './assets.scss'

export default function SocialMedia(props: SocialMediaProps): JSX.Element {

    return (
        <button onClick={props.onClick}
            className='social-media-button'>
            {props.render('social-media-button__icon')}
        </button>
    )
}