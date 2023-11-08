
let text = document.getElementById('textarea');
let btn = document.getElementById("submit");
let color = document.getElementById("color")
let printed = document.getElementsByClassName("itemsDisplayed")
let turnOffThisOne = document.getElementById("turnOffThisOne")
let body = document.getElementsByTagName('body')

btn.addEventListener('click', addNotes);
var allNotes =[]

function addNotes(){
    if (text.value !==""){
        console.log(text.value)
        let newVal={
            value:text.value,
            color:color.value,
        }
        allNotes.push(newVal)
    }
    else{
        alert("A note can't be empty.");
    }
    text.value=""
    text.focus()
    displayNotes(allNotes);
    console.log("called display notes")
};

function displayNotes(allNotes){
    printed[0].innerHTML =""
    turnOffThisOne.innerHTML=""

    allNotes.forEach(element => {
        let htmlToBeAdded =
        `
        
                <div class="card" style="background-color:${element.color}">
                    <div>${element.value}</div>
                    <div><a id="del">Del</a></div>
                </div>
       
        `;
        printed[0].insertAdjacentHTML('afterBegin',htmlToBeAdded);
        let del = document.getElementById("del");
        del.addEventListener('click',function(e){
            location.reload();
            // printed[0].remove();
            // let template =
            // `
            // <div class="itemsDisplayed" style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
            // <h1 class="text-xl font-semibold flex justify-center items-center pt-[5%]" id="turnOffThisOne">You haven't added notes yet.</h1>
            // </div>
            // `
            // body[0].insertAdjacentHTML('afterend',template);
            // addNotes=[]
            // console.log(allNotes)
        })
            
        })
    }


function deleteAll(e){
    console.log(e)
}