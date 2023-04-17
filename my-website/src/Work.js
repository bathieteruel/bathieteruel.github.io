import './Page.scss';
import { Link } from "react-router-dom";

export function Work() {
    return (
        <div>
            <p className='title'>
                education
            </p>
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> BS, Computer Science </h1>
                    <h2> University of Kentucky </h2>
                    <h2> Minor in Mathematics </h2>
                    <p>
                        GPA: 4.0/4.0
                    </p>
                    <p>
                        Lewis Honors College
                    </p>
                </div>
            </div>
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> BS, Anthropology </h1>
                    <h2> University of Kentucky </h2>
                    <p>
                        GPA: 4.0/4.0
                    </p>
                    <p>
                        Lewis Honors College
                    </p>
                </div>
            </div>
            <p className='title'>
                presentations
            </p>
            <div className='presentation-box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> University of Naples Federico II </h1>
                    <h2> "Virtual Restoration of Herculaneum Scrolls" </h2>
                    <h2> Naples, Italy </h2>
                    <h2> Guest Speaker </h2>
            </div>
            <div className='presentation-box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> National Conference of Undergraduate Research </h1>
                    <h2> "Virtual Restoration of 2000-year-old Herculaneum Scrolls" </h2>
                    <h2> Eau Claire, Wisconsin </h2>
                    <h2> Presenter </h2>
            </div>
            <div className='presentation-box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> American Association of Biological Anthropology </h1>
                    <h2> "Quantifying Biological Sex of Lagoa Santa" </h2>
                    <h2> Reno, Nevada </h2>
                    <h2> Presenter </h2>
            </div>
            <div className='presentation-box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> Society of American Archaeology </h1>
                    <h2> "Limp but not Leaky: Clarifying Pipeline Problems for Women in Academic Archaeology" </h2>
                    <h2> Portland, Oregon </h2>
                    <h2> Co-author (not presenter) </h2>
            </div>
            <div className='presentation-box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> Kentucky Academy of Science </h1>
                    <h2> "Development of an Image Registration and Blending Process to Produce Cohesive Images of a Herculaneum Scroll" </h2>
                    <h2> Morehead, Kencucky </h2>
                    <h2> Presenter </h2>
            </div>
            <div className='presentation-box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> Undergraduate Research Showcase 22-23 </h1>
                    <h2> "Image Registration and Blending Pipeline for Herculaneum Scrolls" </h2>
                    <h2> "Enhanced Tool for Image Segmentation of Herculaneum Scrolls" </h2>
                    <h2> "Quantifying Biological Sex in Ancient Brazil" </h2>
                    <h2> Lexington, Kencucky </h2>
                    <h2> Presenter </h2>
            </div>
            <p className='title'>
                research
            </p>
            <div className='experience-quarter'>
                <div className='box'>
                    {/*<img src={require("./assets/logo-educelab.png")} alt="" className='logo'/>*/}
                    <h1> Undergraduate Researcher </h1>
                    <h2> EduceLab (Digital Restoration Initiative) </h2>
                    <h2> University of Kentucky - USA </h2>
                    <p>
                    <a href="https://www2.cs.uky.edu/dri/">EduceLab</a> is a state-of-the-art heritage science Lab
                        at the university of Kentucky. For two years, I worked
                        under Dr. Brent Seales' guidance to develop software to
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
                    <p>
                        My work in EduceLab includes the <a href="https://gitlab.com/educelab/quick-segment">Quick Segment</a> app to quickly
                        create segmentations of pages in damaged scrolls.
                    </p>
                </div>
            </div>
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> Undergraduate Researcher </h1>
                    <h2> HEVA Lab (Human Evolution and Virtual Archaeology Lab) </h2>
                    <h2> University of Kentucky - USA </h2>
                    <p>
                        At <a href="https://heva.as.uky.edu/lab-home">HEVA Lab</a> I researched the inner ear from human remains from
                        archaeological sites through technology such as computed 
                        tomography and landmark based analysis under the guidance of Dr.
                        Hugo Reyes-Centeno. Through the use of digital analysis we can 
                        preserve the integrity of these valuable artifacts of cultural 
                        heritage. I collaborated with the University of São Paulo on the
                        archaeological site of Lagoa Santa, Brazil.
                    </p>
                    <p>
                        Through this experience, I was awarded the Summer Undergraduate
                        Research Fellowship and was invited to present to the Board of
                        Trustees at the University of Kentucky. I also presented at the
                        American Association of Biological Anthropologists Annual Meeting.
                    </p>
                </div>
            </div>
            <p className='title'>
                work
            </p>
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> Software Engineering Intern </h1>
                    <h2> Carlson Software </h2>
                    <h2> Kentucky, USA </h2>
                    <p>
                        Developed, reviewed and debugged original code.
                        Deployed new central features and communicated directly with clients during troubleshooting meetings.
                        Investigated and successfully fixed time-sensitive software bugs.
                        Worked with 3D surfacing algorithms and point cloud management libraries.
                        Developed front-end and back-end.
                    </p>
                </div>
            </div>
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1> Honors College Peer Mentor </h1>
                    <h2> Lewis Honors College </h2>
                    <h2> University of Kentucky, USA </h2>
                    <p>
                        Developed, reviewed and debugged original code.
                        Deployed new central features and communicated directly with clients during troubleshooting meetings.
                        Investigated and successfully fixed time-sensitive software bugs.
                        Worked with 3D surfacing algorithms and point cloud management libraries.
                        Developed front-end and back-end.
                    </p>
                </div>
            </div>
        </div>
    );
}