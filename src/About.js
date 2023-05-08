import './Page.scss';

export function About() {
  return (
    <div className='box'>
      <img src={require("./assets/bruno-archaeology.jpg")} alt="" className='self-img'/>
      <p>
        I was born in Avaré, Brazil. In 2019, I got a full ride to study
        at the University of Kentucky, where I completed a dual degree in
        Computer Science and Anthropology, and won awards for academic
        excellence in both. I graduated Summa Cum Laude and received the 
        Diachun Scholar Award, which is given to the student majoring in sciences 
        with the highest academic achievement among the graduating class.
        During my time in the USA, I worked in the
        interesection between computer science and the humanities, and 
        found a new passion in the interdisciplinary gray areas that 
        separate these disciplines. I am also passionate about the arts
        and design.
      </p>
      <p>
        I worked as an intern in both research and industry, with a focus 
        on computer vision and computer graphics. For two years I worked 
        at EduceLab, where we employed CT scanning, computer vision, and 
        machine learning to virtually unwrap damaged historical documents.
        I was also a researcher at the Human Evolution and Virtual Archaeology
        Lab, where I employed CT scanning, Image segmentation, landmark-based
        analysis, and again machine learning to study human remains from
        archaological sites in Brazil and Italy. Through technology I 
        contributed to the study of valuable artifacts of cultural heritage 
        non-invasively. I have presented my research in Italy, Wisconsin, 
        Nevada, and Kentucky.
      </p>
      <p>
        email: bathieteruel@gmail.com
      </p>
      <p>
        phone: +1 (859) 539-2771
      </p>
    </div>
  );
}