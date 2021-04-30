import React from "react";

function Header() {
  return (
    <div>
        <header class="container-fluid flex-right myheader">
        <h1 class="col-5 flex-right ml-1">James Jordan's Portfolio</h1>
        <nav class='col-6 flex-right'> 
            <p><a class="m-3" href="/portfolio">About James</a></p>
            <p><a class="m-3" href="/projects">Projects</a></p>
        </nav>
    </header>

    </div>
  );
}

export default Header;
