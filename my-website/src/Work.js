import './Page.scss';

export function Work() {
    return (
        <div>
            <div className='experience-quarter'>
                <div className='box'>
                    <img src={require("./assets/logo-educelab.png")} alt="" className='logo'/>
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
                <img src={require("./assets/logo-heva.png")} alt="" className='logo'/>
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
        </div>
    );
}