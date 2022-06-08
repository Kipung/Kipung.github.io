class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <style>
            .navbar{
                /* border:solid red; */
                padding-top:7px;
                padding-bottom:6px;
                padding-left:3px;
                padding-right:8px;
                max-width: 100%;
                margin-top:18px;
                background: rgba(117, 223, 159, 0.9);
                border-radius: 1rem;
                min-width:320px;
                top:8px;
                z-index: +2;
                position: -webkit-sticky;
                position: sticky;
            
            }
            .wrapper {
                /* border:solid yellow; */
                max-width: 100%;
                display:flex;
                justify-content:space-evenly;
            }
            .navigations {
                -webkit-tap-highlight-color: transparent;
                display:none;
            }
            .navigations.active {
                /* border:solid blue; */
                display:flex;
                flex-direction:column;
                padding:0;
            }
            .menu_wrapper {
                /* border:solid purple; */
                flex-direction:row;
            
            }
            .navigations li {
                /* border:solid black; */
                display:flex;
                flex-direction: row;
                justify-content: center;
                margin-left:0;
                list-style:none;
            }
            .navigations li a{
                /* border: solid green;        */
                text-decoration:none;
                color:rgba(255, 255, 255, 1);
                font-size: 2vw;
                font-weight:bold;
                padding:6px;
                font-size:5vw;
            }
            .navigations li a:active {
                /* border:solid red; */
                background:#5fa179;
                /* padding-bottom:1.5px;
                padding-top:1.5px; */
                border-radius:0.9rem;
            }
            .navbar_logo{
                /* border:solid purple; */
                padding:5px;
                padding-bottom:0;
                padding-top:2px;
                border-radius: 0.3rem;
                margin-left:1px;
            }
            .navbar_title h1 {
                /* border:solid green; */
                padding-top:2px;
                margin:0;
                font-size:1.95em;
            }
            .navbar_title h1 a {
                text-decoration:none;
                color: white;
            }
            .navbar_menu_icon {
                /* border:solid orange; */
                /* padding-top:6px;
                padding-left:6px; */
                margin-top:6px;
                margin-left:6px;
            }
            .navbar_menu_icon:active {
                /* border:solid black; */
                /* padding:2px; */
                border-radius:0.5rem;
                background:#5fa179;
            }

            
            @media screen and (min-width:768px) {
                .wrapper{
                    /* border:solid yellow; */
                    justify-content: center;
                }
                .navbar_menu_icon {
                    display:none;
                }
                .navbar .navigations {
            
                    display:flex;
                    justify-content: space-evenly;
                    margin-top:0;
                    margin-bottom:2px;
                }
                .navigations li{
            
                    list-style:none;
                }
                .navigations li a{
                
                    text-decoration:none;
                    color:rgba(255, 255, 255, 1);
                    font-size: 2vw;
                    font-weight:bold;
                    padding:6px;
                }
            } 

            </style>
            <nav class="navbar">
         <div class="wrapper">
            <div class="navbar_logo">
                <a href="https://www.codingsteps.org/"><img alt="codingsteps logo" src="images/logo.svg" onerror=src="/images/logo.svg"></a>
            </div>
            <div class="navbar_title">
                <h1><a href="https://www.codingsteps.org/">Codingsteps.org</a></h1>
            </div>
                <a class="navbar_menu_icon">
                    <img alt="menu_icon" src="images/menu_icon.svg">
                </a>
        </div>
        <div class="menu_wrapper">
            <ul class="navigations">
                <li><a href="https://www.codingsteps.org/" class="links">Home</a></li>
                <li><a href="https://www.codingsteps.org/lessons" class="links">Lessons</a></li>
                <li><a href="https://www.codingsteps.org/contact" class="links">Contact</a></li>
         
                <li><a href="https://www.codingsteps.org/bookmobile" class="links">Bookmobile</a></li>
                <li><a href="https://www.codingsteps.org/about" class="links">About</a></li>
            </ul>
        </div>
    </nav>
            `;
    }
}

customElements.define('header-component', Header);
