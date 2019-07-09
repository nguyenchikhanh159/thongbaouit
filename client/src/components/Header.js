import React, { Component } from "react";


class Header extends Component {
  render() {
    return (
      <div class="navbar-fixed">
      <nav class="teal1 lighten-1 z-depth-0">
        <div class="nav-wrapper container">
          <a class="brand-logo" href="/">
          <i class="material-icons">event_note</i>
            <span class="hide-on-small-only">UIT ES Creator</span>
          </a>
          <ul class="right">
            <li>
              <a 
                class="tooltipped"
                data-tooltip="Báo lỗi"
                data-delay="100"
                target="blank"
                href="https://github.com/nguyenchikhanh159?tab=projects"
                data-tooltip-id="48d1c445-f40f-7efa-781a-399fba34d271"
              >
                <i class="material-icons">info_outline</i>
              </a>
            </li>
          
            <li>
              <a
                onclick="window.open(this.href, true, 'height=500,width=500')"
                class="persistent tooltipped"
                data-tooltip="Chia sẻ"
                data-delay="100"
                href="https://fb.com/sharer.php?u=http://uesc.foxfizz.com/"
                data-tooltip-id="eecf425e-5331-f363-b31e-3fc03bdcc9ca"
              >
                <i class="material-icons">share</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    
       );
  }
}

export default Header;
