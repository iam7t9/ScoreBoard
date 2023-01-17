import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UpdateCall from './components/UpdateCall';
import ViewerCall from './components/ViewerCall';

function App(){
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<ViewerCall/>}/>
            <Route path='/Update' element={<UpdateCall/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;