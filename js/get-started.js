function SubmitAnswers(form) {
    let allInputs = []
    let questionOne = document.getElementById('questionOne').value
    let questionTwo = document.getElementById('questionTwo').value
    let questionThree = document.getElementById('questionThree').value
    let questionFour = document.getElementById('questionFour').value
    let questionFive = document.getElementById('questionFive').value

    allInputs.splice(5, 0, questionOne, questionTwo, questionThree, questionFour, questionFive)

    let strengths = document.getElementById('strengths')
    let weaknesses = document.getElementById('weaknesses')
    let hobbies = document.getElementById('hobbies')
    let summary = document.getElementById('summary')

    if (form == 'Strengths') {
        strengths.classList.replace('questions', 'questionsInActive')
        weaknesses.classList.replace('questionsInActive', 'questions')
        SaveInputs(allInputs, 'Strengths')
        ScrollToTop()
    } else if (form == 'Weaknesses') {
        weaknesses.classList.replace('questions', 'questionsInActive')
        hobbies.classList.replace('questionsInActive', 'questions')
        SaveInputs(allInputs, 'Weaknesses')
        ScrollToTop()
    } else if (form == 'Hobbies') {
        hobbies.classList.replace('questions', 'questionsInActive')
        summary.classList.replace('questionsInActive', 'questions')
    }
}

function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function SaveInputs(inputs, type) {
    if (type == 'Strengths') {

    } else if (type == 'Weaknesses') {

    } else if (type == 'Hobbies') {
        
    }
}