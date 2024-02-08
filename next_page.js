const marksSpan = document.getElementById('marks-span')
marksSpan.textContent = localStorage.getItem("displayMarks")
const madeIt = document.getElementById('made-it-or-not')
if(+(localStorage.getItem("displayMarks")) >= 70){
    madeIt.textContent = 'You are my valentine baby! I have loved you so much and I can not express my love in mere words! Oh dear lord, please, In any life, give her or give hell!'
}
else{
    madeIt.textContent = 'You are my valentine baby! I have loved you so much and I can not express my love in mere words! Oh dear lord, please, In any life, give her or give hell!'
}
function showAnother(){
    const seeAnother = document.getElementById('see-another')
    if(+(localStorage.getItem("displayMarks")) >= 70){
        seeAnother.textContent ='You are my valentine baby! I have loved you so much and I can not express my love in mere words! Oh dear lord, please, In any life, give her or give hell!'
    }
    else{
        seeAnother.textContent ='You are my valentine baby! I have loved you so much and I can not express my love in mere words! Oh dear lord, please, In any life, give her or give hell!'
    }
    setTimeout(() => {
        const extraMessage = document.getElementById('extra-message')
        extraMessage.textContent = 'See! I love you so much that I dont even care for numbers cuz 100 marks < infinite love, right!, please sorry this is all I could do, perhaps I will try harder Love you in any world, My Darling Adarshita'
    }, 5000)
}