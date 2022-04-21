const accountingCareers = [
    'AIS Designer', 'Audit Partner', 'Bank Examiner', 'Business Analyst', 'Business Consultant', 'Certified Public Accountant',
    'Chief Financial Officer (CFO)', 'Commercial Project Manager', 'Comptroller', 'Computer Systems Analyst', 'Computer Crime Special Agent',
    'Consulting Analyst', 'Controller', 'Cost Accountant', 'Cost Analyst', 'EDP Auditor', 'Financial Manager / Advisor', 'Forensic Accountant',
    'Fraud Examiner', 'Fraud Investigator', 'Government Auditor', 'Information Technology Consultant', 'Internal Auditor', 'IRS Investigator / Agent',
    'Management Accountant', 'Professor', 'Property Accountant', 'Systems Analyst', 'System Security Manager', 'Tax Accountant', 'Tax Advisor',
    'Tax Partner', 'Treasurer'
]
const accountingCharacteristics = [
    'technical expertise', 'teamwork', 'communication skills', 'problem solving', 'professionalism'
]
const biologyCareers = [
    'Agricultural Scientist', 'Air Pollution Analyst', 'Anesthesia Technician', 'Animal Scientist', 'Aquarium Technician', 'Biology Educator',
    'Biochemist', 'Biologist', 'Biomedical Engineer', 'Biotechnologist', 'Blood Bank Specialist', 'Botanist', 'Cancer Researcher', 'Cell Biologist',
    'Clinical Lab Scientist', 'Conservation Program Aid', 'Criminologist', 'Dentist', 'DNA Technician', 'Ecologist', 'Environmental Educator',
    'Environmental Scientist', 'EPA Inspector', 'Exhibit Technician', 'Fisheries Conservationist', 'Food Regulatory Inspector', 'Food Scientist',
    'Genetic Engineer', 'Healthcare Recruiter', 'Hematologist', 'Hospital Administrator', 'Immunologist', 'Industrial Hygienist Technician',
    'Laboratory Supervisor', 'Marine Biologist', 'Medical Illustrator', 'Medical Research Assistant', 'Microbiologist', 'Natural Resource Conservation',
    'Occupational Safety Specialist', 'Optometrist Assistant', 'Park Ranger', 'Pharmaceutical Salesperson', 'Pharmacy Technician', 'Physical Therapist',
    'Physician', 'Physician Scribe', 'Program Analyst', 'Public Health Educator', 'Quality Engineer', 'Science Museum Curator', 'Science Teacher',
    'Scientific Photographer', 'Soil Conservationist', 'Strategic Management Consultant', 'Technical Marketing Specialist', 'Technical Services Coordinator',
    'Technical Writer', 'Toxicologist', 'Veterinary Assistant', 'Water/Wastewater Plant Agent', 'Wildlife Biologist', 'Zoologist'
]
const biologyCharacteristics = [
    'precision work',
    'work well under pressure',
    'naturally curious',
    'flexibility',
    'adapting to change',
    'moving into new settings',
    'combining diverse areas'
]
const chemistryCareers = [
    'Biochemist', 'Biotechnologist', 'Cancer Researcher', 'Chemical Engineer', 'Chemical Laboratory Chief', 'Chemist', 'Chemistry / Science Educator',
    'Computer Analyst', 'Consumer Protection Specialist', 'Crime Lab Analyst', 'Criminologist', 'Environmental Chemist', 'Environmental Compliance Consultant',
    'Environmental Health Specialist', 'FDA Inspector', 'Food Scientist / Technologist', 'Forensic Scientist', 'Geneticist', 'Geologist', 'Immunologist',
    'Industrial Hygienist', 'Lobbyist', 'Medical Technologist', 'Metallurgist', 'Occupational Safety Specialist', 'Optometrist', 'Patent Examiner', 'Perfumer',
    'Pharmaceutical Chemist', 'Pharmaceutical Sales Agent', 'Pharmacy Technician', 'Physician', 'Product Tester', 'Production Chemist', 'Public Health Educator',
    'Sales Account Executive', 'Science Lab Technician', 'Soil Scientist', 'Systems Analyst', 'Technical Writer', 'Technology Consultant', 'Toxicologist',
    'Water Purification Chemist'
]
const chemistryCharacteristics = [
    'curious', 'good mathematical abilities', 'enjoys science', 'organizational skills', 'perseverance', 'judgement', 'attitude', 'dedication'
]
const communicationsCareers = [
    'ADR Case Specialist', 'Advertising Account Executive', 'Advertising Copywriter', 'Americorp Volunteer', 'Business Travel Coordinator', 'Buyer/Merchandise Manager',
    'Campaign Coordinator', 'College Admissions Counselor', 'Communication Consultant', 'Community Health Educator', 'Community Relations Director', 'Community Service Case Manager',
    'Congressional Aide', 'Consumer Affairs Specialist', 'Corporate Recruiter', 'Corporate Relations Coordinator', 'Employment Agency Counselor', 'Events Planner',
    'Financial Aid Counselor', 'Fundraiser/ Development Officer', 'Grant Writer', 'Graphic Artist/ Designer', 'Group Care Worker', 'Health Advocate', 'Health Education Coordinator',
    'Hotline Operator', 'Human Resources Personnel', 'Instructional Systems Designer', 'Interactive Media Specialist', 'Journalist', 'Lobbyist', 'Marketing Executive',
    'Media Relations Specialist', 'Mediator/ Negotiator', 'Meeting/ Convention Planner', 'Online Community Manager', 'Pharmaceutical Representative', 'Political Aide',
    'Political Campaign Organizer', 'Press Agent', 'Press Secretary (Government)', 'Promotions Manager', 'Public Affairs Director', 'Public Information Officer', 'Public Opinion Interviewer',
    'Public Relations Specialist', 'Recruitment Coordinator', 'Research Interviewer', 'Social Media Specialist', 'Social Media Strategist', 'Special Events Coordinator', 'Speech Writer',
    'Stadium Manager', 'Technical Writer', 'Training Specialist', 'Travel Agent', 'Underwriter', 'Victim Services Specialist', 'Volunteer Liaison', 'Web Manager', 'Wedding Planner'
]
const communicationsCharacteristics = [
    'Openness', 'professional drive', 'writing skills', 'improve communication interactions', 'strong academic'
]

let strengthInputs = []
let weaknessInputs = []
let hobbyInputs = []

function SubmitAnswers(form) {
    let formInputs = []

    let questionOne = document.getElementById('questionOne').value
    formInputs.push(questionOne)
    let questionTwo = document.getElementById('questionTwo').value
    formInputs.push(questionTwo)
    let questionThree = document.getElementById('questionThree').value
    formInputs.push(questionThree)
    let questionFour = document.getElementById('questionFour').value
    formInputs.push(questionFour)
    let questionFive = document.getElementById('questionFive').value
    formInputs.push(questionFive)

    // formInputs.splice(5, 0, questionOne, questionTwo, questionThree, questionFour, questionFive)

    let strengths = document.getElementById('strengths')
    let weaknesses = document.getElementById('weaknesses')
    let hobbies = document.getElementById('hobbies')
    let summary = document.getElementById('summary')

    if (form == 'Strengths') {
        strengths.classList.replace('questions', 'questionsInActive')
        weaknesses.classList.replace('questionsInActive', 'questions')
        strengthInputs.push(formInputs)
        SaveInputs(formInputs, 'Strengths')
        formInputs = []
        ScrollToTop()
    } else if (form == 'Weaknesses') {
        weaknesses.classList.replace('questions', 'questionsInActive')
        hobbies.classList.replace('questionsInActive', 'questions')
        weaknessInputs.push(formInputs)
        SaveInputs(formInputs, 'Weaknesses')
        formInputs = []
        ScrollToTop()
    } else if (form == 'Hobbies') {
        hobbies.classList.replace('questions', 'questionsInActive')
        SaveInputs(formInputs, 'Hobbies')
        hobbyInputs.push(formInputs)
        formInputs = []
        summary.classList.replace('questionsInActive', 'questions')
        ScrollToTop()
    }
}

function ScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function SaveInputs(inputs, type) {
    if (type == 'Strengths') {
        document.getElementById('strength-summary').innerHTML = 
        `<p>${inputs}</p>`
    } else if (type == 'Weaknesses') {
        document.getElementById('weaknesses-summary').innerHTML = 
        `<p>${inputs}</p>`
    } else if (type == 'Hobbies') {
        document.getElementById('hobbies-summary').innerHTML = 
        `<p>${inputs}</p>`
    }
}

function ShowResults() {
    document.getElementById('summary').style.display = 'none'
    document.getElementById('results-section').style.display = 'flex'
    document.getElementById('results').style.display = 'flex'

    // let majorOptions = []
    // let careerOptions = []

    // if (biologyCharacteristics.includes(strengthInputs) && biologyCharacteristics.includes(hobbyInputs) && !biologyCharacteristics.includes(weaknessInputs)) {
    //     majorOptions.push('Biology')
    //     for (let i = 0; i < biologyCareers.length / 4; i++) {
    //         careerOptions.push(biologyCareers[i])
    //     }
    // }

    // document.getElementById('results').innerHTML = 
    // `
    //     Major Options: ${majorOptions} {\n}
    //     Career Options: ${careerOptions}
    // `
}