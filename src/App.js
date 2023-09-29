import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './layout/defaultLayout';
import { publicRoute } from './router';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoute.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;

            if (route?.layout)
              Layout = route.layout;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
