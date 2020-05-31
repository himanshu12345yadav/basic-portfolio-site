import Head from 'next/head';
import Layout from '../components/Layout';

const Subjects = () => {
    return (
        <Layout>
            <Head>
                <title>Subjects</title>
            </Head>

            <h2
                align="center"
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
                PRESCRIBED COUSE STRUCTURE FOR FIRST YEAR 2<sup>nd</sup>{' '}
                SEMESTER STUDENTS
            </h2>
            <hr style={{ border: '2px solid black' }} />
            <div className="table" style={{ width: '100%' }}>
                <table>
                    <thead>
                        <tr>
                            <th>COURSE NAME</th>
                            <th>PRESCRIBED BOOKS</th>
                            <th>CREDITS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Electronics Devices And Circuits</td>
                            <td>Jacob Millman, Christos C. Halkias,</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Data Structures And Algorithms</td>
                            <td>Ellis Horowitz, Sartaj Sahni</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Internet And Web Technologies</td>
                            <td>Robert W. Sebesta, </td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Health, Safety And Environment</td>
                            <td>J. McCornick, M.S. Sanders, </td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Mathemantics - 2</td>
                            <td>Erwin Kreyszig</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>Human Values And Effective Communication</td>
                            <td>O. Henry, “After Twenty Years”</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <style jsx>{`
                * {
                    color: #0d1f2d;
                }
                table,
                td,
                tr,
                th {
                    border: 2px solid black;
                    border-collapse: collapse;
                    height: 85px;
                    text-align: center;
                    font-size: 20px;
                }
                th {
                    width: 5%;
                }
                table {
                    border: 0px;
                    display: block;
                    width: 90%;
                    height: auto;
                    margin: 50px auto;
                }
                th {
                    background-color: var(--blue);
                    color: var(--lavender);
                }
                tr:nth-child(even) {
                    background-color: #007991;
                }
                @media (max-width: 990px) {
                    thead tr th {
                        font-size: 19px;
                    }
                    h2 {
                        font-size: 20px;
                    }
                    table tbody td {
                        font-size: 17px;
                    }
                }
                @media (max-width: 800px) {
                    table {
                        width: 95%;
                    }
                    table td,
                    th,
                    tr {
                        height: 70px;
                    }
                    table thead tr,
                    th {
                        font-size: 15px;
                    }
                    h2 {
                        font-size: 18px;
                    }
                    table tbody td {
                        font-size: 14px;
                    }
                }
                @media (max-width: 500px) {
                    table {
                        width: 98%;
                    }
                    h2 {
                        font-size: 14px;
                    }
                    thead tr th {
                        font-size: 15px;
                    }
                    table tbody td {
                        font-size: 13px;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default Subjects;
