import React from "react";

const Form = () => {
    return (
        <section className="contact-section section-padding" id="section_6">
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 col-12 mx-auto">
                        <h2 className="text-center mb-4">Interested? Let's talk</h2>

                        <nav className="d-flex justify-content-center">
                            <div className="nav nav-tabs align-items-baseline justify-content-center" id="nav-tab"
                                role="tablist">
                                <button className="nav-link active" id="nav-ContactForm-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-ContactForm" type="button" role="tab"
                                    aria-controls="nav-ContactForm" aria-selected="false">
                                    <h5>Contact Form</h5>
                                </button>

                                <button className="nav-link" id="nav-ContactMap-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-ContactMap" type="button" role="tab"
                                    aria-controls="nav-ContactMap" aria-selected="false">
                                    <h5>Google Maps</h5>
                                </button>
                            </div>
                        </nav>

                        <div className="tab-content shadow-lg mt-5" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-ContactForm" role="tabpanel"
                                aria-labelledby="nav-ContactForm-tab">
                                <form className="custom-form contact-form mb-5 mb-lg-0" action="#" method="post"
                                    role="form">
                                    <div className="contact-form-body">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-12">
                                                <input type="text" name="contact-name" id="contact-name"
                                                    className="form-control" placeholder="Full name" required />


                                            </div>

                                            <div className="col-lg-6 col-md-6 col-12">
                                                <input type="email" name="contact-email" id="contact-email"
                                                    pattern="[^ @]*@[^ @]*" className="form-control"
                                                    placeholder="Email address" required />
                                            </div>
                                        </div>

                                        <input type="text" name="contact-company" id="contact-company"
                                            className="form-control" placeholder="Company" required />

                                        <textarea name="contact-message" rows="3" className="form-control"
                                            id="contact-message" placeholder="Message"></textarea>

                                        <div className="col-lg-4 col-md-10 col-8 mx-auto">
                                            <button type="submit" className="form-control">Send message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="tab-pane fade" id="nav-ContactMap" role="tabpanel"
                                aria-labelledby="nav-ContactMap-tab">
                                <iframe className="google-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                                    width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default Form;