import Layout from '../components/Layout';
import Head from 'next/head';
const AboutHtml = () => {
    return (
        <Layout>
            <Head>
                <title>About HTML</title>
            </Head>
            <h1 align="center" id="main-heading">
                HTML BASIC TAGS AND THEIR USES
            </h1>
            <h1 style={{ marginTop: '40px' }} align="center">
                CONTENTS
            </h1>
            <h2
                align="center"
                style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    textTransform: 'capitalize',
                }}
                id="mainHeading"
            >
                read on the complete documentation or just move on to:
            </h2>
            <div className="arrow-up" title="move-to-top">
                <a href="#main-heading" style={{ textDecoration: 'none' }}>
                    <i className="fa fa-arrow-circle-up"></i>
                </a>
            </div>
            <div className="contents">
                <ul>
                    <li>
                        <a href="#layoutTags">HTML LAYOUT TAGS</a>
                    </li>
                    <li>
                        <a href="#basicTags">BASIC TAGS</a>
                    </li>
                    <li>
                        <a href="#tableTags">TABLE TAGS</a>
                    </li>
                    <li>
                        <a href="#formTags">FORM TAGS</a>
                    </li>
                    <li>
                        <a href="#lists">LISTS</a>
                    </li>
                    <li>
                        <a href="#multimedia">MULTIMEDIA</a>
                    </li>
                </ul>
            </div>
            <div className="htmlTags" id="layoutTags">
                <table>
                    <caption style={{ paddingTop: '8px' }}>
                        HTML LAYOUT TAGS
                    </caption>
                    <thead>
                        <tr>
                            <th>HTML TAGS</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&lt;!DOCTYPE html&gt;</td>
                            <td>Describes the version of the html</td>
                        </tr>
                        <tr>
                            <td>&lt;head&gt;</td>
                            <td>paragraph tag</td>
                        </tr>
                        <tr>
                            <td>&lt;meta&gt;</td>
                            <td>
                                Gives information about the html page like
                                author, description, viewport
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;title&gt;</td>
                            <td>Describes the title of the page</td>
                        </tr>
                        <tr>
                            <td>&lt;body&gt;</td>
                            <td>body tag contains all document</td>
                        </tr>
                        <tr>
                            <td>&lt;Header&gt;</td>
                            <td>Makes a section at the starting</td>
                        </tr>
                        <tr>
                            <td>&lt;aside&gt;</td>
                            <td>Describes a side bar</td>
                        </tr>
                        <tr>
                            <td>&lt;section&gt;</td>
                            <td>Describes a section</td>
                        </tr>
                        <tr>
                            <td>&lt;footer&gt;</td>
                            <td>Makes a section at the end of the document</td>
                        </tr>
                        <tr>
                            <td>&lt;style&gt;</td>
                            <td>Used to embed inline CSS in the html page</td>
                        </tr>
                        <tr>
                            <td>&lt;link&gt;</td>
                            <td>
                                This is used to link files, API,and other
                                resources
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;script&gt;</td>
                            <td>Used to write a JavaScript Code</td>
                        </tr>
                        <tr>
                            <td>&lt;!--....--&gt;</td>
                            <td>Used to write comment in the Html document</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="htmlTags" id="basicTags">
                <table>
                    <caption style={{ paddingTop: '7px' }}>BASIC TAGS</caption>
                    <thead>
                        <tr>
                            <th>HTML TAGS</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&lt;h1-h6&gt;</td>
                            <td>Describes the size of headings</td>
                        </tr>
                        <tr>
                            <td>&lt;p&gt;</td>
                            <td>Used for writting a paragraph</td>
                        </tr>
                        <tr>
                            <td>&lt;br&gt;</td>
                            <td>Used to break from the line</td>
                        </tr>
                        <tr>
                            <td>&lt;hr&gt;</td>
                            <td>horizontal rule</td>
                        </tr>
                        <tr>
                            <td>&lt;strong&gt;</td>
                            <td>Used to bold the text</td>
                        </tr>
                        <tr>
                            <td>&lt;em&gt;</td>
                            <td>used to emphasize the text(italic)</td>
                        </tr>
                        <tr>
                            <td>&lt;del&gt;</td>
                            <td>Show a line through the text</td>
                        </tr>
                        <tr>
                            <td>&lt;mark&gt;</td>
                            <td>marks a specific text(highlighter)</td>
                        </tr>
                        <tr>
                            <td>&lt;sup&gt;</td>
                            <td>A superscript tag</td>
                        </tr>
                        <tr>
                            <td>&lt;sub&gt;</td>
                            <td>A subscript tag</td>
                        </tr>
                        <tr>
                            <td>&lt;small&gt;</td>
                            <td>Defines a smaller text</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="htmlTags" id="tableTags">
                <table>
                    <caption style={{ paddingTop: '7px' }}>
                        TABLE HTML TAGS
                    </caption>
                    <thead>
                        <tr>
                            <th>HTML TAGS</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&lt;table&gt;</td>
                            <td>Describes a table</td>
                        </tr>
                        <tr>
                            <td>&lt;caption&gt;</td>
                            <td>Describes a heading(caption) to the table</td>
                        </tr>
                        <tr>
                            <td>&lt;th&gt;</td>
                            <td>Describes a header column</td>
                        </tr>
                        <tr>
                            <td>&lt;td&gt;</td>
                            <td>describes data in the table cells</td>
                        </tr>
                        <tr>
                            <td>&lt;thead&gt;</td>
                            <td>Describes a head portion of the table</td>
                        </tr>
                        <tr>
                            <td>&lt;tbody&gt;</td>
                            <td>Describes the body of the table</td>
                        </tr>
                        <tr>
                            <td>&lt;tfoot&gt;</td>
                            <td>Describes the footer of the table</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="htmlTags" id="formTags">
                <table>
                    <caption style={{ paddingTop: '7px' }}>
                        HTML FORM TAGS
                    </caption>
                    <thead>
                        <tr>
                            <th>HTML TAGS</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&lt;form&gt;</td>
                            <td>Describes a region for form</td>
                        </tr>
                        <tr>
                            <td>&lt;input&gt;</td>
                            <td>Descibes a input region of many types</td>
                        </tr>
                        <tr>
                            <td>&lt;button&gt;</td>
                            <td>show visual of a button</td>
                        </tr>
                        <tr>
                            <td>&lt;select&gt;</td>
                            <td>It is used to select specific options</td>
                        </tr>
                        <tr>
                            <td>&lt;option&gt;</td>
                            <td>
                                Used along with select to select from the
                                options
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;textarea&gt;</td>
                            <td>Gives a area in which text can be written</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="htmlTags" id="lists">
                <table>
                    <caption style={{ paddingTop: '7px' }}>HTML LISTS</caption>
                    <thead>
                        <tr>
                            <th>HTML TAGS</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&lt;ol&gt;</td>
                            <td>Ordered Lists</td>
                        </tr>
                        <tr>
                            <td>&lt;ul&gt;</td>
                            <td>Unordered Lists</td>
                        </tr>
                        <tr>
                            <td>&lt;li&gt;</td>
                            <td>Lists Item</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="htmlTags" id="multimedia">
                <table>
                    <caption style={{ paddingTop: '7px' }}>MULTIMEDIA</caption>
                    <thead>
                        <tr>
                            <th>HTML TAGS</th>
                            <th>DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&lt;img&gt;</td>
                            <td>used to insert an image</td>
                        </tr>
                        <tr>
                            <td>&lt;video&gt;</td>
                            <td>
                                Defines a vedio in the region(only mp4,WebM,ogg
                                are accepted)
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;iframe&gt;</td>
                            <td>
                                Used to target another website/source inside
                                this website
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;audio&gt;</td>
                            <td>
                                Defines a audio file(only Mp3,wav,ogg are
                                accepted)
                            </td>
                        </tr>
                        <tr>
                            <td>&lt;source&gt;</td>
                            <td>Defines multiple Multimedia files</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <style jsx>{`
                .arrow-up i {
                    position: fixed;
                    top: 80vh;
                    left: 95vw;
                    font-size: 50px;
                    background-color: transparent;
                    opacity: 0.5;
                    color: #3b444b;
                    cursor: pointer;
                }
                #main-heading {
                    margin-top: 20px;
                    // border: 30px solid;
                    // border-color: #00dbde;
                    // border-right-color: transparent;
                    // border-left-color: transparent;
                }
                .contents {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                .contents ul {
                    background-color: rgba(85, 83, 88, 0.3);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 30%;
                    max-width: 60%;
                    border-radius: 30px;
                    border: 2px solid var(--slate-blue);
                }
                .contents ul li {
                    display: flex;
                    flex-direction: column;
                    font-size: 1.3rem;
                }
                li:after {
                    content: '';
                    margin: auto;
                    border: 2px solid var(--tea);
                    width: 0px;
                    border-radius: 10px;
                    visibility: hidden;
                    transition: width 0.5s ease-in-out,
                        visibility 0.5s ease-in-out;
                }
                li:hover:after {
                    width: 100%;
                    visibility: visible;
                }
                .contents ul li {
                    list-style-type: none;
                    font-size: 20px;
                    height: 50px;
                    padding: 10px;
                }
                .contents ul li a {
                    text-decoration: none;
                    color: black;
                }
                .htmlTags {
                    display: block;
                    margin: 100px auto;
                }
                .htmlTags table {
                    margin: auto;
                    width: 70%;
                    border: 0px;
                }
                .htmlTags table,
                td,
                th,
                caption {
                    border: 2px solid black;
                    border-collapse: collapse;
                    font-size: 18px;
                    text-align: center;
                    height: 50px;
                }
                .htmlTags tr:nth-child(even) {
                    background-color: var(--lavender);
                }
                .htmlTags th {
                    font-size: 1rem;
                    color: var(--silver-sand);
                    background-color: var(--blue);
                }
                .htmlTags caption {
                    background-color: var(--yellow);
                    border-bottom: 0;
                    font-size: 1.2rem;
                }
                @media (max-width: 810px) {
                    #mainHeading {
                        font-size: 20px;
                    }
                    .contents ul li {
                        font-size: 16px;
                        height: 45px;
                    }
                    .htmlTags table,
                    td,
                    th,
                    caption {
                        font-size: 15px;
                    }
                    .arrow-up i {
                        left: 95vw;
                        font-size: 45px;
                    }
                }
                @media (max-width: 680px) {
                    .htmlTags table th,
                    td {
                        height: 40px;
                    }
                    #mainHeading {
                        font-size: 16px;
                    }
                    .contents ul li {
                        font-size: 14px;
                        height: 40px;
                    }
                    .htmlTags table,
                    td,
                    th,
                    caption {
                        font-size: 13px;
                    }
                    .arrow-up i {
                        left: 90vw;
                        font-size: 40px;
                    }
                }
                @media (max-width: 590px) {
                    .htmlTags table th,
                    td {
                        height: 60px;
                    }
                    .htmlTags table {
                        width: 90%;
                    }
                    #mainHeading {
                        font-size: 14px;
                    }
                    .contents ul {
                        width: 300px;
                    }
                    .contents ul li {
                        font-size: 16px;
                    }
                    .arrow-up i {
                        left: 90vw;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default AboutHtml;
