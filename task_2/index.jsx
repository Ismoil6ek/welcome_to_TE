import { Fragment, memo } from "react";

const MainComponent = () => {
  // function makeLog causing child component rerender
  // because it is different function at every state change

  // so it is better to memorize function, it will be recreated
  // if something changes in dependency array
  const makeLog = useMemo(() => () => console.log("hi from MainComponent"), []); // function to make logs from MainComponent

  return (
    <Fragment>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => (
  <button onClick={makeLog}>say Hi from ChildComponent</button>
));
