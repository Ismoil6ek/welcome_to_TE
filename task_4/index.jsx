import { Component, createRef } from "react";

class MainComponent extends Component {
  myRef = createRef(); // create simple ref

  toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

  render() {
    return (
      <>
        <button onClick={this.toggleChildVisibility}>
          toggle child component
        </button>
        <ChildComponent ref={this.myRef} />{" "}
        {/* set ref to controll child component */}
      </>
    );
  }
}

// useImperativeHandle is a React Hook that can customize the handle exposed as a ref
// in our case it passes setState to parentRef
const ChildComponent = forwardRef((_, { myRef }) => {
  const [isActive, setIsActive] = useState(true);

  useImperativeHandle(myRef, () => setIsActive((prev) => !prev)), [];

  return isActive ? <div>child component</div> : null;
});
