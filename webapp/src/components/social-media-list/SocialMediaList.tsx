import SocialMediaListProps from "./SocialMediaListProps";
import { ReactComponent as VkLogo } from './icons/vk_icon.svg';
import { ReactComponent as FbLogo } from './icons/fb_icon.svg';
import { ReactComponent as InstLogo } from './icons/inst_icon.svg';
import { ReactComponent as WaLogo } from './icons/wa_icon.svg';
import SocialMedia from "./social-media/SocialMedia";

export default function SocialMediaList(props: SocialMediaListProps): JSX.Element {

    return (
        <section className={props.className}>
            <SocialMedia render={className =>
                <VkLogo className={className} />
            } />
            <SocialMedia render={className =>
                <FbLogo className={className} />
            } />
            <SocialMedia render={className =>
                <InstLogo className={className} />
            } />
            <SocialMedia render={className =>
                <WaLogo className={className} />
            } />
        </section>
    )
}