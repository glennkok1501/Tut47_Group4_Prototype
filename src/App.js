import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter, Switch  } from 'react-router-dom'
import Home from './pages/Home';
import Toolbar from './components/ToolBar/Toolbar';
import BottomNav from './components/BottomNav/BottomNav';
import ConnectionsPage from './pages/ConnectionsPage/ConnectionsPage';
import GroupsPage from './pages/Groups/GroupsPage';
import ChatsList from './pages/ChatsList/ChatsList';
import ChatThread from './pages/ChatsList/ChatThread';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <>
      <Toolbar />
        <div className='container'>
          <BrowserRouter>
          <div style={{ marginTop: '80px', paddingBottom: '125px' }}>
            <Switch>
              <Route exact path="/Tut47_Group4_Prototype" component={Home} />
              <Route path="/Tut47_Group4_Prototype/profile" component={ProfilePage} />
              <Route path="/Tut47_Group4_Prototype/connections" component={ConnectionsPage} />
              <Route path="/Tut47_Group4_Prototype/groups" component={GroupsPage} />
              <Route exact path="/chat/:id" component={ChatThread} />
              <Route path="/Tut47_Group4_Prototype/chat" component={ChatsList} />
              
            </Switch>
          </div>
          <BottomNav />
        </BrowserRouter>

    </div>
    </>
    
    
  );
}

export default App;
