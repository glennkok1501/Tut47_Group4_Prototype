import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { BrowserRouter, Switch } from 'react-router-dom'
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
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/connections" component={ConnectionsPage} />
              <Route path="/groups" component={GroupsPage} />
              <Route exact path="/chat/:id" component={ChatThread} />
              <Route path="/chat" component={ChatsList} />
            </Switch>
          </div>
          <BottomNav />
        </BrowserRouter>

    </div>
    </>
    
    
  );
}

export default App;
