let search = document.querySelector('#search');
let div = document.querySelector('#help');
let icon = document.querySelector('#icon')


search.onclick = function(){
    div.classList.toggle('active');
    

}

icon.onclick = function(){
    div.classList.toggle('active')
    
}


let language = document.querySelector('#language')
let select_lang =document.querySelector('.select-lang')
let transform_ = document.querySelector('#transform')

select_lang.onclick = function(){
    language.classList.toggle('active')
    transform_.classList.toggle('active_transform')
}