import Profile from "@/components/home/Profile";
import ShowCase from "@/components/home/ShowCase";

export default function Home() {
  return (
    <main>
      <div className="bg-white">
        <Profile />
        <ShowCase />
      </div>
    </main>
  );
}
