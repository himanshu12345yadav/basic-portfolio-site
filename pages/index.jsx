import Layout from '../components/Layout';
import Head from 'next/head';
const HomePage = () => {
    return (
        <Layout>
            <Head>
                <title>Home</title>
            </Head>
            <div className="container">
                <div className="image">
                    <img src="/image.png" alt="image" />
                </div>
                <div className="intro">
                    <h1>Himanshu Yadav</h1>
                    <h2>Student | Programmer | Learner | Tech Enthusiast</h2>
                </div>
            </div>
            <style jsx>{`
                .container {
                    margin: 3rem auto 13rem;
                    display: grid;
                    place-items: center;
                }
                .image img {
                    height: 20rem;
                }
                .intro h1,
                h2 {
                    margin: 20px;
                    color: var(--slate-blue);
                    letter-spacing: 0.1rem;
                    font-family: 'Lobster', cursive;
                    transform: rotateZ(-5deg);
                    text-align: center;
                }
                @media (max-width: 780px) {
                    .intro h2 {
                        font-size: 1.5rem;
                    }
                    .image img {
                        height: 15rem;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default HomePage;
