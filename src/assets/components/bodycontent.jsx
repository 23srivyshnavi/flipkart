function Bodycontent() {
    return (
        <div>
            <div className="container py-5">

                {/* Heading */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold">Welcome to Our Website</h1>
                    <p className="text-muted">
                        We provide the best services and solutions for our customers.
                    </p>
                </div>

                {/* Content */}
                <div className="row g-4">

                    <div className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">
                                    We create modern and responsive websites.
                                </p>
                                <button className="btn btn-primary">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">Mobile Development</h5>
                                <p className="card-text">
                                    We build powerful and user-friendly mobile applications.
                                </p>
                                <button className="btn btn-success">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow-sm h-100">
                            <div className="card-body text-center">
                                <h5 className="card-title">UI/UX Design</h5>
                                <p className="card-text">
                                    We design attractive and easy-to-use interfaces.
                                </p>
                                <button className="btn btn-warning">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Bodycontent