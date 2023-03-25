import './Work.scss';

export function Work() {
    return (
        <div>
            <img src={require("./assets/naples-presentation.png")} alt="" className="img1"/>
            <img src={require("./assets/naples-biblioteca.png")} alt="" className="img2"/>
            <div className='experience-box'>
                <h1> Undergraduate Researcher </h1>
                <h2> EduceLab (Digital Restoration Initiative) </h2>
                <h2> Lexington, KY - USA </h2>
                <p>
                    EduceLab is a state-of-the-art heritage science Lab
                    at the university of Kentucky. For two years, I worked
                    under Dr. Brent Seales guidance to develop software to
                    study damaged ancient scrolls through technology, sometimes
                    revealing text that was previously invisible to the naked
                    eye. We used computer vision, image processing, and
                    cutting edge technology to create original software
                    and have lasting impact in papyrology, including our
                    work on the 2000 year-old Herculaneum Scrolls.
                </p>
                <p>
                    In 2022 my team and I presented our research internationally
                    at the University of Naples Federico II in Naples, Italy.
                    During this field trip we also got to visit the achaeological
                    sites and the valuable scrolls from Herculaneum. We also
                    presented at the Kentucky Academy of Science, where we won 
                    top score for our undergraduate research, and at the National
                    Conference of Undergraduate Research (NCUR) in Wisconsin.
                </p>
            </div>
        </div>
    );
}