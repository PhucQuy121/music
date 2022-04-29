function footer() {
    const notLike = document.querySelector('.song-love-notlike')
    const isLike = document.querySelector('.song-love-liked')

    notLike.onclick = () => {
        notLike.classList.toggle('song-love-active')
        isLike.classList.toggle('song-love-active')
    }

    isLike.onclick = () => {
        notLike.classList.toggle('song-love-active')
        isLike.classList.toggle('song-love-active')
    }
}