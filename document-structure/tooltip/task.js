const tooltipLinkAll = [...document.querySelectorAll(".has-tooltip")];
const body=document.querySelector('body')
const markupTooltip = (text, selector) => {
    const divTooltip = document.createElement('div')
    divTooltip.classList.add("tooltip");
    divTooltip.classList.add('tooltip_active')
    divTooltip.innerHTML=text
    selector.nextElementSibling.append(divTooltip)
}
const handleTooltip = (e) => {
    e.preventDefault()
    const textTooltip = e.target.getAttribute("title");   
    const findLink=tooltipLinkAll.find(elem=>elem.getAttribute('title')===textTooltip)
    if (findLink) {
        markupTooltip(textTooltip, e.target)
        console.log(e.target.nextElementSibling)
}

   
}
tooltipLinkAll.forEach(link=>link. addEventListener('click', handleTooltip))