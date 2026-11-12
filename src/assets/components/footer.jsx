function Footer() {
    return (
        <div>
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Section */}
                        <div className="col-md-6">

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-secondary rounded-circle p-2 me-3">
                                    📍
                                </div>
                                <div>
                                    <small className="d-block">21 Revolution Street</small>
                                    <strong className="d-block">Paris, France</strong>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-secondary rounded-circle p-2 me-3">
                                    📞
                                </div>
                                <div>
                                    <small>+1 555 123456</small>
                                </div>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="bg-secondary rounded-circle p-2 me-3">
                                    ✉
                                </div>
                                <div>
                                    <a href="#" className="text-primary text-decoration-none">
                                        support@company.com
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* Right Section */}
                        <div className="col-md-6">

                            <h6 className="fw-bold">ABOUT THE COMPANY</h6>

                            <p className="text-secondary small">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                            </p>

                            <div className="d-flex gap-2">
                                <a href="#" className="btn btn-secondary btn-sm">f</a>
                                <a href="#" className="btn btn-secondary btn-sm">♥</a>
                                <a href="#" className="btn btn-secondary btn-sm">in</a>
                                <a href="#" className="btn btn-secondary btn-sm">⌕</a>
                            </div>

                        </div>

                    </div>
                </div>
            </footer>
        </div>

    )
}
export default Footer