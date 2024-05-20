/*
In typescript, we can specify the type of a variable
using a colon after the variable name.

 let name: string = "Alice";
 const DemoComponent : React.FC

This is arrow function syntax. It is a shorthand way of writing a function.
 const DemoComponent : React.FC = () => {};

This is a function declaration. It is a way of defining a function.
function DemoComponent() {
    return (<div>Hello, World!</div>);

}
*/
import React, {createElement, FC} from "react";
const me = () => ({ name: "samantha" });
interface Props {
    name: string;
}

/*
https://www.notion.so/Arrow-Function-Cheat-Sheet-ecb3012ad3e34c17acb679618f7a8c26?pvs=4
 */
const DemoComponent:FC<Props> = (props) => {
    const {name} = props;
    return (<div>Hello, World! {name}</div>);
};

console.log(me);
// function DemoComponent() {
//     return (<div>Hello, World!</div>);
//
// }

export default DemoComponent;