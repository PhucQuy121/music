function song(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const PLAYER_STORAGE_KEY = 'NPQ_PLAYER'

    const musicList = $('.music-list')
    const imageSongPlaying = $('.song-isPlaying-image')
    const nameSongPlaying = $('.song-isPlaying-product-name')
    const authorSongPlaying = $('.song-isPlaying-product-author')
    const audio = $('#audio')
    const btnControl = $('.btn-control-song')
    const playBtn = $('.btn-control-song-play')
    const pauseBtn = $('.btn-control-song-pause')
    const timingSong = $('.song-control-duration-timing')
    const durationSong = $('.song-control-duration-end')
    const progress = $('.song-control-duration-range')
    const nextBtn = $('.btn-next')
    const prevBtn = $('.btn-prev')
    const shuffleBtn = $('.btn-shuffle')
    const repeatBtn = $('.btn-repeat')


    const app = {
        currentIndex: 0,
        isPlaying: false,
        isRandom: false,
        // config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
        isRepeat: false,
        songs: [
            {
                name: 'Đám Cưới Nha',
                singer: 'Hồng Thanh, Mie',
                path: './assets/music/DamCuoiNha.mp3',
                imageNumber: './assets/nummber-image/one.png',
                imageSong: '/assets/image-singer/DamCuoiNha.webp',
                duration: '2:55',
            },
            {
                name: 'Muốn Em Là',
                singer: 'Keyo',
                path: './assets/music/MuonEmLa.mp3',
                imageNumber: './assets/nummber-image/two.png',
                imageSong: '/assets/image-singer/MuonEmla.webp',
                duration: '3:47',
            },
            {
                name: 'Yêu Đơn Phương Là Gì',
                singer: 'Hon',
                path: './assets/music/YeuDonPhuongLaGi.mp3',
                imageNumber: './assets/nummber-image/three.png',
                imageSong: '/assets/image-singer/YeuDonPhuongLaGi.webp',
                duration: '3:45',
            },
            {
                name: 'Anh Vẫn Ở Đây',
                singer: 'Thành Đạt',
                path: './assets/music/AnhVanODay.mp3',
                imageNumber: './assets/nummber-image/four.png',
                imageSong: '/assets/image-singer/AnhVanODay.webp',
                duration: '5:07',
            },
            {
                name: 'Kẹo Bông Gòn',
                singer: 'H2K',
                path: './assets/music/KeoBongGon.mp3',
                imageNumber: './assets/nummber-image/five.png',
                imageSong: '/assets/image-singer/KeoBongGon.webp',
                duration: '3:41',
            },
            {
                name: 'Chạnh Lòng Thương Cô 2',
                singer: 'Huy Vạc',
                path: './assets/music/ChanhLongThuongCo2.mp3',
                imageNumber: './assets/nummber-image/six.png',
                imageSong: '/assets/image-singer/ChanhLongThuongCo.webp',
                duration: '5:12',
            },
            {
                name: 'Đau Ở Đây Này',
                singer: 'Nal',
                path: './assets/music/DauODayNay.mp3',
                imageNumber: './assets/nummber-image/seven.png',
                imageSong: '/assets/image-singer/DauODayNay.webp',
                duration: '4:39',
            },
            {
                name: 'Đào Nương',
                singer: 'Hoàng Vương',
                path: './assets/music/DaoNuong.mp3',
                imageNumber: './assets/nummber-image/eight.png',
                imageSong: '/assets/image-singer/DaoNuong.webp',
                duration: '3:07',
            },
            {
                name: 'Đông Phai Mờ Dáng Ai',
                singer: 'Datkaa',
                path: './assets/music/DongPhaiMoDangAi.mp3',
                imageNumber: './assets/nummber-image/night.png',
                imageSong: '/assets/image-singer/DongPhaiMoDangAi.webp',
                duration: '4:42',
            },
            {
                name: 'May Mắn Khi Có Em',
                singer: 'Đật Villa, Phạm Sắc Lệnh',
                path: './assets/music/MayManKhiCoEm.mp3',
                imageNumber: './assets/nummber-image/ten.png',
                imageSong: '/assets/image-singer/MaiManKhiCoEm.webp',
                duration: '5:49',
            },
        ],
        setConfig(key, value) {
            this.config[key] = value;
            localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
        },

        render() {
            const htmls = this.songs.map((song,index) => {
                return `
                        <li class="music-list-item ${index === this.currentIndex ? 'music-list-item-active':''}" data-index="${index}">
                            <img class="music-list-item-image" src="${song.imageNumber}" alt="">
                            <div class="music-list-item-song">
                                <div  data-index="${index}" style="background-image: url(.${song.imageSong});" class="music-list-item-song-active">
                                    <div class="music-list-item-song-active-icon music-list-item-song-active-is"><i class="fa-solid fa-play"></i></div>
                                    <ul class="music-list-item-song-effect">
                                        <li class="music-list-item-song-effect-item"></li>
                                        <li class="music-list-item-song-effect-item"></li>
                                        <li class="music-list-item-song-effect-item"></li>
                                        <li class="music-list-item-song-effect-item"></li>
                                    </ul>
                                </div>
                                <div class="music-list-item-song-product">
                                    <h4 class="music-list-item-song-product-namesong">${song.name}</h4>
                                    <a class="music-list-item-song-product-link" href="#">
                                        <p class="music-list-item-song-product-link-author">${song.singer}</p>
                                    </a>
                                    
                                </div>
                            </div>
                        </li>
                `
            }).join('')
            musicList.innerHTML = htmls
            
        },
        difineProperties(){
            Object.defineProperty(this, 'currentSong', {
                get() {
                    return this.songs[this.currentIndex]
                }
            })
        },
        handleEvent() {
            const _this = this
             // Xử lý play
             btnControl.onclick = () => {
                 if(_this.isPlaying)
                    audio.pause()
                else
                    audio.play()
             }

            //Khi song đang được play
            audio.onplay = () => {
                imageSongPlaying.style.animation = 'around linear 10s infinite'

                _this.isPlaying = true
                playBtn.classList.remove('btn-control-song-active')
                pauseBtn.classList.add('btn-control-song-active')
                const melodySong = $$('.music-list-item-song-active-icon')
                const melodySongIcon = $$('.music-list-item-song-effect')
                melodySong[_this.currentIndex].classList.toggle('music-list-item-song-active-is')
                melodySongIcon[_this.currentIndex].classList.toggle('music-list-item-song-active-is')
            }

            //Khi song đang được pause
            audio.onpause = () => {
                imageSongPlaying.style.animationPlayState = 'paused'
                _this.isPlaying = false
                playBtn.classList.add('btn-control-song-active')
                pauseBtn.classList.remove('btn-control-song-active')
            }

            //Khi tiến độ bài hát thay đổi
            audio.ontimeupdate = () => {
                if(audio.duration){
                    const progressPersent = audio.currentTime/audio.duration * 100
                    progress.value = progressPersent
                }
                const timeRun = Math.floor(audio.currentTime/60)
                    if(Math.ceil(audio.currentTime - (timeRun * 60)) === 60)
                        timingSong.innerText = `${timeRun+1}:00`
                    else {
                        timingSong.innerText = `${timeRun}:${
                            Math.ceil(audio.currentTime - (timeRun * 60)) < 10 ?
                            '0' + Math.ceil(audio.currentTime - (timeRun * 60))
                            :Math.ceil(audio.currentTime - (timeRun * 60))
                        }`
                    }
            }

            //Khi seek
            progress.onclick = () => {
                audio.currentTime = progress.value/ 100 * audio.duration
                // console.log(progress.value/ 100 * audio.duration)
            }

            window.onkeydown = (e) => {
                if(e.code === 'Space'){
                    btnControl.click()
                }
            }

            nextBtn.onclick = () => {
                if(_this.isRandom){
                    _this.playRandomSong()
                }
                else
                    _this.nextSong()
                audio.play()
                _this.render()
            }

            prevBtn.onclick = () => {
                if(_this.isRandom){
                    _this.playRandomSong()
                }
                else
                    _this.prevSong()
                audio.play()
                _this.render()
            }

            //Khi xử lý random song
            shuffleBtn.onclick = () => {
                if(_this.isRepeat){
                    _this.isRepeat = !_this.isRepeat
                    repeatBtn.classList.remove('btn-active',_this.isRepeat)
                }
                _this.isRandom = !_this.isRandom
                shuffleBtn.classList.toggle('btn-active',_this.isRandom)
                // _this.setConfig('isRandom', _this.isRandom)
            }

            //Khi xử lý random song
            repeatBtn.onclick = () => {
                if(_this.isRandom){
                    _this.isRandom = !_this.isRandom
                    shuffleBtn.classList.remove('btn-active',_this.isRandom)
                }
                _this.isRepeat = !_this.isRepeat
                repeatBtn.classList.toggle('btn-active',_this.isRepeat)
                // _this.setConfig('isRepeat', _this.isRepeat)
            }

            //Xử lý next song khi audio ended
            audio.onended = () => {
                if(this.isRepeat){
                    audio.play()
                } else {
                    nextBtn.click()
                }
            }

            //Lắng nghe hành vi doubleclick vào playlist
            musicList.ondblclick = (e) => {
                const songNodes = e.target.closest('.music-list-item:not(.music-list-item-active)')
                if(songNodes){
                    _this.currentIndex = Number(songNodes.dataset.index)
                    _this.loadCurrentSong()
                    audio.play()
                    _this.render()
                }
            }

            //Lắng nghe hành vi click vào playlist
            musicList.onclick = (e) => {
                const songNodes = e.target.closest('.music-list-item-song-active')
                const songAuthor = e.target.closest('.music-list-item-song-product-link-author')
                if(songNodes || songAuthor){
                    if(songNodes){
                        _this.currentIndex = Number(songNodes.dataset.index)
                        _this.loadCurrentSong()
                        audio.play()
                        _this.render()
                    }
                    else{
                        confirm('Tôi chưa tạo web này')
                    }
                }
            }
        },
        nextSong() {
            this.currentIndex++
            if(this.currentIndex > this.songs.length-1){
                this.currentIndex = 0
            }

            this.loadCurrentSong()
        },
        prevSong() {
            this.currentIndex--
            if(this.currentIndex < 0){
                this.currentIndex = this.songs.length - 1
            }

            this.loadCurrentSong()
        },
        playRandomSong() {
            let newIdex
            do{
                newIdex = Math.floor(Math.random() * this.songs.length)
            }while(newIdex === this.currentIndex)
            
            this.currentIndex = newIdex
            this.loadCurrentSong()
        },
        loadCurrentSong() {
            
            imageSongPlaying.setAttribute('src', `.${this.currentSong.imageSong}`)
            nameSongPlaying.innerText = `${this.currentSong.name}`
            authorSongPlaying.innerText = `${this.currentSong.singer}`
            audio.setAttribute('src', `${this.currentSong.path}`)
            durationSong.innerText = `${this.currentSong.duration}`
        },
        start() {
            //Định nghĩa các thuộc tính cho object
            this.difineProperties()

            //Lắng nghe các sự kiện
            this.handleEvent()

            //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
            this.loadCurrentSong()

            //render musiclist
            this.render()
            
            console.log(
                "%cLOVE YOU",
                "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
              );

        }
    }
    app.start()
}
