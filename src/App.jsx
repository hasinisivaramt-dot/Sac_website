import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import ClubsPage from './pages/ClubsPage';
import EventsPage from './pages/EventsPage';
import CompetitionsPage from './pages/CompetitionsPage';
import AchievementsPage from './pages/AchievementsPage';
import GalleryPage from './pages/GalleryPage';
import NoticesPage from './pages/NoticesPage';
import StudentCouncilPage from './pages/StudentCouncilPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { useCampus } from './hooks/useCampus';

function App() {
  const { campus, changeCampus } = useCampus();

  return (
    <MainLayout campus={campus} onCampusChange={changeCampus}>
      <Routes>
        <Route path="/" element={<LandingPage campus={campus} />} />
        <Route path="/clubs" element={<ClubsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/competitions" element={<CompetitionsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/student-council" element={<StudentCouncilPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
