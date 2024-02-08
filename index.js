function makeQuestions(arr, marks){
    const num = document.getElementById('question-number')
    const name = document.getElementById('question-name')
    const desc = document.getElementById('question-description')
    const options = document.querySelectorAll('.option-value')
    num.textContent = arr[0]
    name.textContent = arr[1]
    desc.textContent = arr[2]
    for(let i=0;i<arr[3].length;i++){
        options[i].value = arr[3][i]
    }
    const firstOption = document.getElementById('first-option-label')
    const secondOption = document.getElementById('second-option-label')
    const thirdOption = document.getElementById('third-option-label')
    const forthOption = document.getElementById('forth-option-label')
    firstOption.textContent = arr[3][0]
    secondOption.textContent = arr[3][1]
    thirdOption.textContent = arr[3][2]
    forthOption.textContent = arr[3][3]
    const marksDiv = document.getElementById('marks-div')
    marksDiv.textContent = marks
}
const main_arr = [['1.', 'When did we first met ?', 'It was on _____ . Select the correct date among the following options', ['01 April 2018','12 April 2018', '17 April 2018', '26 April 2018']],
            ['2.', 'When did we met second time ?', 'Hint: It was our first kiss', ['17 April 2018', '20 April 2018', '12 June 2018', '20 June 2018']],
            ['3.', 'What was the color of the gift that I gave you ?', 'Hint: Eventually you did not took it to your home', ['White', 'Blue', 'Purple', 'Red']],
            ['4.', 'What is the name of the chocklate that I gave you last time ?', 'Hint: You did not liked it very much', ['Dairy Milk', 'Kit Kat', 'Perk', 'Munch']],
            ['5.', 'How many samosas did you gave me the day you gave me Munch as well ?', 'This question holds true importance, so it is biased with more marks compared to other questions', ['3', '4', '2', '1']]]
const answer = ['12 April 2018', '17 April 2018', 'Purple', 'Kit Kat', '2']
const marks = ['15', '20', '20', '15', '30']
function removeCheckOnRadioButton(elm){
    elm.checked = false
}
function changeQuestion(elm){
    new_index = +(localStorage.getItem("index"))
    if(elm.value == answer[+(localStorage.getItem("index"))]){
        if(localStorage.getItem("index") == "" || localStorage.getItem("index") == null || localStorage.getItem("index") == undefined){
            localStorage.setItem("index", new_index + 1)
        }
        else{
            localStorage.setItem("index", new_index + 1)
        }
        new_marks = +(localStorage.getItem("marks"))
        if(localStorage.getItem("marks") == "" || localStorage.getItem("marks") == null || localStorage.getItem("marks") == undefined){
            localStorage.setItem("marks", new_marks + +(marks[new_index]))
        }
        else{
            localStorage.setItem("marks", new_marks + +(marks[new_index]))
        }
        checkOverflow()
        removeCheckOnRadioButton(elm)
        makeQuestions(main_arr[+(localStorage.getItem("index"))], localStorage.getItem("marks"))
    }
    else{
        localStorage.setItem("marks", +(localStorage.getItem("marks")) - +(marks[new_index]*(+(localStorage.getItem("marks")))/100))
    }
}
function checkOverflow(){
    if(+localStorage.getItem("index") > 4){
        localStorage.setItem("index", 0)
        localStorage.setItem("displayMarks", localStorage.getItem("marks"))
        localStorage.setItem("marks", 0)
        window.location.href = './next_page.html'
    }
}
if(localStorage.getItem("index") == "" || localStorage.getItem("index") == null || localStorage.getItem("index") == undefined){
    localStorage.setItem("index", 0)
    makeQuestions(main_arr[0], 0)
}
else{
    makeQuestions(main_arr[+(localStorage.getItem("index"))], localStorage.getItem("marks"))
}
if(localStorage.getItem("marks") == "" || localStorage.getItem("marks") == null || localStorage.getItem("marks") == undefined){
    localStorage.setItem("marks", 0)
}
