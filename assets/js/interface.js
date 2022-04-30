function interface(){
    const $ = document.querySelector.bind(document)
    $('.content').style.height = (window.innerHeight - $('#header').offsetHeight - $('.footer').offsetHeight) + 'px'
    $('.container').style.height = (window.innerHeight - $('#header').offsetHeight - $('.footer').offsetHeight) + 'px'
    
    const imageInterfaces = [
        {
            url: './assets/interface/Blackpink.jpg',
            name: 'Blackpink',
            textColor: 'rgb(243, 185, 255)',
            textHover: 'rgb(255, 255, 255)',
            bgHover: 'rgba(197, 136, 255, 0.3)',
            bgColor: 'rgba(137, 95, 253, 0.575)',
            bgForcus: 'rgb(93, 51, 209)',
            bgDefault: 'rgba(86, 48, 148, 0.897)',
        },
        {
            url: './assets/interface/Rose.jpg',
            name: 'Rose',
            textColor: 'rgb(255, 227, 68)',
            textHover: 'rgb(255, 255, 255)',
            bgHover: 'rgba(253, 255, 159, 0.445)',
            bgColor: 'rgba(244, 255, 148, 0.247)',
            bgForcus: 'rgb(113 171 77)',
            bgDefault: 'rgba(52, 126, 64, 0.815)',
        },
        {
            url: './assets/interface/Lisa.jpg',
            name: 'Lisa',
            textColor: 'rgb(167 24 97)',
            textHover: 'rgb(255, 255, 255)',
            bgHover: 'rgba(226, 110, 255, 0.445)',
            bgColor: 'rgb(187 51 168 / 25%)',
            bgForcus: 'rgb(181 84 152)',
            bgDefault: 'rgb(197 98 144 / 82%)',
        },
        {
            url: './assets/interface/Jennie.jpg',
            name: 'Jennie',
            textColor: 'rgb(152, 240, 255)',
            textHover: 'rgb(255, 255, 255)',
            bgHover: 'rgba(110, 244, 253, 0.445)',
            bgColor: 'rgba(0, 109, 100, 0.247)',
            bgForcus: 'rgb(0, 153, 255)',
            bgDefault: 'rgba(52, 109, 126, 0.82)',
        },
        {
            url: './assets/interface/Jisoo.jpg',
            name: 'Jisoo',
            textColor: 'rgb(161, 211, 154)',
            textHover: 'rgb(255, 255, 255)',
            bgHover: 'rgba(110, 253, 181, 0.445)',
            bgColor: 'rgba(0, 109, 9, 0.247)',
            bgForcus: 'rgb(54, 153, 79)',
            bgDefault: 'rgba(52, 126, 68, 0.815)',
        },
    ]
    //Set :root
    var r = document.querySelector(':root');
    function myFunction_set(textColor, textHover, bgHover, bgColor, bgForcus, bgDefault) {
        r.style.setProperty('--text-color', textColor);
        r.style.setProperty('--text-hover', textHover);
        r.style.setProperty('--bg-hover', bgHover);
        r.style.setProperty('--bg-color', bgColor);
        r.style.setProperty('--bg-forcus', bgForcus);
        r.style.setProperty('--bg-default', bgDefault);
    }
    var listInterface = document.querySelector('.header-interface-form-list')
    var interfaceHtml = imageInterfaces.map(imageInterface => {
        return `
            <li class="header-interface-form-list__item">
                <img class="header-interface-form-list__item-img" src="${imageInterface.url}" alt="Blackpink">
                <span class="header-interface-form-list__item-span">${imageInterface.name}</span>
            </li>
        `
        }
    ).join('')
    listInterface.innerHTML = interfaceHtml
    const changeIterface = document.querySelector('.header-bgcolor-icon')
    const headerInterfaceFill = document.querySelector('.header-interface')
    const headerInterfaceForm = document.querySelector('.header-interface-form')
    const closeInterface = document.querySelector('.header-interface-form-header-icon')
    changeIterface.onclick = function(){
        headerInterfaceFill.style.display = 'block'
        headerInterfaceForm.style.display = 'block'
    }
    headerInterfaceFill.onclick = function(){
        headerInterfaceFill.style.display = 'none'
        headerInterfaceForm.style.display = 'none'
    }
    closeInterface.onclick = function(){
        headerInterfaceFill.style.display = 'none'
        headerInterfaceForm.style.display = 'none'

    }

    const bgInterfaces = document.querySelectorAll('.header-interface-form-list__item')
    const bgContainer = document.querySelector('.container')
    bgInterfaces.forEach(function(bgInterface, index) {
        bgInterface.onclick = () => {
            // console.log(imageInterfaces[index].url.replace('.',''))
            bgContainer.style.backgroundImage = `url(${imageInterfaces[index].url})`
            myFunction_set(imageInterfaces[index].textColor,imageInterfaces[index].textHover, imageInterfaces[index].bgHover,
                imageInterfaces[index].bgColor, imageInterfaces[index].bgForcus, imageInterfaces[index].bgDefault
            )
        }
    })      
}
