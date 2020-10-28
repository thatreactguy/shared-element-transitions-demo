import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeSection from './components/HomeSection';
import CharacterInfo from './components/CharacterInfo';
import data from './data.json';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimateSharedLayout>
      <Router>
        <Switch>
          <Route path='/info/:id'>
            <AnimatePresence>
              <CharacterInfo data={data} />
            </AnimatePresence>
          </Route>
          <Route path='/'>
            <HomeSection data={data} />
          </Route>
        </Switch>
      </Router>
    </AnimateSharedLayout>
  );
}

export default App;
