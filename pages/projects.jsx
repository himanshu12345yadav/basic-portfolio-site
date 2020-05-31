import Head from 'next/head';
import Layout from '../components/Layout';

const Projects = () => {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
            </Head>
            <h1 align="center" className="heading">
                PROJECTS
            </h1>
            <div className="projects">
                <table>
                    <caption style={{ padding: '15px' }}>
                        projects performed
                    </caption>
                    <thead>
                        <tr>
                            <th>project name</th>
                            <th>Hardware or software used</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>self balancing robot</td>
                            <td>arduino,gyroscope(MPU-6060),PID algorithm</td>
                        </tr>
                        <tr>
                            <td>image processing</td>
                            <td>matlab,OpenCv(Python)</td>
                        </tr>
                        <tr>
                            <td>gradient descent optimisation algorithm</td>
                            <td>matlab</td>
                        </tr>
                        <tr>
                            <td>full fledged website</td>
                            <td>frontEnd,php,sql,nodejs</td>
                        </tr>
                        <tr>
                            <td>audio Fingerprinting(spectrogram)</td>
                            <td>
                                python(pyAudio,numpy,matplotlib),fast fourier
                                transform
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <style jsx>{`
                .projects {
                    display: block;
                    text-transform: capitalize;
                }
                .projects table {
                    margin: 30px auto;
                    width: 70%;
                    border: 0px;
                }
                .projects table th,
                td,
                caption {
                    height: 55px;
                }
                .projects table,
                td,
                th,
                caption {
                    border: 2px solid black;
                    border-collapse: collapse;
                    font-size: 17px;
                    text-align: center;
                }
                .projects tr:nth-child(even) {
                    background-color: var(--tea);
                }
                .projects th {
                    background-color: var(--yellow);
                }
                .projects caption {
                    background-color: var(--silver-sand);
                    border-bottom: 0px;
                    font-size: 1.3rem;
                    text-transform: capitalize;
                }
                @media (max-width: 880px) {
                    .projects table {
                        width: 80%;
                    }
                    .heading {
                        font-size: 25px;
                    }
                    #spacing {
                        font-size: 20px;
                    }
                    .projects table,
                    td,
                    th,
                    caption {
                        font-size: 15px;
                    }
                }
                @media (max-width: 680px) {
                    table th,
                    td {
                        height: 50px;
                    }
                    .projects table {
                        width: 85%;
                    }
                    .heading {
                        font-size: 18px;
                    }
                    #spacing {
                        font-size: 16px;
                        line-height: 30px;
                    }
                    .projects table,
                    td,
                    th,
                    caption {
                        font-size: 14px;
                    }
                }
                @media (max-width: 560px) {
                    table th,
                    td {
                        height: 60px;
                    }
                    .projects table {
                        width: 80%;
                    }
                    .heading {
                        font-size: 15px;
                    }
                    #spacing {
                        font-size: 15px;
                        line-height: 30px;
                    }
                    .projects table,
                    td,
                    th,
                    caption {
                        font-size: 13px;
                    }
                }
                @media (max-width: 450px) {
                    table th,
                    td {
                        height: 70px;
                    }
                    .projects table {
                        width: 90%;
                    }
                    .heading {
                        font-size: 14px;
                    }
                    #spacing {
                        font-size: 14px;
                        line-height: 30px;
                    }
                    .projects table,
                    td,
                    th,
                    caption {
                        font-size: 12px;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default Projects;
