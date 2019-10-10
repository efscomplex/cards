document.addEventListener('DOMContentLoaded',
    init
)
let userClick = new CustomEvent('userclicked',{detail:{msg:'user has clicked'}})
function init(){
    let artEl = document.getElementById('card-article')
    artEl.addEventListener('userclicked',(e)=>{
        console.log(e.detail)
    })
    artEl.addEventListener('click',(e)=>{
        artEl.dispatchEvent(userClick)
    })
}