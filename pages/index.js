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
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">📱 Telegram Number Formatter</h1>
      
      <textarea
        className="w-full max-w-xl h-40 p-4 border rounded mb-4"
        placeholder="এখানে নাম্বারগুলো পেস্ট করো যেমনঃ 2694938590"
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
        className="w-full max-w-xl h-60 p-4 border rounded mb-4 bg-white"
        placeholder="Formatted output"
        value={output}
        readOnly
      />

      <button
        onClick={handleCopy}
        className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        📋 Copy All
      </button>
    </div>
  );
}