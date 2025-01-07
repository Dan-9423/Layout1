import { ThemeProvider } from './components/ThemeProvider';
import Sidebar from './components/Sidebar';
import TopBanner from './components/TopBanner';
import WelcomeBanner from './components/WelcomeBanner';
import Profile from './pages/Profile';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-[#111111]">
        <div className="max-w-[1600px] mx-auto flex">
          <Sidebar />
          <main className="flex-1 p-8">
            <TopBanner />
            {currentPage === 'dashboard' ? (
              <WelcomeBanner />
            ) : (
              <Profile />
            )}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;