import LatestEpisodeCard from "./Latest-EpisodesCard.jsx";
import "./Latest-EpisodesContainer.css";

const EPISODES = [
  {
    id: 1,
    img: "/public/latest1.jpg",
    tag: "Gear",
    episode: "3",
    title: "Should you get outboard audio gear?",
    description:
      "Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.",
  },
  {
    id: 2,
    img: "/public/latest2.jpg",
    tag: "Tips & Tricks",
    episode: "2",
    title: "Mic tricks to take you to the next level",
    description:
      "Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.",
  },
  {
    id: 3,
    img: "/public/latest3.jpg",
    tag: "Gear",
    episode: "1",
    title: "The best microphone under $200",
    description:
      "With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.",
  },
];

export default function LatestEpisodesContainer() {
  return (
    <section className="container">
      {EPISODES.map((item) => (
        <LatestEpisodeCard key={item.id} cardInfo={item} />
      ))}
    </section>
  );
}