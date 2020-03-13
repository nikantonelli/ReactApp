function launchReactApp() {
    let canvas = document.querySelector('[class~="rally-app"]');
    setInterval(function() { tick(canvas);}, 1000);
}

function tick(canvas) {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, canvas);
}

