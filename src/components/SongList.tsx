// src/components/SongList.tsx
import { useEffect, useState } from "react";
import SongCard from "./songCard.astro"; // Importas el componente Astro
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
    fetch("https://assets.totalsingers.com/songs.json")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  return (
    <>
      {songs.map((song, idx) => (
        <SongCard key={idx} {...song} />
      ))}
    </>
  );
};

export default SongList;
