import { Fragment, memo } from "react";

const MainComponent = ({
  user = { name: "unknown", age: null }, // default value for `props.user`
}) => {
  return (
    <Fragment>
      <ChildComponent user={user} />
    </Fragment>
  );
};

function areEqual(prevProps, nextProps) {
  return (
    prevProps.user.age === nextProps.user.age &&
    prevProps.user.name === nextProps.user.name
  );
}

// React memo takes callback as a second argument
// using this, we can check if values are new, or the same
const ChildComponent = memo(({ user: { name, age } }) => {
  return (
    <div>
      user name: {name}, user age: {age}
    </div>
  );
}, areEqual);
