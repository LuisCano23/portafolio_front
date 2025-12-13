import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa Layout (asegúrate de que existe)
import Layout from './components/layout/layout/layout';

// Componente de carga
const Loading = () => (
  <div className="text-center py-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  </div>
);

// Importaciones directas (más fáciles de debuggear)
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Experience from './pages/Experience/Experience';
import ITExperience from './pages/Experience/ITExperience';
import OtherExperience from './pages/Experience/OtherExperience';
import Trajectory from './pages/Trajectory/Trajectory';
import References from './pages/References/References';
import Comments from './pages/Comments/Comments';
//import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="inicio" element={<Home />} />
            <Route path="habilidades" element={<Skills />} />
            <Route path="experiencia" element={<Experience />} />
            <Route path="experiencia/informatica" element={<ITExperience />} />
            <Route path="experiencia/otras-areas" element={<OtherExperience />} />
            <Route path="trayectoria" element={<Trajectory />} />
            <Route path="referencias" element={<References />} />
            <Route path="comentarios" element={<Comments />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;