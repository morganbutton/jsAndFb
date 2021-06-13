
/*bring all panels into js*/
/*query selector all creates a node list array of objects*/
const panels = document.querySelectorAll('.panel');
/* you can access the panels with 0 index console.log(panels[1]); */
/*for each once for each element in array*/
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
    
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}