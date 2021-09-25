import SocialMediaProps from "./SocialMediaProps";
import './social-media.scss'

export default function SocialMedia(props: SocialMediaProps): JSX.Element {

    return (
        <button onClick={props.onClick}
            className='social-media-button'>
            {props.render('social-media-button__icon')}
        </button>
    )
}