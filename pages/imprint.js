/**
 * Created by danie on 10.05.2019.
 */

import LayoutIndex from '../components/layout-index'
import Head from 'next/head';

const Imprint = () => (
    <LayoutIndex>
        <Head>
            <title>Imprint - Dapu</title>
        </Head>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="horizontal-line--secondary">Imprint</h2>
                    <h3>Media Owner</h3>
                    <p>Daniel Pühringer</p>
                </div>
            </div>

            <div class="row">
                <div class="col-8">
                    <h3 class="horizontal-line--secondary">Contact Information</h3>
                </div>
                <div class="col-12">
                    <p>E-Mail: <a class="external-link" href="mailto:zermetzler12@gmail.com">zermetzler12@gmail.com</a></p>
                    <p>Internet address: <a class="external-link" href="www.dapu.dev" target="_blank">www.dapu.dev</a></p>

                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <h3 class="horizontal-line--secondary">Acknowledges</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p>Main inspiration for design: <a class="external-link" href="https://brittanychiang.com/" target="_blank">Brittany Chiang</a></p>
                    <p>Website entirely built with <a class="external-link" href="https://nextjs.org/">NextJS</a></p>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <h3 class="horizontal-line--secondary">Disclaimer</h3>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    Accountability for content
                    The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
                    accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for
                    our own content on these web pages. In this matter, please note that we are not obliged to monitor
                    the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
                    Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per
                    §§ 8 to 10 of the Telemedia Act (TMG).
                    Accountability for links
                    Responsibility for the content of
                    external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were
                    evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective
                    link immediately.Copyright Our web pages and their contents are subject to German copyright law. Unless
                    expressly permitted by law, every form of utilizing, reproducing or processing
                    works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights.
                    Individual reproductions of a work are only allowed for private use.
                    The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <h3 class="horizontal-line--secondary">Source</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <i>Quelle: </i>
                    <a class="external-link" href="http://www.translate-24h.de" target="_blank">translate-24h Deutsch-Englisch Übersetzungen</a>
                </div>
            </div>
        </div>
    </LayoutIndex>
);

export default Imprint