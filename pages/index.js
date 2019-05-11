import LayoutIndex from '../components/layout-index';
import Head from 'next/head';
import Link from 'next/link';


const Index = () => (
    <div>
        <Head>
            <title>Dapu.dev - HOME</title>
            <META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
        </Head>
        <LayoutIndex>
            <div class="container">
                <div class="empty-row">
                </div>
                <div class="row">
                    <div class="col-12">
                        <h3 class="headline-margin--none headline-weight--normal">Hey there, I´m</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h1 class="headline-margin-top--half text-color--secondary">Daniel Pühringer</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h2 class="headline-margin--none headline-weight--normal">and my passion is Web Development.</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h4 class="headline-weight--normal">
                            I´m a <span class="text-color--tertiary">Frontend Developer</span> from Hagenberg in Austria.
                            My focus is on creating fast and astonishing <span class="text-color--tertiary">Websites</span>.
                            Currently I´m finishing my Bachlor´s Degree with a focus
                            <span class="text-color--tertiary"> on Web Development and UX-Design</span>.
                        </h4>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-6 headline-margin-top--double">
                        <Link
                            href="/projects"><a className="link button">See My Projects</a>
                        </Link>
                    </div>
                </div>

                <div class="empty-row">
                </div>

                <div class="row">
                    <div class="col-12">
                        <img className="img-fluid--full-Width" src="/static/images/portrait_Gold.jpg" alt="Daniel Pühringer Portrait" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h2 class="horizontal-line--secondary">My Life</h2>
                        <p class="headline-margin-top--double">
                            Welcome to my happy place!
                            I´m Daniel Pühringer from Hagenberg
                            in Austria. I fell in love with Web
                            Development at the age of 16.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <p>
                            Since I wanted to enhance my skills
                            ever since, I have already worked in
                            several IT-companies and studied in
                            the field of frontend development and
                            UX-Design.
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12">
                        <h2 class="horizontal-line--secondary">My Skills</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h2 class="horizontal-line--secondary">Frontend</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ul class="row list">
                            <li class="col-4 list-item">HTML5</li>
                            <li class="col-4 list-item">CSS3</li>
                            <li class="col-4 list-item">JS</li>
                        </ul>
                    </div>
                    <div class="col-12 col-md-6">
                        <ul class="row list">
                            <li class="col-4 list-item">Angular</li>
                            <li class="col-4 list-item">React</li>
                            <li class="col-4 list-item">TYPO3</li>
                        </ul>
                    </div>
                </div>


                <div class="row">
                    <div class="col-6">
                        <h2 class="horizontal-line--secondary">Backend</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ul class="row list">
                            <li class="col-4 list-item">MySql</li>
                            <li class="col-4 list-item">php</li>
                            <li class="col-4 list-item">Laravel</li>
                        </ul>
                    </div>
                </div>


                <div class="row">
                    <div class="col-6">
                        <h2 class="horizontal-line--secondary">UX-Design</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ul class="row list">
                            <li class="col-6 list-item">Prototyping</li>
                            <li class="col-6 list-item">UCD-Process</li>
                        </ul>
                    </div>
                </div>

            </div>
        </LayoutIndex>
    </div>

);

export default Index
