document.addEventListener('scroll', function(){
    let elementTop = window.scrollY.toFixed()
    console.log(elementTop);
    if(elementTop > 280){
        let contpro = document.getElementById('product')
        contpro.classList.remove('right-[100%]')
        contpro.classList.add('right-0')
        let cnotcar = document.querySelectorAll('#card')
        for(let i of cnotcar){
            i.classList.remove('opacity-0')
            i.classList.add('opacity-100')

        }
    if(elementTop > 790){
        let menpro = document.getElementById('menu-1')
        menpro.classList.remove('left-[100%]')
        menpro.classList.add('left-0')
        setTimeout(function() {
             menpro.classList.remove('h-[55px')
            menpro.classList.add('h-[240px]')
        },2000)
    }}
    if(elementTop > 810){
        let menpro = document.getElementById('menu-2')
        menpro.classList.remove('right-[100%]')
        menpro.classList.add('right-0')
        setTimeout(function() {
             menpro.classList.remove('h-[55px')
            menpro.classList.add('h-[190px]')
        },2000)}
})