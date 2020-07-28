$(document).ready(function() {
    //Do check & uncheck by Jquery
    let todos = $('.box');
    console.log(todos)
    todos.on('click',(event) => {
        let element = $(event.target.querySelector('.check > div'))
        if ( element.hasClass('icon-uncheck') ){
            element.removeClass('icon-uncheck');
            element.addClass('icon-check')
        }else {
            element.removeClass('icon-check');
            element.addClass('icon-uncheck')
        }
        console.log(element)

    })
  });


    //The function for close the sidebar by JS
  function closeSideBar() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.display = "none"

    let header = document.getElementById("header");
    let newElement = document.createElement("DIV")
    newElement.classList.add('class','icon-arrow-left-open')
    newElement.addEventListener('click',() => {
        openSideBar(newElement)
    })
    header.appendChild(newElement)
}

    //The function for open the sidebar by JS
    function openSideBar(removeEle){
        removeEle.remove();
        document.getElementById("sidebar").style.width = "200px";
        document.getElementById("sidebar").style.display = "block"
    }
