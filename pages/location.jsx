import Layout from '../components/Layout';
import Head from 'next/head';
const Location = () => {
    return (
        <Layout>
            <Head>
                <title>Location</title>
            </Head>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d889.7244322777816!2d75.78943382919334!3d26.874990195205292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzMwLjAiTiA3NcKwNDcnMjMuOSJF!5e0!3m2!1sen!2sin!4v1581791040747!5m2!1sen!2sin"
                frameBorder="0"
                name="iframe-box"
            ></iframe>
        </Layout>
    ); 
};

export default Location;
