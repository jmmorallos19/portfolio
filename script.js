const typed = new Typed(".multi-text", {
    strings: ["Frontend Developer", "Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//Home Content//
const greet = document.getElementById("greet");
const fullName = document.getElementById("name");
const tagline = document.getElementById("tagline");
const anotherTagline = document.getElementById("anotherTagline");

greet.textContent = `Hello, It's me`;
fullName.textContent = `JOHN MARK MORALLOS`;
tagline.textContent = `Web development is not just about lines of code,  it's about creating`;
anotherTagline.textContent = `an online experience that resonates and connects with the world.`;

//About Content//
const details = document.getElementById("details");

details.textContent = `Hello there! I'm John Mark Morallos, a passionate college student
                       with a love for web development. Join me as I take you on a 
                       journey through my life, studies, and the exciting world of coding.
                       I am currently enrolled in Immaculada Concepcion College pursuing a 
                       degree in Bachelor of Science in Computer Science. The challenges
                       and opportunities that come with college life have shaped me into a 
                       resilient and curious individual.
                       Beyond the classroom, my heart lies in the realm of web development.
                       It all started with a simple curiosity, and now, it has grown into 
                       a full-fledged passion. I am well-versed in languages such as HTML,
                       CSS, and JavaScript, constantly exploring new frameworks and technologies
                       to stay ahead in this ever-evolving field.`;


//About Content//
const projectDesc1 = document.getElementById("project-desc1");
const projectDesc2 = document.getElementById("project-desc2");
const projectDesc3 = document.getElementById("project-desc3");

projectDesc1.textContent = `As a student studying web development,
                            making a Netflix clone was a great help
                            to me in honing my skills in web development.`;
projectDesc2.textContent = `This library management system is
                            the first system I have created
                            as a front-end web developer,
                            and we have also used you in
                            our thesis. So far, he is not
                            fully responsive, but at least
                            he has been approved for the
                            thesis.`;
projectDesc3.textContent = `Just like Netflix Clone, making
                            Youtube Clone has also been a big
                            help for me as a beginner in web development.`;


const project1 = document.getElementById("projects1");
const project2 = document.getElementById("projects2");
const project3 = document.getElementById("projects3");
const project2Image = document.getElementById("project2-img");
const project2h2 = document.getElementById("project2H2");

project1.addEventListener('click', event => {
    if(projectDesc1.style.display === "none")
        projectDesc1.style.display = "block";
    else{
        projectDesc1.style.display = "none";
    }
});
project2.addEventListener('click', event => {
    if(projectDesc2.style.display === "none"){
        projectDesc2.style.display = "block";
        projectDesc2.style.fontSize = "1.2rem";
        project2Image.style.maxWidth = "80%";
        project2h2.style.fontSize = "1.6rem";
    }
    else{
        projectDesc2.style.display = "none";
        project2Image.style.maxWidth = "90%";
    }
});   



project3.addEventListener('click', event => {
    if(projectDesc3.style.display === "none")
        projectDesc3.style.display = "block";
    else{
        projectDesc3.style.display = "none";
    }
});              

const sections = document.querySelectorAll('section[id]')

 const scrollActive = () =>{
     const scrollDown = window.scrollY
 
   sections.forEach(current =>{
         const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 58,
               sectionId = current.getAttribute('id'),
               sectionsClass = document.querySelector('.navLinks a[href*=' + sectionId + ']')
         
         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
             sectionsClass.classList.add('active-link')
         }else{
             sectionsClass.classList.remove('active-link')
         }                                                    
     })
 }
 window.addEventListener('scroll', scrollActive);



