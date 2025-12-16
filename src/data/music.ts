
export interface Song {
  id: number;
  title: string;
  artist: string;
  cover: string;
  url?: string; // Optional direct URL override
}

// Curated list of high-quality, royalty-free Lofi tracks for demonstration
export const MUSIC_PLAYLIST: Song[] = [
  {
    id: 1001,
    title: "Lofi Study",
    artist: "FASSounds",
    cover: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=300&auto=format&fit=crop",
    url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3"
  },
  {
    id: 1002,
    title: "Good Night",
    artist: "FASSounds",
    cover: "https://images.unsplash.com/photo-1532099554103-28f08d8dae38?q=80&w=300&auto=format&fit=crop",
    url: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d63f03b381.mp3"
  },
  {
    id: 1003,
    title: "Empty Mind",
    artist: "Lofi_Hour",
    cover: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=300&auto=format&fit=crop",
    url: "https://cdn.pixabay.com/download/audio/2022/02/07/audio_658d55e39b.mp3"
  },
  {
    id: 1004,
    title: "Rain and Nostalgia",
    artist: "Ivan_Luzan",
    cover: "https://images.unsplash.com/photo-1515169067750-d51a73b50981?q=80&w=300&auto=format&fit=crop",
    url: "https://cdn.pixabay.com/download/audio/2021/09/06/audio_e797d1950d.mp3"
  },
  {
    id: 1005,
    title: "Just Relax",
    artist: "Lesfm",
    cover: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=300&auto=format&fit=crop",
    url: "https://cdn.pixabay.com/download/audio/2020/05/01/audio_1615d8525b.mp3"
  }
];
