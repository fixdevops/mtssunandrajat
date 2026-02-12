import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProfilPage from '@/components/ProfilPage';
import AchievementSection from '@/components/AchievementSection';
import ExtracurricularSection from '@/components/ExtracurricularSection';
import TeacherSection from '@/components/TeacherSection';
import AlumniSection from '@/components/AlumniSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProfilPage />
      <ExtracurricularSection />
      <AchievementSection />
      <TeacherSection />
      <AlumniSection />
      <Footer />
    </main>
  );
}
