import {ReactElement, Fragment, Suspense} from 'react';
import {Personalization, useEvaluation} from '@croct/plug-react';

function ViewDocsLink(): ReactElement {
    const isDeveloper = useEvaluation<boolean>("user's persona is 'developer'", {fallback: false});

    return <Fragment>{isDeveloper && <a href="/docs">View docs</a>}</Fragment>
}

export default function OnboardingPage(): ReactElement {
    return (
        <Suspense fallback="✨ Personalizing...">
            {/* Using the <Personalization /> component */}
            <Personalization expression="user's persona is 'developer'" fallback={false}>
                {(isDeveloper: boolean) => (
                    <Fragment>
                        {isDeveloper && <a href="/docs">View docs</a>}
                    </Fragment>
                )}
            </Personalization>

            {/* Using useEvaluation hook */}
            <ViewDocsLink />
        </Suspense>
    )
}