var launchReactApp = function() {
    let canvas = document.querySelector('[class~="rally-app"]');
    ReactDOM.render(
        <App />,
        canvas
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
