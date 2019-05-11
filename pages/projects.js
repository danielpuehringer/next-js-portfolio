/**
 * Created by danie on 11.05.2019.
 */
import LayoutIndex from '../components/layout-index'
import Head from 'next/head';
import Link from 'next/link';

const Projects = () => (
    <LayoutIndex>
        <Head>
            <title>My Projects</title>
            <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
        </Head>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="horizontal-line--secondary">Projects</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-5 golden-card--container">
                    <h2>Frontend Clock <span class="text-color--secondary project-date">April 2018</span></h2>
                    <p>JavaScript App with MVVM-Pattern</p>
                    <a
                        href="https://github.com/danielpuehringer/frontend_clock"
                        target="_blank">
                        <img className="img-fluid--full-Width" src="/static/images/projects/clock.PNG" alt="Frontend Clock Material Design" />
                    </a>
                </div>

                <div class="col-12 col-md-5 golden-card--container">
                    <h2>Personality-Test <span class="text-color--secondary project-date">December 2018</span></h2>
                    <p>Angular application with forms and services</p>
                    <a
                        href="https://github.com/danielpuehringer/erzengel_test"
                        target="_blank">
                        <img className="img-fluid--full-Width" src="/static/images/projects/erzengeltest.PNG" alt="Daniel Pühringer Portrait" />
                    </a>
                </div>
            </div>


            <div className="row">
                <div className="col-12 col-md-5 golden-card--container">
                    <h2>Four in a row <span class="text-color--secondary project-date">May 2018</span></h2>
                    <p>JavaScript App with MVVM-Pattern and CSS animations</p>
                    <a
                        href="https://github.com/danielpuehringer/four-in-a-row"
                        target="_blank">
                        <img className="img-fluid--full-Width" src="/static/images/projects/four-in-a-row.PNG" alt="Daniel Pühringer Portrait" />
                    </a>
                </div>

                <div className="col-12 col-md-5 golden-card--container">
                    <h2>CMS Website <span class="text-color--secondary project-date">January 2018</span></h2>
                    <p>Typo3 Website with Bootstrap 3 about Cryptocurrencies</p>
                    <a
                        href="https://www.lutarex.com"
                        target="_blank">
                        <img className="img-fluid--full-Width" src="/static/images/projects/lutarex.PNG" alt="Daniel Pühringer Portrait" />
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-5 golden-card--container">
                    <h2>Usability Challenge 2018 <span class="text-color--secondary project-date">April 2018</span></h2>
                    <p>1st price for concept of AR-App for saving lifes</p>
                    <a
                        href="https://www.fh-ooe.at/campus-hagenberg/studiengaenge/bachelor/kommunikation-wissen-medien/news-events/news/news/news/kwm-team-gewinnt-zum-zweiten-mal-in-folge-usability-challenge/?fbclid=IwAR0vy5tqdRd2qhjl5GbQxu1xZIYlWOYzOegHTVg6f_DztJyvcr9U-bWnrHk"
                        class="cursor--pointer:hover"
                        target="_blank">
                        <img className="img-fluid--full-Width" src="/static/images/projects/MuC2018.JPG" alt="Daniel Pühringer Portrait" />
                    </a>
                </div>

                <div className="col-12 col-md-5 golden-card--container">
                    <h2>PHP Shopping-List <span class="text-color--secondary project-date">May 2018</span></h2>
                    <p>My first PHP Application & mySql DB - Materialize.css</p>
                    <a
                        href="https://github.com/danielpuehringer/php_shoppinglist"
                        class="cursor--pointer:hover"
                        target="_blank">
                        <img className="img-fluid--full-Width" src="/static/images/projects/shoppingList.PNG" alt="Daniel Pühringer Portrait" />
                    </a>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-md-6 headline-margin-top--double">
                    <Link
                        href="/"><a className="link button">More Info About Me</a>
                    </Link>
                </div>
            </div>
        </div>
    </LayoutIndex>
);

export default Projects