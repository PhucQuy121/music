function focusInput() {
    const inputSearch = document.querySelector('.header-search-input')
    const headerSearch = document.querySelector('.header-search')
    const bodyTag = document.querySelector('body')
    inputSearch.onfocus = function(){
        Object.assign(headerSearch.style,{
            backgroundColor: 'var(--bg-forcus)',
            borderBottomRightRadius: '0',
            borderBottomLeftRadius: '0'
        });
    }
    inputSearch.onblur = function(){
        Object.assign(headerSearch.style,{
            backgroundColor: 'var(--bg-color)',
            borderBottomRightRadius: '30px',
            borderBottomLeftRadius: '30px'
        });
    }
    const settingIcon = document.querySelector('.header-setting-icon')
    const settingTool = document.querySelector('.header-setting-tool')
    settingIcon.addEventListener('click', () =>{
        settingTool.classList.toggle('header-setting-tool-active')
    })

    window.addEventListener('mouseup', function(event) {
        if (event.target !== settingTool && event.target !== settingIcon) {
            settingTool.classList.add('header-setting-tool-active')
        }
    });
}