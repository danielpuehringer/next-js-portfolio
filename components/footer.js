/**
 * Created by danie on 11.05.2019.
 */
import Link from 'next/link';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="empty-row">
            </div>

            <div className="col-12">
                <h2 className="horizontal-line--secondary d-flex justify-content-center">Contact Me</h2>
            </div>

            <div className="empty-row">
            </div>

            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center margin-top--1em">
                    <a className="external-link" href="https://github.com/danielpuehringer?tab=repositories" target="_blank"><i className="fab fa-github fa-3x"></i></a>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center margin-top--1em">
                    <a className="external-link" href="https://www.linkedin.com/in/daniel-puehringer0456/" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center margin-top--1em">
                    <a className="external-link" href="https://www.xing.com/profile/Daniel_Puehringer2/cv" target="_blank"><i className="fab fa-xing-square fa-3x"></i></a>
                </div>
                <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-center margin-top--1em">
                    <a className="external-link" href="https://www.facebook.com/daniel.puhringer.3" target="_blank"><i className="fab fa-facebook fa-3x"></i></a>
                </div>
            </div>

            <div className="empty-row">
            </div>

            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <p>
                        <Link
                            href="/imprint"><a className="imprint">Imprint</a>
                        </Link>
                    </p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <p className="text-color--secondary">
                        ©{new Date().getFullYear()}, built by Daniel Pühringer
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer