import React from 'react';
import './Ans.css'

const Ans = () => {
    return (
        <div className='container' >
            <div>
                <h2>Ques-1:How to react works ? </h2>
                <p>Ans: 1.parent component pass on name and onChange handler to its child , which child can access through its props
                    <br />
                    2.In child select field contains an handler, as you select different name, this.handlechange is called, which call the changeName function of parent by calling this.props.onChange. <br /> 3.changeName method in parent set the state to different name which was selected in child select field. <br /> 4.then change state is again passed to child automatically,as prop to child </p>
            </div>
            <div>
                <h2>Ques-2: Different between props vs state .</h2>
                <p>Ans: </p>
                <table>
                    <tr>
                        <th>props</th>
                        <th colspan="2">state</th>
                    </tr>
                    <tr>
                        <td>The Data is passed from one component to another.</td>
                        <td>The Data is passed within the component only.</td>

                    </tr>
                    <tr>
                        <td>It is Immutable (cannot be modified).</td>
                        <td>It is Mutable (can be modified).</td>

                    </tr>
                    <tr>
                        <td>Props can be used with state and functional components.</td>
                        <td>State can be used only with the state components/class component (Before 16.0).</td>

                    </tr>
                    <tr>
                        <td>Props are read-only.</td>
                        <td>State is both read and write.</td>

                    </tr>
                </table>
            </div>
            <div>
                <h2>Ques-3: how useState works ? </h2>
                <p>ANs: first of All useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component. <br />Whereas the state in a class is always an object, with Hooks, the state can be any type.Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine. <br /> So when should you use the useState Hook?It’s especially useful for local component state, but larger projects might require additional state management solutions. </p>
            </div>
        </div>
    );
};

export default Ans;