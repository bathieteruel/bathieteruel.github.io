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
                    <h1 className='date'>05.2023</h1>
                    <h1> BS, Computer Science </h1>
                    <h2> Minor in Mathematics </h2>
                    <h2> University of Kentucky </h2>
                    <p>
                        GPA: 4.0/4.0
                        Summa Cum Laude
                    </p>
                    <p>
                        Lewis Honors College
                    </p>
                </div>
            </div>
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1 className='date'>05.2023</h1>
                    <h1> BS, Anthropology </h1>
                    <h2> University of Kentucky </h2>
                    <p>
                        GPA: 4.0/4.0
                        Summa Cum Laude
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
                <h1 className='date'>06.2022</h1>
                <h1> University of Naples Federico II </h1>
                <h2> "Virtual Restoration of Herculaneum Scrolls" <br/>
                     Naples, Italy <br/>
                     Guest Speaker 
                </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>10.2022</h1>
                <h1> Kentucky Academy of Science </h1>
                <h2> "Development of an Image Registration and Blending Process to Produce Cohesive Images of a Herculaneum Scroll" <br/>
                     Morehead, Kencucky <br/>
                     Presenter 
                </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>04.2023</h1>
                <h1> National Conference of Undergraduate Research </h1>
                <h2> "Virtual Restoration of 2000-year-old Herculaneum Scrolls" <br/>
                     Eau Claire, Wisconsin <br/>
                     Presenter 
                </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>04.2023</h1>
                <h1> American Association of Biological Anthropologists </h1>
                <h2> "Quantifying sexual dimorphism of the bony labyrinth and biological sex distribution in Lagoa Santa, Brazil. " <br/>
                     Reno, Nevada <br/>
                     Presenter 
                </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>03.2023</h1>
                <h1> Society of American Archaeology </h1>
                <h2> "The Impact of Gendered Mentorship in the Leak between Dissertation Programs and Tenure-Track Jobs" <br/>
                     Portland, Oregon <br/>
                     Co-author (not presenter) 
                </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>04.2022 & 04.2023</h1>
                <h1> Undergraduate Research Showcase 22-23 </h1>
                <h2> "Image Registration and Blending Pipeline for Herculaneum Scrolls" <br/>
                     "Enhanced Tool for Image Segmentation of Herculaneum Scrolls" <br/>
                     "Quantifying Biological Sex in Ancient Brazil" <br/>
                     Lexington, Kencucky <br/>
                     Presenter 
                </h2>
            </div>
            <p className='title'>
                awards & honors
            </p>
            <div className='presentation-box'>
                <h1 className='date'>2019-23</h1>
                <h1> Presidential Scholarship </h1>
                <h2> Full Out-of-State Tuition to study at the University of Kentucky <br/>
                     Only international student to receive the award in my year </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>2019-23</h1>
                <h1> William C. Parker Scholarship </h1>
                <h2> 40,000 dollar award by the University of Kentucky </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>2020</h1>
                <h1> 1st Place at Writing Rethoric and Digital Studies Awards 2020 </h1>
                <h2> My team's work was chosen to be awarded and published </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>2022</h1>
                <h1> College of Arts and Sciences Summer Undegraduate Research Fellowship </h1>
                <h2> Fellowship to develop my research in archaology, my research was eventually chosen to be presented at the University's Board of Trustees </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>2022</h1>
                <h1> Thoroughbred: Kentucky Academy of Science Highest Accolade for Undegraduate Research </h1>
                <h2> Awarded for my work in Computer Science with the Herculaneum Scrolls </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>2023</h1>
                <h1> College of Engineering Spring Undergraduate Research Fellowship </h1>
                <h2> Fellowship to develop my research in Computer Science </h2>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>2023</h1>
                <h1> Computer Science Award for Outstanding Academic Performance </h1>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>2023</h1>
                <h1> Distinguished Undergraduate Award for Research in Anthropology</h1>
            </div>
            <div className='presentation-box'>
                <h1 className='date'>2023</h1>
                <h1> Diachun Scholar Award </h1>
                <h2> "Bestowed on the graduating 
                    senior, majoring in science or a related field, who has the highest academic 
                    achievement in their graduating class." </h2>
            </div>
            <p className='title'>
                research
            </p>
            <div className='experience-quarter'>
                <div className='box'>
                    {/*<img src={require("./assets/logo-educelab.png")} alt="" className='logo'/>*/}
                    <img src={require("./assets/naples-biblioteca.png")} alt="" className='img-large'/>
                    <h1 className='date'>2021 - 23</h1>
                    <h1> Undergraduate Researcher </h1>
                    <h2> EduceLab (Digital Restoration Initiative) </h2>
                    <h2> University of Kentucky - USA </h2>
                    <p>
                    <a href="https://www2.cs.uky.edu/dri/">EduceLab</a> is a state-of-the-art heritage science Lab
                        at the University of Kentucky. For two years, I worked
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
                        My work in EduceLab includes the open source <a href="https://gitlab.com/educelab/quick-segment">Quick Segment</a> app to quickly
                        create segmentations of pages in damaged scrolls. I created this app with my colleague Sydney Chapman, building on
                        top of the work of others in our lab including Seth Parker, Stephen Parsons and Dr. Brent Seales. Now the app is actively
                        used in research and continuously improved by others. 
                    </p>
                </div>
            </div>
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <img src={require("./assets/board-of-trustees-pres.png")} alt="" className='img-large'/>
                    <h1 className='date'>2021 - 23</h1>
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
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1 className='date'>2023</h1>
                    <h1> Co-Investigator </h1>
                    <h2> Panhutongan Archaeological Field School </h2>
                    <h2> University of Kentucky - USA & St. Paul University Surigao - Philippines </h2>
                    <p>
                        I spent part of the summer 2023 in the Surigao Del Norte Province, 
                        Philippines, as a part of an archaeological field school at the Panhutongan Elementary
                        School Archaeological site. I was under the mentorship of Dr. Hugo Reyes-Centeno and
                        PhD Candidate James Keppeler. During this time
                        I engaged in multiple aspects of archaeological research, from excavation, to
                        presentation, community engagement, and shadowing permit requests. 
                    </p>
                </div>
            </div>
            <p className='title'>
                work
            </p>
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1 className='date'>2022</h1>
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
                    <h1 className='date'>2021 - 23</h1>
                    <h1> Honors College Peer Mentor </h1>
                    <h2> Lewis Honors College </h2>
                    <h2> University of Kentucky, USA </h2>
                    <p>
                        Engaged new students at the Honors College through mentorship and leadership.
                        Organized events to build community among Honors College students
                    </p>
                </div>
            </div>
            <div className='experience-quarter'>
                <div className='box'>
                {/*<img src={require("./assets/logo-heva.png")} alt="" className='logo'/>*/}
                    <h1 className='date'>2019</h1>
                    <h1> Director of Design </h1>
                    <h2> Peace and Conflict Resolution Conference </h2>
                    <h2> Georgetown University, Washington DC, USA </h2>
                    <p>
                        Developed the design language and brand strategy of the conference at Georgetown University, Washington DC
                        Created all art and brand and supervised its deployment in situ
                    </p>
                </div>
            </div>
        </div>
    );
}