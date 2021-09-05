const tooltipLinkAll = [...document.querySelectorAll(".has-tooltip")];
const body=document.querySelector('body')
const markupTooltip = (text, left, top) => {
    const divTooltip = document.createElement('div')
    divTooltip.classList.add("tooltip");
    divTooltip.classList.add('tooltip_active')
    divTooltip.setAttribute('style', `left:${left}; top:${top}`)
    divTooltip.innerHTML=text
   body.appendChild(divTooltip)
}
const handleTooltip = (e) => {
    e.preventDefault()
    console.log(e.target)
    const textTooltip = e.target.getAttribute("title");   
    const findLink=tooltipLinkAll.find(elem=>elem.getAttribute('title')===textTooltip)
    if (findLink) {
        markupTooltip(textTooltip, leftPosition, topPosition)
        const tooltipDiv = document.querySelector('.tooltip')
        const leftPosition = e.target.getBoundingClientRect().x
        const topPosition = e.target.getBoundingClientRect().y
        console.log(e.target.getBoundingClientRect())
}

   
}
body.addEventListener('click', handleTooltip)