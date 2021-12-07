import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import CountUser from './Components/CountUser';
import ComponentWithProps from './Components/ComponentWithProps';
import ComponentWithState from './Components/ComponentWithState';
import ComponentWithArrayOfData from './Components/ComponentWithArrayOfData';
import ComponentConditionalRender from './Components/Conditional/ComponentConditionalRender';
import ComponentConditionalLogicalRender from './Components/Conditional/ComponentConditionalLogicalRender';
import ComponentConditionalTernaryRender from './Components/Conditional/ComponentConditionalTernaryRender';
import ClassComponentWithState from './Components/ClassComp/ClassComponentWithState';
import ClassComponentClock from './Components/ClassComp/ClassComponentClock';
import ComponentWithControlledInput from './Components/ControlInput/ComponentWithControlledInput';

function App() {

    const someValue = 10;

    const someDataObject = {
        key1: `value1`,
        key2: 2,
        key3: [`array`, `of`, `strings`]
    };

    const someDataArray = [0, 1, 2, 3, 4];

    const someFunction = () => (`a string from a function`);

    return (
        <>
            <First />
            <Second />
            <Third />

            <CountUser countProp="10" />

            <ComponentWithProps
                contentText="This is content text"
                numericProp={"100"}
                expressionProp={100 / 5}
                valueProp={someValue}
                objectProp={someDataObject}
                arrayProp={someDataArray}
                functionProp={someFunction}
                //unsuppliedProp="Hello World from parent"
            />

            <ComponentWithState />

            <h1>Component With Array of data</h1>
            <ComponentWithArrayOfData />

            <h1>Conditional Render</h1>
            <ComponentConditionalRender renderMe={true} dontRenderMe={false} />
            <ComponentConditionalRender renderMe={false} dontRenderMe={true} />
            <ComponentConditionalRender renderMe={true} />
            <ComponentConditionalRender renderMe={false} dontRenderMe={false} />

            <h1>Logical Render</h1>
            <ComponentConditionalLogicalRender renderMe={true} dontRenderMe={false} />
            <ComponentConditionalLogicalRender renderMe={false} dontRenderMe={true} />
            <ComponentConditionalLogicalRender renderMe={true} />
            <ComponentConditionalLogicalRender renderMe={false} dontRenderMe={false} />

            <h1>Ternary Render</h1>
            <ComponentConditionalTernaryRender renderMe={true} dontRenderMe={false} />
            <ComponentConditionalTernaryRender renderMe={false} dontRenderMe={true} />
            <ComponentConditionalTernaryRender renderMe={true} />
            <ComponentConditionalTernaryRender renderMe={false} dontRenderMe={false} />

            <h1>Class Componment</h1>
            <ClassComponentWithState />

            <h1>Class Componment - Clock (Life Cycle)</h1>
            <ClassComponentClock />

            <h1>Controlled Inputs</h1>
            <ComponentWithControlledInput />
        </>
      );
}

export default App;
