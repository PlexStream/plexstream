import { BrowserRouter as Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";

function App(){
return(
<Route>
    <Header />
    <Route path="/home" element={ Home } />
</Route>
);
}

export default App;