import React from "react";

type Social = { name: string; url: string; icon: string };

type Interpreter = {
  name: string;
  image: string;
  socials: Social[];
};

type SongCardProps = {
  songName: string;
  interpreters: Interpreter[];
  albumImage: string;
  originalArtistName: string;
  composers: string;
  description: string;
  songLink?: string;
};

const SongCard: React.FC<SongCardProps> = ({
  songName,
  interpreters,
  albumImage,
  originalArtistName,
  composers,
  description,
  songLink,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 m-4 mb-8 transition-transform duration-300 hover:shadow-lg hover:scale-101 flex justify-items-center align-middle gap-16">
      {/* Interpreter Info (left) */}
      <div className="flex flex-col items-center text-center justify-center">
        {interpreters?.map(({ name: interpreterName, image: interpreterImage, socials: interpreterSocials }) => (
          <div key={interpreterName} className="mb-6 flex flex-col items-center">
            <img
              src={interpreterImage}
              alt={interpreterName}
              className="w-56 h-56 object-cover rounded-full mb-4 shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-4xl">
              <strong>{interpreterName}</strong>
            </p>
            <div className="flex flex-wrap justify-center space-x-4 mt-4 mb-2">
              {interpreterSocials?.map(({ name, url, icon }, index) => (
                <a
                    key={`${name}-${index}`} // combinas el nombre con el índice para hacerlo único
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                >
                    <img
                    src={icon}
                    alt={name}
                    className="w-60 sm:w-16 md:w-10 h-60 sm:h-16 md:h-10 hover:scale-110 transition"
                    />
                </a>
                ))}
            </div>
          </div>
        ))}
      </div>
      {/* Song Info Text (right) */}
      <div className="flex-1 flex flex-col justify-center-safe text-center">
        <div className="background-white dark:bg-gray-800/30 rounded-4xl shadow-lg px-4 py-10">
          <h2 className="text-6xl font-bold mb-6">{songName}</h2>
          <img
            src={albumImage}
            alt={`Portada del álbum de ${songName}`}
            className="w-48 h-48 object-cover rounded-md mx-auto my-8"
          />
          <p className="text-3xl my-4">{originalArtistName}</p>
          <p className="text-2xl italic text-gray-600 dark:text-gray-400 px-5">
            Escrita por: {composers}
          </p>
          <p className="text-2xl my-2">{description}</p>
          {songLink && (
            <a
              href={songLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Escuchar canción
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongCard;
