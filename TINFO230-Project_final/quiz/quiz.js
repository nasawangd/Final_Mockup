(function() {
    const myQuestions = [
    {
      question: "What is cybersecurity also known as?",
      answers: {
        a: "Information Assurance",
        b: "Information Technology Security",
        c: "Cyber protection",
        d: "Cyber assurance"
      },
      correctAnswer: "b"
    },
    {
      question: "How many types of cyber security are there (as shown in our website)?",
      answers: {
        a: "2",
        b: "4",
        c: "5",
        d: "6"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the purpose of Network Security?",
      answers: {
        a: "The practice of securing a computer network from intruders.",
        b: "The practice of securing a computer on a network",
        c: "The practice of securing the information from others on the same network",
        d: "The practice of backing up all network data"
      },
      correctAnswer: "a"
    },

    {
        question: "What is the purpose of Application Security?",
        answers: {
          a: "The focus of keeping software and devices free of threats",
          b: "The focus of keeping websites free from intruders",
          c: "The focus of keeping applications off the internet",
          d: "The focus of securing applications passwords"
        },
        correctAnswer: "a"
    },

    {
        question: "What is the purpose of Information Security?",
        answers: {
          a: "To protect the network from having intruders",
          b: "To protect the integrity of computers from others on the same network",
          c: "To protect the integrity and privacy of data, both in storage and in transit.",
          d: "To protect software from outside threats"
        },
        correctAnswer: "c"
    },

    {
        question: "Operational security includes the processes and decisions for handling and protecting data assets",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
    },

    {
        question: "Disaster recovery and business continuity focuses on keeping software and devices free of threats",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
    },

    {
        question: "End-user education addresses the most unpredictable cyber-security factor, which is people.",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
    },

    {
        question: "Cyber Security can protect patient information from being leaked out to the public and defend against attackers who will use their stolen medical records to reap their benefits and wreak havoc on the victim's financial well-being.",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "a"
    },

    {
        question: "Mobile Device Encryption is not a way of protecting data.",
        answers: {
          a: "True",
          b: "False"
        },
        correctAnswer: "b"
    },

    

    
    
    ];
    
    function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];
    
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];
    
      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }
    
      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });
    
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
    }
    
    function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
    
    // keep track of user's answers
    let numCorrect = 0;
    
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    
      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
    
        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });
    
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
    
    function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
    }
    
    function showNextSlide() {
    showSlide(currentSlide + 1);
    }
    
    function showPreviousSlide() {
    showSlide(currentSlide - 1);
    }
    
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    
    // display quiz right away
    buildQuiz();
    
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    
    showSlide(0);
    
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    })();
    
    
      
    
    
    
    