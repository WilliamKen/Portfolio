import React from 'react';
import CodeDrawer from '../components/CodeDrawer/CodeDrawer';
import ImageDrawer from '../components/ImageDrawer/ImageDrawer';
import ContactForm from '../components/ContactForm/ContactForm';
import '../css/Home.css';

function Home() {
    return (
        <div className="home-page">
            <div className="welcome-message">
                <div className="typing-effect">Welcome!</div>
                <div className="static-line">Thank you for taking the time to check out my portfolio.</div>
            </div>
            <div className="content-container">
                <ImageDrawer />
                <CodeDrawer />
            </div>
            <div className="static-line">If you have any questions or would like to reach out, please use the form below.</div>
            <ContactForm />
        </div>
    );
}

export default Home;
