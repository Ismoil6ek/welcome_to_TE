// ФАЙЛ ДЛЯ РЕДАКТИРОВАНИЯ И ТЕСТИРОВАНИЯ КОМПОНЕНТОВ ИЗ ТЕСТОВОГО ЗАДАНИЯ

import { Component, memo } from "react";
import { IUser, IProps } from "./interface";

function areEqual(prevUser: IProps, nextUser: IProps) {
  return (
    prevUser.user.age === nextUser.user.age &&
    prevUser.user.name === nextUser.user.name
  );
}
// React memo checks for changes between
// previous and current values for a given
// prop passed to the component
export const FirstComponent = memo(({ name, age }: IUser) => {
  console.log("FirstComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

// Here state is passed directly, so our component will
// render even it will updated with the same value
// because they will be different objects

// React memo takes callback as a second argument
// where we can compare for specific value in order
// to prevent or force render in different situations
export const SecondComponent = memo(({ user: { name, age } }: IProps) => {
  console.log("SecondComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
}, areEqual);

// Class components have build in shouldComponentUpdate function
// Here as in second component, we compare their values, for rendering
// They will render, only if they get different props
export class ThirdComponent extends Component<IUser> {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.name === nextProps.name) {
      return false;
    }
    return true;
  }

  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// It is same as in third component, but we also check for their values
export class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.user.name === nextProps.user.name) {
      return false;
    }
    return true;
  }

  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
