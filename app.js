var mcq = [
    {
        question:"Q1:What does HTML stand for?",
        a:"Hyperlinks and Text Markup Language",
        b:"Home Tool Markup Language",
        c:"Hyper Text Markup Language",
        d:"None of the above",
        ans:"ans3",
    },
    {
        question:"Q2:Which tag is used to create a hyperlink in HTML?",
        a:"<h1>",
        b:"<a>",
        c:"<p>",
        d:"<div>",
        ans:"ans2",
    },
    {
        question:"Q3:Which tag is used to define an unordered list in HTML?",
        a:"<ol>",
        b:"<li>",
        c:"<script.src>",
        d:"<ul>",
        ans:"ans4",
    },
    {
        question:"Q4:What is the correct way to include an image in HTML?",
        a:"<image src='image.jpg'>",
        b:"<img src='image.jpg'>",
        c:"<img href='image.jpg'>",
        d:"<image href='image.jpg'>",
        ans:"ans2",
    },
    {
        question:"Q5:Which attribute is used to specify the URL of a linked resource in HTML?",
        a:"src",
        b:"link",
        c:"<script.src>",
        d:"href",
        ans:"ans4",
    },
    {
        question:"Q6:Which tag is used to define a table row in HTML?",
        a:"<tr>",
        b:"<td>",
        c:"<th>",
        d:"<table>",
        ans:"ans1",
    },
    {
        question:"Q7:What is the correct HTML element for inserting a line break?",
        a:"<break>",
        b:"<br>",
        c:"<lb>",
        d:"<newline>",
        ans:"ans2",
    },
    {
        question:"Q8:Which tag is used to define a section of an HTML document?",
        a:"<div>",
        b:"<article>",
        c:"<container>",
        d:"<section>",
        ans:"ans4",
    },
    {
        question:"Q9:What is the correct HTML element for the largest heading?",
        a:"<h1>",
        b:"<heading>",
        c:"<h6>",
        d:"<head>",
        ans:"ans1",
    },
    {
        question:"Q10:Which tag is used to embed a video in HTML?",
        a:"<media>",
        b:"<embed>",
        c:"<video>",
        d:"<movie>",
        ans:"ans2",
    },
]
var question = document.querySelector(".question")
var option1 = document.getElementById("answer1")
var option2 = document.getElementById("answer2")
var option3 = document.getElementById("answer3")
var option4 = document.getElementById("answer4")
var submit = document.getElementById("submit")
var answers = document.querySelectorAll(".answer")
var result = document.querySelector(".result")

    let questioncount = 0;
    let score = 0;
const loadquestion = () => {
    var questionlist = mcq[questioncount];

    question.innerText = questionlist.question;
    option1.innerText = questionlist.a
    option2.innerText = questionlist.b
    option3.innerText = questionlist.c
    option4.innerText = questionlist.d
}
loadquestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curElm)=>{
        if(curElm.checked) {
            answer = curElm.id
            curElm.checked = false
        }
        
    });
    return answer
}

submit.addEventListener('click',() => {
    var CheckAnswer = getCheckAnswer();
    console.log(CheckAnswer)

    if(CheckAnswer === mcq[questioncount].ans){
        score++;
    }
    questioncount++
    if(questioncount < mcq.length){
        loadquestion();
    }else{
        result.innerHTML = `
        <h3> you scored ${score}/${mcq.length} </h3>
        <button class="btn" onclick="location.reload()">play Again</button>` 

        result.style.display = "flex"
        submit.style.display = "none"
    }

 
})





