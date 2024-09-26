'use client';

import React, { FC, useState } from 'react';

interface Game {
  id: number;
  title: string;
  description: string;
}

const GamePost: FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const addGame = () => {
    if (title && description) {
      const newGame: Game = {
        id: games.length + 1,
        title,
        description,
      };
      setGames([...games, newGame]);
      resetForm();
    }
  };

  const deleteGame = (id: number) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Game Post Management</h1>
      </div>

      {/* Add Game Form */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Game</h2>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700 font-semibold">Game Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter game title"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700 font-semibold">Game Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
            placeholder="Enter game description"
          />
        </div>
        <button
          onClick={addGame}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add Game
        </button>
      </div>

      {/* Game List */}
      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Game Title</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {games.map((game) => (
              <tr key={game.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-4 px-6">{game.title}</td>
                <td className="py-4 px-6">{game.description}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => deleteGame(game.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GamePost;
