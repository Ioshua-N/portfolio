const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

let currentPage = 0;

function displayLogo()
{
    var logo = document.getElementById('bigLogo');
    if(currentPage != 0)
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
    if (currentPage % 2 != 0)
    {
        document.querySelectorAll('.logo').forEach(element => 
        {
            element.classList.remove('logo')
            element.classList.add('logo-black');
        })
    }
    else if (currentPage % 2 === 0)
    {
        document.querySelectorAll('.logo-black').forEach(element => 
        {
            element.classList.remove('logo-black')
            element.classList.add('logo');
        });
    }
}

window.addEventListener('wheel', function(event) 
{
    if (event.deltaY > 0)
    {
        scrollPage(1);
        changeLogo();
    }
    else
    {
        scrollPage(-1);
        changeLogo();
    }
    displayLogo()
},
{
    passive: false
});

window.onload = function() 
{
    var scrollPosition = 0;

    window.scrollTo(
    {
        top: scrollPosition,
        behavior: 'smooth'
    });
};