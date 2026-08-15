// up and down ---> as is //

// left and right ---> going to a different url or a different visual of the information
// what is better in terms of performance and why ---> thinking about visuals 
// maybe using the miro api in terms of building up, but would that complicate things 
// maybe future iterations 


// each page file should have a button to it, and it should be univeral 
const weblinks = [
    "index.html",
    "index2.html",
    "index3.html",
]

let currentPage = weblinks[0];

// page pagination
const backPage = () => {
// 0 , 1 , 2
    if(currentPage === weblinks[0]){
        currentPage = currentPage.length - 1;
    }else{
        currentPage = currentPage - 1;
    }
    return currentPage
}

const forwardPage = () => {
    if(currentPage === currentPage.length - 1){
        currentPage = weblinks[0];
    }else{
        currentPage = currentPage + 1;
    }
    return currentPage;
}


console.log('it is connected to the web broswer');

// const body = document.querySelector('body');
const leftButton = document.querySelector('#leftButton');
const rightButton = document.querySelector('#rightButton');

leftButton.addEventListener('keyDown', (e) => {
    console.log(e.key)

    if(e.key === "ArrowLeft"){
        // keyLeft()
        const returnPage = backPage()

        console.log('leftButton has been clicked, here is the value: ', returnPage)
        // window.location.href=
    }
})

rightButton.addEventListener('keyDown',(e) => {
    console.log(e.key)

    if(e.key === "ArrowRight"){
        // keyLeft()
        const returnPage = backPage()
        console.log('leftButton has been clicked, here is the value: ', returnPage)
        // window.location.href=
        }
    }
 )