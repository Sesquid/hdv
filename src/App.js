import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ListStudent from './ListStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/list-students' element={<ListStudent ></ListStudent>} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
