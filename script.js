const sendReviewBtn = document.querySelector('.btn')
const thanksMessage = document.querySelector('.sent-feedback')
const askFeedback = document.querySelector('.ask-feedback')
const feedbackResult = document.querySelector('.feedback-result')
const emojiDivs = document.querySelectorAll('.emoji')
const main = document.querySelector('.main')

let colored = {
    "Satisfied": "green",
    "Neutral": "blue",
    "Unhappy": "red"
}
let text  = "Satisfied"

main.addEventListener('click', (e)=>{
    const parent = e.target.parentNode;
    if(parent.classList.contains('emoji')|| e.target.contains('emoji')){
      removeSelected()
      parent.classList.add('selected')
       text = e.target.nextElementSibling.innerHTML
    }
})

function removeSelected(){
    emojiDivs.forEach(emojiDiv => {
       emojiDiv.classList.remove('selected') 
    });
}
sendReviewBtn.addEventListener('click', showThanksMessage)

function showThanksMessage(){
    thanksMessage.classList.remove('hidden')
    askFeedback.classList.add('hidden')
    feedbackResult.innerHTML = text
    feedbackResult.style.color = colored[`${text}`]
}
