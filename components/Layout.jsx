import Link from './Link';
import Head from 'next/head';
import TypingEffect from './typing';
const Layout = ({ children }) => {
    const toggle = () => {
        const burger = document.getElementsByClassName('burger-content')[0];
        const links = document.getElementsByClassName('links')[0];
        const linksdiv = document.querySelector('.links-div');
        links.classList.toggle('links-down');

        if (links.classList.contains('links-down')) {
            burger.classList.toggle('burger-open');
            linksdiv.classList.add('links-collapse');
        } else {
            burger.classList.toggle('burger-open');
            setTimeout(() => {
                linksdiv.classList.remove('links-collapse');
            }, 500);
        }
    };

    return (
        <React.Fragment>
            <Head>
                <title>Home</title>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Poppins|Lobster|Roboto+Condensed:wght@400;700|Manrope:wght@800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                    rel="stylesheet"
                />
                <link
                    rel="shortcut icon"
                    href="./Logo.png"
                    type="image/x-icon"
                />
            </Head>
            <div className="navbar">
                <div className="header-icons">
                    <Link href="/">
                        <a>
                            <img
                                src="./Logo.png"
                                alt="html icons"
                                height="50"
                            />
                        </a>
                    </Link>
                    <div
                        className="burger-description"
                        type="button"
                        onClick={(event) => toggle(event)}
                    >
                        <div className="burger burger-slider">
                            <div className="burger-content burger-slider-content"></div>
                        </div>
                    </div>
                </div>
                <div className="links-div">
                    <div className="links">
                        <ul>
                            <Link href="/">
                                <a className="navitems">
                                    <i className="fa fa-home"></i>HOME
                                </a>
                            </Link>
                        </ul>
                        <ul>
                            <Link
                                href="/location"
                            >
                                <a className="navitems">
                                    <i className="fa fa-map-marker"></i>LOCATION
                                </a>
                            </Link>
                        </ul>

                        <ul>
                            <Link
                                href="/projects"
                            >
                                <a className="navitems">
                                    <i className="fa fa-tasks"></i>Projects
                                </a>
                            </Link>
                        </ul>

                        <ul>
                            <Link
                                href="/subjects"
                            >
                                <a className="navitems">
                                    <i className="fa fa-book"></i>SUBJECTS
                                </a>
                            </Link>
                        </ul>
                        <ul>
                            <Link
                                href="/aboutHtml"
                            >
                                <a className="navitems">
                                    <i className="fa fa-html5"></i>ABOUT HTML
                                </a>
                            </Link>
                        </ul>

                        <ul>
                            <Link
                                href="/aboutMe"
                            >
                                <a className="navitems">
                                    <i className="fa fa-user"></i>ABOUT ME
                                </a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <TypingEffect />
            <div>{children}</div>
            <footer id="copyright">
                &copy; 2020
                <span className="youtube">
                    <a
                        href="https://www.youtube.com/channel/UC5umyuP_33AQ-WGvHEexnOA"
                        target="_blank"
                    >
                        <i className="fa fa-youtube-play fa-2x"></i>
                    </a>
                    <a
                        href="https://github.com/himanshu12345yadav"
                        target="_blank"
                    >
                        <i
                            className="fa fa-github fa-2x"
                            style={{ color: '#211f1f' }}
                        ></i>
                    </a>
                </span>
                <div id="footer-statement">
                    Made With &nbsp;
                    <i className="fa fa-heart" style={{ color: '#CC3D5C' }}></i>
                    &nbsp; by Himanshu Yadav
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Layout;
