import { MouseEvent, } from 'react';

export default interface SocialMediaProps {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    render: (className: string) => JSX.Element;
}