import React from 'react';

const About_Page = (props) => {
    return(
        <div>
            {/* Header */}
            <div className="container-fluid" style={{backgroundColor: "lightblue"}}>
                <div className="row">
                    <div className="col bg-light py-5" style={{"borderBottom" : "2px solid grey"}}>
                        <h1> About Me </h1>
                    </div>
                </div>
            </div>
            <p>Hi! My name is Daniel. I am a freelance developer currently based in Kansas City, MO. I attended Kansas State University from 2013 to 2019. Initially, I studied Computer and Electrical Engineering, but switched to Accouting and Finance for financial reasons. After finding that I really wasn't that engaged with my Accounting studies, and missed working with computers, I finally settled on studying Management Information Systems, in which I obtained my Bachelor's of Science degree in May 2019. During my time at K-State, I also studied Ceramic Arts for 4 years after discovering a love for working in clay. I currently work for Cerner Corporation as a Technical Solutions Analyst, and am continuing my studies via the Data Analytics Bootcamp offered by Kansas University (traitor, I know!) Eventually, I plan on obtaining my Masters degree, and am intending to move into the field of Artificial Intelligence engineering, with a business focus. </p> 
            <p> In my free time, I do a lot of different things. As of writing this, most of my time goes toward working on my personal projects, which I hope will be able to help a lot of people once I am done with them, and gaming. Some of my favorite games include Factorio, The Sims (particularly 3), and EVE Online.</p>
            </div>
        )
    }

export default About_Page;