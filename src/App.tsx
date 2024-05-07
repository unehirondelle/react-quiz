import './App.css';
import {Counter} from './components/counter';
import {HoverHandler} from "./components/hoverHandler";
import {Toggle} from "./components/toggle";
import {DebouncedInput} from "./components/debouncedInput";
import {PhoneInput} from "./components/phoneInput";
import {FocusedInput} from "./components/focusedInput";

function App() {
    return (
        <div className="App">
            <header className="App-header flex flex-col gap-y-3">
                <Counter/>
                <HoverHandler/>
                <Toggle/>
                <DebouncedInput/>
                <PhoneInput/>
                <FocusedInput/>
            </header>
        </div>
    );
}

export default App;
