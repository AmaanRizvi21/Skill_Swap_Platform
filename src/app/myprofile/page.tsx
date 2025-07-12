import Profile from '@/UI_/Profile';
import Header from '@/UI_/Header';

export default function MyProfilePage() {

  const dummyData = {
    name: 'Jasim Khan',
    email: 'jasim@example.com',
    location: 'Lucknow',
    skillsWanted: ['React Native', 'Figma', 'Photoshop'],
    availability: 'Weekends',
    rating: 4.5,
    profilePicture: '/profile-pic.jpg', // make sure to add this in /public folder
    isPublic: true,
  };

  return (
    <>
    <Header />

    <main className="min-h-screen bg-blue-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">My Profile</h1>
      <Profile {...dummyData} />
    </main>
    </>
  );
}
