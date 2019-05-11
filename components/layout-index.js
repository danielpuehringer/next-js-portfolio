/**
 * Created by danie on 11.05.2019.
 */
import Header from '../components/header';
import Footer from '../components/footer';
import Head from 'next/head';

const LayoutIndex = props => (
    <div>

        <Head>
            <link href="../static/styles/bootstrap/bootstrap-grid.min.css" rel="stylesheet"/>
            <link href="../static/styles/global.css" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/brands.css" integrity="sha384-n9+6/aSqa9lBidZMRCQHTHKJscPq6NW4pCQBiMmHdUCvPN8ZOg2zJJTkC7WIezWv" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/fontawesome.css" integrity="sha384-vd1e11sR28tEK9YANUtpIOdjGW14pS87bUBuOIoBILVWLFnS+MCX9T6MMf0VdPGq" crossorigin="anonymous"/>
        </Head>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </div>

);

export default LayoutIndex