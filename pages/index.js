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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-4 shadow-md">
        <div className="text-center px-4 text-sm sm:text-base">
          <p className="font-semibold">Made By: MD Atiar Khan Atik</p>
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

      {/* Main */}
      <main className="flex-grow p-4 flex flex-col items-center">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 mt-6 space-y-4">
          <h1 className="text-xl font-bold text-gray-800 text-center">📥 Telegram Number Formatter</h1>
          
          <textarea
            className="w-full h-36 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            placeholder="এখানে নাম্বারগুলো পেস্ট করো..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={handleFormat}
            className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-sm"
          >
            ➕ Format with t.me/+
          </button>

          <textarea
            className="w-full h-36 p-3 border border-gray-300 rounded-xl bg-gray-50 text-sm"
            placeholder="Formatted লিংক এখানে দেখাবে..."
            value={output}
            readOnly
          />

          <button
            onClick={handleCopy}
            className="w-full py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition text-sm"
          >
            📋 Copy All
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-3 text-center text-xs sm:text-sm">
        Made with ❤️ by <a href="https://t.me/atiar59" className="underline hover:text-gray-300" target="_blank">MD Atiar Khan Atik</a>
      </footer>
    </div>
  );
}