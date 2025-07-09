// src/components/SongList.tsx
import { useEffect, useState } from "react";
import SongCard from "./SongCard"; // Importas el componente Astro
import type { FunctionalComponent } from "preact";

type Social = { name: string; url: string; icon: string };
type Interpreter = {
  name: string;
  image: string;
  socials: Social[];
};

type Song = {
  songName: string;
  interpreters: Interpreter[];
  albumImage: string;
  originalArtistName: string;
  composers: string;
  description: string;
  songLink?: string;
};

const SongList: FunctionalComponent = () => {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch("https://assets.totalsingers.com/data/2025/09/songs.json")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return (
    <>
      {songs.map((song: any, idx: any) => (
        <SongCard key={idx} {...song} />
      ))}
    </>
  );
};

export default SongList;
