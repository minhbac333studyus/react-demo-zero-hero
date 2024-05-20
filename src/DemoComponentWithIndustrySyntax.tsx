type DemoChildProps = {
    name: string;
};

/*
 In Industry application, they use function declaration syntax,
 and passing props as an argument to the function.
 We have to define props type before passing -  and props is also a javascript object.
 I also notice that they use nested props
 */
function DemoChildComponentWithIndustrySyntax(   {name}: DemoParentProps) {
    return (
        <div>
        <div>Hello, World Industry syntax! {name}
        </div>

        </div>
    );

}
type DemoParentProps =  DemoChildProps;
/*
Through this example, we can see that they can nest props so Parent Component can access Child props
on line 21 we pass props from child to Parent props
 */
function DemoParentComponentWithNestedProps(props : DemoParentProps) {
    const {name} = props;
    /*
      we also see they use spread operator ... to easy pass all props to child component
      https://www.notion.so/Spread-Operation-13696432a8164b918fd4e4294cdbf67d?pvs=4
    */
    return (
        <div>
            <p>Hello, World Industry syntax with nested props! {name} </p>
            <DemoChildComponentWithIndustrySyntax {...props} />
        </div>);
}
export default DemoParentComponentWithNestedProps;