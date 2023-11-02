const header = $("header");

document.addEventListener("DOMContentLoaded", function () {
  const currentURL = window.location.href;
  const headerLinks = document.querySelectorAll(".link");
  headerLinks.forEach((link) => {
    if (link.href === currentURL) {
      link.classList.add("active");
    }
  });
});

header.append(`

<section class="headerSection">
    <div class="mainLogo">
        <a href="/index.html">
            <img src="/public/images/icon/logoTetra.png" alt="" srcset="">
        </a>
    </div>

    <nav class="burger">

        <div class="hamburger-menu">
            <div class="hamburger"></div>
        </div>

        <ul class="nav-links">

            <li><a class="link " href="/index.html">Главная</a></li>
            <li><a class="link " href="/pages/lessons.html">Предметы</a></li>
            <li><a class="link " href="/pages/news.html">Новости</a></li>
            <li><a class="link " href="/pages/events.html">Мероприятия</a></li>
            <li><a class="link " href="/pages/about.html">О нас</a></li>
            <li><a class="link " href="/pages/creativity.html">Творчество</a></li>
            
        </ul>
    
    </nav>

    <div class="headerLinks">
        <div class="headerLink">
            <a class="link " href="/index.html">Главная</a>
        </div>
        <div class="headerLink">
            <a class="link " href="/pages/lessons.html">Предметы</a>
        </div>
        <div class="headerLink">
            <a class="link " href="/pages/news.html">Новости</a>
        </div>
        <div class="headerLink">
            <a class="link " href="/pages/events.html">Мероприятия</a>
        </div>
        <div class="headerLink">
            <a class="link " href="/pages/about.html">О нас</a>
        </div>
        <div class="headerLink">
            <a class="link " href="/pages/creativity.html">Творчество</a>
        </div>
    </div>
</section>

`);
