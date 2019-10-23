let header = document.getElementsByTagName('header')[0]; 
    window.onscroll = function (e) {  
        if (header)
            header.style.left = window.pageYOffset + 'px';
    }  