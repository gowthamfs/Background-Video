const btn = document.querySelector('.btn')
const video = document.querySelector('.bg-video')
const fa = document.querySelector('.fa-pause')

btn.addEventListener('click', ()=>{
    if(btn.classList.contains('pause')){
        btn.classList.remove('pause')
        fa.classList.add('fa-pause')
        fa.classList.remove('fa-play')
        video.play()
    } else{
        btn.classList.add('pause')
        video.pause()
        fa.classList.remove('fa-pause')
        fa.classList.add('fa-play')
    }
})