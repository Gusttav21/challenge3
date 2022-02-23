import {ReactElement} from 'react';
import {Personalization} from '@croct/plug-react';

function OnboardingPage(): ReactElement {
    return (
        <Personalization expression="user's persona is not 'developer'" initial={false}>
            {(isDeveloper: boolean) => isDeveloper
                ? <a href="/docs">View docs</a>
                : <a href="/share">Share with your developer</a>
            }
        </Personalization>
    )
}