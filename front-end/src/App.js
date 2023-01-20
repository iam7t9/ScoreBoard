import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UpdateCall from './components/UpdateCall';
import ViewerCall from './components/ViewerCall';

function App(){
    return(
    <div className='bg-gray-500 w-full h-screen flex h-screen'>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ViewerCall/>}/>
            <Route path='/Update' element={<UpdateCall/>}/>
        </Routes>
    </BrowserRouter>
    </div>
    )
}

export default App;