import { Personalization } from '@croct/plug-react';
import { title } from 'process';
import React, {FunctionComponent, ReactElement, Suspense} from 'react';
import HomeBanner from './components/HomeBanner';
import Layout from './components/Layout';
import About from './components/About';


function App(){
    return(
        <Layout>
            <HomeBanner/>
            <About/>
        </Layout>
    );
}
export default App;
