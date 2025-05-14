import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleFormat = () => {
    const lines = input
      .split(/\s+/)
      .map(line => line.trim())
      .filter(line => line !== '');

    const formatted = lines.map(num => `t.me/+${num}`).join('\n');
    setOutput(formatted);
  };

  const handleCopy = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      alert('✅ কপি হয়ে গেছে!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-black text-white py-4 shadow-md">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="mr-4 font-medium">Made By: MD Atiar Khan Atik</span>
          <a 
            href="https://t.me/atiar59" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-300"
          >
            https://t.me/atiar59
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Telegram Number Formatter</h1>
        
        <textarea
          className="w-full max-w-xl h-40 p-4 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="এখানে নাম্বারগুলো পেস্ট করো, যেমনঃ 2694938590..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleFormat}
          className="mb-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ➕ Format with t.me/+
        </button>

        <textarea
          className="w-full max-w-xl h-60 p-4 border rounded mb-4 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
          placeholder="Formatted output will appear here..."
          value={output}
          readOnly
        />

        <button
          onClick={handleCopy}
          className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          📋 Copy All
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white py-4 shadow-inner">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="mr-4 font-medium">Made By: MD Atiar Khan Atik</span>
          <a 
            href="https://t.me/atiar59" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="underline hover:text-gray-300"
          >
            https://t.me/atiar59
          </a>
        </div>
      </footer>
    </div>
  );
}