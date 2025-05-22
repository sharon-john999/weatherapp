import React from "react";

class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const { data: toRotate } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    let newText = fullTxt.substring(0, this.state.text.length + 1);

    this.setState({ text: newText });

    if (newText !== fullTxt) {
      const delta = 200 - Math.random() * 100;
      setTimeout(this.tick, delta);
    }
    // No deleting phase anymore
  }

  render() {
    return <span>{this.state.text}</span>;
  }
}

export default TypeWriter;
