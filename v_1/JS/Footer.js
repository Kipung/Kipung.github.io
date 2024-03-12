class Footer extends HTMLElement{
    
    constructor(){
        super();
        this.currentYear = new Date().getFullYear();
    }
    
    connectedCallback(){
        this.innerHTML = `
        <style>
        footer {
            margin-bottom:0;
            border-radius: 5px 5px 0 0;
            background-color:#48A081;
        }
        footer .first {
            text-align:center;
            color:#F5F5F5;
            padding-top:1rem;
            padding-left:1.8rem;
            padding-right:1.8rem;
            margin-bottom:0;
        }
        footer .second {
            text-align:center;
            color:#F5F5F5;
            border-top:solid thin rgba(255, 255, 255, 0.5);
            padding-top:1rem;
            margin-left:2.8rem;
            margin-right:2.8rem;
        }
        footer .second a {
            text-decoration:none;
            text-decoration:underline;
            color:#F5F5F5;
        }
        footer .third {
            text-align:center;
            color:#F5F5F5;
            /* border-top:solid thin rgba(255, 255, 255, 0.5); */
            margin-left:1rem;
            margin-right:1rem;
            padding:0;
            padding-top:1rem;
        }
        footer .third a {
            /* border:solid black; */
            text-decoration:none;
            text-decoration: underline;
            color: #F5F5F5;
            
        }
        footer .copyright {
            /* border:solid yellow; */
            text-align:center;
            color:#F5F5F5;
            margin-bottom:0;
            /* padding-bottom:0.5rem; */
            padding-top:0.5rem;
            padding-bottom:0;
            margin-bottom:0;
            border-top:solid thin rgba(255, 255, 255, 0.5);
        }
        
            </style>
            <footer>
            <p class="first">Codingsteps.org is a platform for anyone to learn basic skills of coding for free.</p>
            <p class="second">For more information about Codingsteps.org, go to <a href="about">About</a> page.</p>
            <p class="third">Any questions?<br>Send an email to <a href="mailto: contact@codingsteps.org">contact@codingsteps.org</a></p>
            <p class="copyright">© Copyright 2021-`+this.currentYear+`, Codingsteps.org<br><br></p>
            </footer>`;
           
    }
    

}

customElements.define('footer-component', Footer);
