const helper = (e) =>{
    if(e.target.className == 'multiselect__input'){
        const prev = e.target.value
        prev.charAt(0) == '~' ? e.target.value = e.target.value : e.target.value  = '~' + e.target.value 
    }
}
document.body.addEventListener('keyup', helper)