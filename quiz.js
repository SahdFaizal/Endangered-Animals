const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const main = document.getElementById("main")

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(main)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(main, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Is U.A.E taking initiative to protect Arabian Gazelle?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false }
    ]
  },
  {
    question: 'What is causing Arabian Gazelle to be endangered?',
    answers: [
      { text: 'Clearing forest.', correct: false },
      { text: 'It is unclear.', correct: false },
      { text: 'Uncontrolled hunting.', correct: true },
      { text: 'Development in deserts.', correct: false }
    ]
  },
  {
    question: 'Is Arabian Gazelle at the risk of being endangered?',
    answers: [
      { text: 'Kind of not', correct: false },
      { text: 'Yes', correct: true },
      { text: 'No', correct: false },
      { text: 'I do not know.', correct: false }
    ]
  },
  {
    question: 'Which place does Arabian Gazelle lives?',
    answers: [
      { text: 'Desert', correct: true },
      { text: 'Forest', correct: false }
    ]
  }
]

