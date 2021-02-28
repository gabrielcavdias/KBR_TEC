//Listeners
document.querySelector('.controls__mais').addEventListener('click', () =>{
    let img01 = document.querySelector('[alt="Simulação de thumbnail de vídeo 01"]')
    let img02 = document.querySelector('[alt="Simulação de thumbnail de vídeo 02"]')
    let img03 = document.querySelector('[alt="Simulação de thumbnail de vídeo 03"]')
    if(img01.attributes[0].value == 'img/video-1.png'){
        img01.setAttribute('src', 'img/video-2.png')
        img02.setAttribute('src', 'img/video-3.png')
        img03.setAttribute('src', 'img/video-1.png')
    }else if(img01.attributes[0].value == 'img/video-2.png'){
        img01.setAttribute('src', 'img/video-3.png')
        img02.setAttribute('src', 'img/video-1.png')
        img03.setAttribute('src', 'img/video-2.png')
    }else{
        img01.setAttribute('src', 'img/video-1.png')
        img02.setAttribute('src', 'img/video-2.png')
        img03.setAttribute('src', 'img/video-3.png')
    }
})
document.querySelector('.controls__menos').addEventListener('click', () =>{
    let img01 = document.querySelector('[alt="Simulação de thumbnail de vídeo 01"]')
    let img02 = document.querySelector('[alt="Simulação de thumbnail de vídeo 02"]')
    let img03 = document.querySelector('[alt="Simulação de thumbnail de vídeo 03"]')
    if(img01.attributes[0].value == 'img/video-1.png'){
        img01.setAttribute('src', 'img/video-3.png')
        img02.setAttribute('src', 'img/video-1.png')
        img03.setAttribute('src', 'img/video-2.png')
    }else if(img01.attributes[0].value == 'img/video-3.png'){
        img01.setAttribute('src', 'img/video-2.png')
        img02.setAttribute('src', 'img/video-3.png')
        img03.setAttribute('src', 'img/video-1.png')
    }else{
        img01.setAttribute('src', 'img/video-1.png')
        img02.setAttribute('src', 'img/video-2.png')
        img03.setAttribute('src', 'img/video-3.png')
    }
})
