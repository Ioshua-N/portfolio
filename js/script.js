const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

let currentPage = 0;

function displayLogo() // mostrar apenas o N.
{
    var logo = document.getElementById('bigLogo');
    if(currentPage !== 0)
    {
        logo.style.display = 'none'
    }
    else
    {
        logo.style.display = 'flex'
    }
}

function scrollPage(delta)
{
    currentPage += delta;

    if (currentPage < 0)
    {
        currentPage = 0;
    } 
    else if (currentPage >= totalPages)
    {
        currentPage = totalPages - 1;
    }
    

    pages[currentPage].scrollIntoView(
    {
        behavior: 'smooth'
    });
}

function changeLogo()
{
    if (currentPage % 2 === 0) // par
    {
        document.querySelectorAll('.logo').forEach(element => 
        {
            element.classList.remove('logo-invert');
        });
    }
    else // impar
    {
        document.querySelectorAll('.logo').forEach(element => 
        {
            element.classList.add('logo-invert')
        });
    }
}

function changeSocial()
{
    if (currentPage % 2 === 0) // par
    {
        document.querySelectorAll('.social').forEach(element => 
        {
            element.classList.remove('social-invert');
        });
        document.querySelectorAll('.icon').forEach(element => 
        {
            element.classList.remove('icon-invert');
        });
    }
    else // impar
    {
        document.querySelectorAll('.social').forEach(element => 
        {
            element.classList.add('social-invert')
        });
        document.querySelectorAll('.icon').forEach(element => 
        {
            element.classList.add('icon-invert')
        });
    }
}

function changeCv()
{
    const cvButton = document.querySelector('.cv');
    if (currentPage % 2 === 0 && currentPage !== 0)
    {
        cvButton.classList.add('cv-invert');
    }
    else
    {
        cvButton.classList.remove('cv-invert');
    }
}

window.addEventListener('wheel', function(event) 
{
    if (event.deltaY > 0)
    {
        scrollPage(1);
        scrollSleep = this.setTimeout(function()
        {
            changeLogo();
            changeCv();
            //changeSocial(); barra social em cima
            //displayLogo(); logo apenas N.
        }, 450); // valor em ms
    }
    else
    {
        scrollPage(-1);
        scrollSleep = this.setTimeout(function()
        {
            changeLogo();
            changeCv();
            //changeSocial(); barra social em cima
            //displayLogo(); logo apenas N.
        }, 35); // valor em ms
    };
    scrollSleep = this.setTimeout(function()
    {
        changeSocial();
    }, 250);
    
},
{
    passive: false
});

window.onload = function() 
{
    var scrollPosition = 0;
    currentPage = 0;

    window.scrollTo(
    {
        top: scrollPosition,
        behavior: 'smooth'
    });
};