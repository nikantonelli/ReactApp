function launchReactApp(){let e=document.querySelector('[class~="rally-app"]');setInterval(function(){tick(e)},1e3)}function tick(e){const t=React.createElement("div",null,React.createElement("h1",null,"Hello, world!"),React.createElement("h2",null,"It is ",(new Date).toLocaleTimeString(),"."));ReactDOM.render(t,e)}