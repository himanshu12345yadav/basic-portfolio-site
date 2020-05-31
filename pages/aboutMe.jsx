import Layout from '../components/Layout';
import Head from 'next/head';
const AboutMe = () => {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>
            <div className="AboutMe">
                <div className="image">
                    <img
                        src="./image_bg.png"
                        alt="image"
                        align="center"
                        style={{
                            margin: '0',
                            borderRadius: '50%',
                        }}
                        id="image"
                    />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="2">
                                <h2
                                    className="heading"
                                    style={{
                                        padding: '20px',
                                    }}
                                >
                                    who am i?
                                </h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>HIMANSHU</td>
                        </tr>
                        <tr>
                            <td>roll no</td>
                            <td>2019KUEC2009</td>
                        </tr>
                        <tr>
                            <td>Branch</td>
                            <td>electronics and communciation engineering</td>
                        </tr>
                        <tr>
                            <td>occupation</td>
                            <td>student</td>
                        </tr>
                        <tr>
                            <td>fields of interest</td>
                            <td>
                                ethical hacking, computers, networking,robotics,
                                Artificial Intelligence
                            </td>
                        </tr>
                        <tr>
                            <td>Qualities</td>
                            <td>
                                Autodidact(self learner), passionately curious
                            </td>
                        </tr>
                        <tr>
                            <td>motivational quote</td>
                            <td>
                                <i>
                                    it's not that i am so smart, it's just that
                                    i stay with problems longer.
                                </i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <style jsx>{`
                * {
                    color: #000;
                }
                .AboutMe {
                    margin: 30px auto;
                    text-transform: capitalize;
                }
                thead {
                    border: 0px;
                }
                .AboutMe table {
                    margin: auto;
                    width: 90%;
                    border: 0px;
                }
                .AboutMe table {
                    transform: translateY(-40px);
                }
                .AboutMe table td {
                    width: 300px;
                }
                .AboutMe table,
                td,
                th {
                    border: 2px solid var(--blue);
                    border-left: 0;
                    border-right: 0;
                    border-collapse: collapse;
                    font-size: 20px;
                    text-align: center;
                    height: 65px;
                }
                .AboutMe tr:nth-child(even) {
                    background-color: var(--caded);
                }
                .AboutMe th {
                    background-color: var(--purple);
                    height: 50px;
                }
                .heading {
                    background-color: var(--lavender);
                    text-transform: capitalize;
                }
                .image {
                    border: 5px solid var(--tea);
                    display: block;
                    width: 350px;
                    border-radius: 50%;
                    margin: auto;
                    overflow: hidden;
                }
                .image img {
                    border-radius: 50%;
                    width: 350px;
                    transition: transform 0.4s ease-in-out;
                }
                .image img:hover {
                    cursor: zoom-in;
                    transform: scale(1.1);
                }
                @media (max-width: 900px) {
                    .AboutMe table th,
                    td {
                        height: 75px;
                        font-size: 17px;
                    }
                    .image {
                        width: 300px;
                    }
                    .image img {
                        width: 300px;
                    }
                }
                @media (max-width: 780px) {
                    .AboutMe table td {
                        height: 70px;
                        font-size: 16px;
                    }
                    .image {
                        width: 300px;
                    }
                    .image img {
                        width: 300px;
                    }
                }
                @media (max-width: 580px) {
                    .AboutMe table {
                        width: 95%;
                    }
                    .AboutMe table td {
                        height: 80px;
                        font-size: 15px;
                    }
                    .image {
                        width: 300px;
                    }
                    .image img {
                        width: 300px;
                    }
                }
                @media (max-width: 420px) {
                    .AboutMe table {
                        width: 95%;
                    }
                    .AboutMe table td {
                        height: 80px;
                        font-size: 13px;
                    }
                    .image {
                        width: 300px;
                    }
                    .image img {
                        width: 300px;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default AboutMe;
