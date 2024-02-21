import './App.css'
import {MainLayout} from "./components/common/MainLayout.tsx";
import {Battle} from "./views/Battle/Battle.tsx";

function App() {
    return (
        <MainLayout>
            <Battle />
        </MainLayout>
    )
}

export default App
