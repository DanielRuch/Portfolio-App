import React from 'react';

const Tech_Page = (props) => {
    return(
    //Header
    <div className="container-fluid" style={{backgroundColor : "lightblue"}}>
        <div className="row">
            <div className="col bg-light py-5" style={{"borderBottom" : "2px solid grey"}}>
                <h1> Technologies - Confidence Levels</h1>
            </div>
        </div>
        <div className="mx-5 pb-5">
            {/* Web Development Section */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card pr-auto mt-5">
                        <div className="card-header">
                            <h1 className="card-title"> Web Development </h1>
                        </div>
                        <div className="card-body">
                            {/* React.js */}
                            <h5 className="mt-3"> React.js </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>

                            {/* JavaScript */}
                            <h5 className="mt-3"> JavaScript </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                            </div>

                            {/* HTML */}
                            <h5 className="mt-3"> HTML/CSS </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Database Section */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card pr-auto mt-5">
                        <div className="card-header">
                            <h1 className="card-title"> Database Development/Administration </h1>
                        </div>
                        <div className="card-body">

                            {/* SQL */}
                            <h5 className="mt-3"> SQL </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>

                            {/* IBM InfoSphere Data Architect */}
                            <h5 className="mt-3"> IBM InfoSphere Data Architect  </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>

                            {/* Microsoft SSRS */}
                            <h5 className="mt-3"> Microsoft SQL Server Reporting Services (SSRS) </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>

                            {/* PostgreSQL */}
                            <h5 className="mt-3"> PostgreSQL</h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Programming Languages */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card pr-auto mt-5">
                        <div className="card-header">
                            <h1 className="card-title"> Programming Languages </h1>
                        </div>
                        <div className="card-body">
                            {/* Python */}
                            <h5 className="mt-3"> Python </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>
                            <div className="ml-5">
                                {/* Pandas */}
                                <h5 className="mt-3"> Pandas</h5>
                                <div className="progress">
                                    <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                                {/* NumPy */}
                                <h5 className="mt-3"> NumPy </h5>
                                <div className="progress">
                                    <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </div>

                            {/* Visual Basic */}
                            <h5 className="mt-3"> Visual Basic  </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "80%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>

                            {/* C# */}
                            <h5 className="mt-3"> C# </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "90%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                            </div>

                            {/* VBA */}
                            <h5 className="mt-3"> VBA </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                            </div>

                            {/* Java */}
                            <h5 className="mt-3"> Java </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>

                            {/* C++*/}
                            <h5 className="mt-3"> C++ </h5>
                            <div className="progress">
                                <div className="progress-bar text-left pl-2" role="progressbar" style={{"width": "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export default Tech_Page;