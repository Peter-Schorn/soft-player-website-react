import React from "react";

export default class Root extends React.Component {

    render() {
        return (
            <div>

                {/*  show breakpoints  */}
                {/* <div
                className="position-fixed text-nowrap rounded-3 p-1 m-3 bg-info opacity-50"
                style="z-index: 100;"
            >
                <div className="d-block d-sm-none">xs</div>
                <div className="d-none d-sm-block d-md-none">sm</div>
                <div className="d-none d-md-block d-lg-none">md</div>
                <div className="d-none d-lg-block d-xl-none">lg</div>
                <div className="d-none d-xl-block d-xxl-none">xl</div>
                <div className="d-none d-xxl-block">xxl</div>
            </div> */}

                {/*  navbar  */}
                <nav className="navbar navbar-expand-sm bg-light">
                    <div className="container-fluid">
                        <img className="me-3" src="app icon.svg" height="70"
                            width="70" alt="App Icon" />

                        <a className="navbar-brand fs-1 me-5" href="">Soft Player</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 text-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#privacy">Privacy</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                {/*  end navbar  */}

                {/*  subtitle  */}
                <div id="subtitle" className="text-center m-5 fs-1">
                    Control Spotify Playback from your Menu Bar
                </div>

                {/*  download on app store  */}
                <div className="container text-center pb-5">
                    <a href="https://apps.apple.com/us/app/soft-player/id1573149282?mt=12">
                        <img src="app store.svg" height="75" alt="download on the app store" />
                    </a>
                </div>

                <div className="container text-center pb-5">
                    <a href="https://github.com/Peter-Schorn/SoftPlayer">
                        <img src="github icon.svg" height="75" alt="source code on github" />
                    </a>
                </div>

                {/*  images  */}
                <div id="images" className="container-fluid">
                    <div className="row text-center">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <img src="player view.png" alt="player view" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <img src="albums view.png" alt="albums view" />
                        </div>
                    </div>
                </div>

                {/*  gif  */}
                <div id="gif-container">
                    <img src="spotlight_gif.gif" alt="spotlight search" />
                </div>

                {/*  carousel  */}
                <div id="carousel-container">
                    <div id="carousel" className="carousel slide mt-5" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carousel"
                                data-bs-slide-to="0" className="active" aria-current="true"
                                aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carousel"
                                data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carousel"
                                data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carousel"
                                data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carousel"
                                data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carousel"
                                data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="screenshots/player view with track.png" className="d-block w-100"
                                    alt="player view with track" />
                            </div>
                            <div className="carousel-item">
                                <img src="screenshots/playlists view.png" className="d-block w-100"
                                    alt="playlists view" />
                            </div>
                            <div className="carousel-item">
                                <img src="screenshots/albums view.png" className="d-block w-100"
                                    alt="albums view" />
                            </div>
                            <div className="carousel-item">
                                <img src="screenshots/queue view.png" className="d-block w-100"
                                    alt="queue view" />
                            </div>
                            <div className="carousel-item">
                                <img src="screenshots/player view with podcast.png" className="d-block w-100"
                                    alt="player view with podcast" />
                            </div>
                            <div className="carousel-item">
                                <img src="screenshots/Touchbar.jpeg" className="d-block w-100"
                                    alt="touchbar" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                            data-bs-target="#carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                            data-bs-target="#carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>

                {/*  features  */}
                <div id="features"
                    className="container-fluid px-3 text-start px-sm-3 text-sm-start px-md-5 text-md-start py-5">

                    <div className="row">
                        <div className="col-0 col-sm-0 col-md-1 col-lg-2">
                            {/*  spacer  */}
                        </div>
                        <div className="col-12 col-sm-12 col-md-11 col-lg-10">
                            <p className="fs-1 ms-2">Features</p>
                            <ul>
                                <li>View and control your Spotify playback directly from the menu bar</li>
                                <li>Play your playlists</li>
                                <li>Play your albums</li>
                                <li>See your queue</li>
                                <li>Transfer playback between your Spotify devices</li>
                                <li>Seek to position in your tracks</li>
                                <li>Change the volume</li>
                                <li>Toggle shuffle</li>
                                <li>Change the repeat mode</li>
                                <li>Touch bar support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/*  contact  */}
                <div id="contact" className="container-fluid p-5 text-center">
                    <p className="fs-1">
                        Contact
                    </p>
                    <p id="contact-body">
                        You can contact me using the email below.
                        <p>
                            petervschorn@gmail.com
                        </p>

                        {/*  privacy  */}
                        <div id="privacy" className="container-fluid p-5 text-center">
                            <p className="fs-1">
                                Privacy
                            </p>
                            <p id="privacy-body">
                                This app does not collect any data.
                            </p>
                        </div>

                        {/*  script  */}
                    </p>
                </div>

                {/*  script  */}

            </div>
        );
    }

}
