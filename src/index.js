import testTpl from './test.handlebars';

document.getElementById('js-creater')
.addEventListener('click', ()=>{
    document.body.insertAdjacentHTML(
        'beforeend', 
        testTpl({discription: 'This is my template'})
        )
})
