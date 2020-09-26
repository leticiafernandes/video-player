player = new Clappr.Player({ 
    source: 'https://res.cloudinary.com/dieeb1sr4/video/upload/v1601156880/cat_hw9syb.mp4',
})

const element = document.getElementById('player')

player.attachTo(element)