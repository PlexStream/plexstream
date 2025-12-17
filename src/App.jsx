import { Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";

function App(){
return(
<routes>
    <Header />
    <Route path="/home" element={ Home } />
</routes>
);
}
export default App;