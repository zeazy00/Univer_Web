import React from "react";
import './first-screen.scss';
import SocialMediaList from "../../components/social-media-list/SocialMediaList";

export default function FirstScreen(): JSX.Element {
    return (
        <section className="first-screen">
            <section className="first-screen__logo">
                весна всегда
            </section>
            <section className="first-screen__welcome">
                флористика с душой
            </section>
            <SocialMediaList className='first-screen__social-medias_horizontal'/>
            <div className="first-screen__gradient"></div>
        </section>
    )
}