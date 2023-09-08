let btn = document.getElementById("btn")
let profileImage = document.getElementById("img")
let sn = document.getElementById("surname")
let fn = document.getElementById("full-name")
let age = document.getElementById("age")
let hbs = document.getElementById("hobbies")
let course = document.getElementById("course")
let matNo = document.getElementById("matric-no")
let grade = document.getElementById("cgpa")
let emailEl = document.getElementById("email")
let textEl = document.getElementById("text-el")
let inputEl = document.getElementById("input-el")
const symbols = document.querySelectorAll("#sign")
const cancelBtn = document.querySelector("#cancel-btn")
const qBox = document.getElementById("q-box")

const students = [
{
    matricNo: "190205062",
    firstName: "Oluwanifemi",
    lastName: "Akinborode",
    fullName: function(){
        return this.firstName + " " + this.lastName
    },
    course:"Finance",
    cgpa: "4.75",
    image: "nif.jpg",
    hobbies: "Writing codes, reading, watching and playing basketball.",
    age: 20,
    email: "oluwanifemiakinborode@gmail.com"
},
{
    matricNo: "190205063",
    firstName: "Oluwasegun",
    lastName: "Adebowale",
    fullName: function(){
        return this.firstName + " " + this.lastName
    },
    course:"Finance",
    cgpa: "4.68",
    image: "sniz.JPG",
    hobbies: "Styling. Designing and Playing Basketball.",
    age: 20,
    email: "adebowalesegun@yahoo.com"
},
{
    matricNo: "190205064",
    firstName: "Ayanfeoluwa",
    lastName: "Agboola",
    fullName: function(){
        return this.firstName + " " + this.lastName
    },
    course:"Accounting",
    cgpa: "4.9",
    image: "fiz2.jpg",
    hobbies: "Playing football, Chilling with friends and Cooking.",
    age: 22,
    email: "agboolayanfe@gmail.com"
}
]

let student = ""
function getStudent(){
    for (i = 0; i < students.length ; i ++){
        if (inputEl.value == students[i].matricNo){
            student = students[i]
        }
    }
    return student
}

function display(){
    profileImage.src = getStudent().image
    sn.textContent = getStudent().lastName
    matNo.textContent = getStudent().matricNo
    grade.textContent = getStudent().cgpa
    course.textContent = getStudent().course
    age.textContent = getStudent().age
    hbs.textContent = getStudent().hobbies
    fn.textContent = getStudent().firstName + " " + getStudent().lastName
    emailEl.textContent = getStudent().email
}

btn.addEventListener("click", function(){
    qBox.style.top = "50%"
    inputEl.style.transform = "translateY(-50px)"
    btn.style.transform = "translateY(-50px)"
    display()
});


// let state = 0

// symbol.addEventListener("click", function(){
//     if (state == 0){
//         symbol.style.transform = "rotate(45deg)"
//         favFood.style.display = "block"
//         state = 1
//     }else{
//         symbol.style.transform = "none"
//         favFood.style.display = "none"
//         state= 0
//     }
// })

cancelBtn.addEventListener("click", function(){
    qBox.style.top = "150%"
    inputEl.style.transform = "translateY(0)"
    btn.style.transform = "translateY(0)"
    // marqEl.style.display = "block"   
})

symbols.forEach(function(symbol){
    symbol.addEventListener("click", function(e){
        let content = e.currentTarget.parentNode.parentNode
        content.classList.toggle("reveal")
    })
})
