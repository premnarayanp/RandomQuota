var myQuota = document.getElementById("myQuota");
//var myQuotaBtn=document.getElementById("myQuotaBtn");

var quotaArr = [
    "Hello how are you friend",
    "First of all, thank you for giving me this opportunity to introduce myself.",
    "My name is Premnarayan Patel.",
    "I am from Sagar, MP.",
    "I graduated with a BTech in Computer Science from Gyan Sagar College of Engineering with 8.08 CGPA.",
    "I have successfully completed a comprehensive 10-month full-stack web development bootcamp from Coding Ninja",
    "where I acquired a strong foundation in both frontend and backend technologies.",
    "I hold Excellent certificates in Frontend Development, Backend Development, React, and Data Structures and Algorithms with  Java.",
    "These certifications validate my proficiency in HTML, CSS, JavaScript, jQuery, AJAX, React, Node.js, Express.js, and MongoDB, as well as my ability to solve complex problems through data structures and algorithms in Java.",
    "These certifications not only demonstrate my technical skills but also reflect my commitment to continuous learning and staying updated with the latest industry standards.",
    "I have completed more than 15 personal projects, including a Chat-App, Pdf Extractor and Pdf-Editor, open AI on pdf, Placement sell, User control system etc.",
    "Which showcase my proficiency in React, Node.js, and MERN stack.",
    "These projects reflect my ability to design user-friendly interfaces and implement complex functionalities.",
    "I'm excited to leverage my skills in a dynamic development team, where my strengths in problem-solving, teamwork, and adaptability, along with my passion for coding, can contribute to innovative projects.",
    "I am confident that the knowledge and expertise gained through this rigorous training program have equipped me well for the challenges of the position",
    "and I am eager to apply my skills to contribute effectively to the team."
];


var generateNewQuota = (e) => {
    const quotaIndex = Math.floor(Math.random() * quotaArr.length);
    const currentQuota = quotaArr[quotaIndex];
    myQuota.innerText = currentQuota;

    // console.log("quotaIndex=", quotaIndex);
    // console.log("currentQuota=", currentQuota);
}