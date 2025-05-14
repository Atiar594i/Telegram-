import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleFormat = () => {
    const formatted = input
      .split(/\s+/)
      .filter(line => line.trim() !== '')
      .map(num => `t.me/+${num}`)
      .join('\n');
    setOutput(formatted);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    alert('✅ কপি হয়ে গেছে!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-700 text-white py-4 shadow-md text-center">
        <p className="text-sm font-semibold">Made By: MD Atiar Khan Atik</p>
        <a
          href="https://t.me/atiar59"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs underline hover:text-gray-300"
        >
          https://t.me/atiar59
        </a>
      </header>

      {/* Main Body */}
      <main className="flex-grow p-4 flex flex-col items-center">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 space-y-6">

          {/* Heading */}
          <h1 className="text-2xl font-bold text-center text-gray-700">📥 Telegram Number Formatter</h1>

          {/* Input Box */}
          <textarea
            rows={8}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            placeholder="এখানে নাম্বারগুলো পেস্ট করো..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          {/* Format Button */}
          <button
            onClick={handleFormat}
            className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-sm"
          >
            ➕ Format with t.me/+
          </button>

          {/* Output Box */}
          <div>
            <label className="block mb-1 text-gray-600 font-medium">📤 ফরমেট লিংক এখানে দেখাবে:</label>
            <textarea
              rows={8}
              className="w-full p-4 border border-gray-300 bg-gray-50 rounded-xl text-sm"
              placeholder="Formatted নাম্বার এখানে দেখাবে..."
              value={output}
              readOnly
            />
          </div>

          {/* Additional Info Box */}
          <div>
            <label className="block mb-1 text-gray-600 font-medium">ℹ️ Additional Information:</label>
            <textarea
              rows={4}
              className="w-full p-4 border border-gray-300 bg-gray-50 rounded-xl text-sm"
              placeholder="তোমার অতিরিক্ত তথ্য এখানে লিখতে পারো..."
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
            />
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition text-sm"
          >
            📋 Copy All
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-3 text-xs">
        Made with ❤️ by <a href="https://t.me/atiar59" className="underline hover:text-gray-300" target="_blank">MD Atiar Khan Atik</a>
      </footer>
    </div>
  );
}
