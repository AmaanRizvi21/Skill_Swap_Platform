import Header from '@/UI_/Header';
import UserCard from '@/UI_/UserCard';
import Pagination from '@/UI_/Pagination';

export default function HomePage() {
  const isLoggedIn = false; // Toggle this for demo

  const users = [
    {
      name: 'Marc Demo',
      offered: ['JavaScript', 'Node.js'],
      wanted: ['Photoshop'],
      rating: 3.5,
    },
    {
      name: 'Michell',
      offered: ['Python'],
      wanted: ['Graphic Designer'],
      rating: 2.5,
    },
    {
      name: 'Joe Wils',
      offered: ['Java', 'Spring Boot'],
      wanted: ['UI/UX'],
      rating: 4.0,
    },
  ];

  return (
    <>
      <Header />
      <main className="p-4 bg-white min-h-screen">
        {users.map((user, index) => (
          <UserCard key={index} {...user} isLoggedIn={isLoggedIn} />
        ))}
        <Pagination />
      </main>
    </>
  );
}