'use client';

import { useState } from 'react';

export default function Home() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const [formData, setFormData] = useState({
    skaterType: '',
    testLevel: '',
    jumps: '',
    spins: '',
    trainingFocus: [],
    availableTime: 60,
    intensity: 'Medium',
    timeOfDay: '',
    trainingMode: '',
    equipment: [],
    otherEquipment: '',
    readiness: [],
    affectedArea: '',
  });

  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);

  const toggleArrayItem = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleGeneratePlan = async () => {
    setLoading(true);
    setError('');
    setPlan(null);
    setChatMessages([]);

    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setPlan(data);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChatSend = async () => {
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatInput('');
    setChatMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setChatLoading(true);

    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formData,
          conversationHistory: [
            ...chatMessages,
            { role: 'user', content: userMessage },
          ],
        }),
      });

      const data = await response.json();

      if (data.message) {
        setChatMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.message },
        ]);
      }
    } catch (err) {
      console.error('Chat error:', err);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            ⛸️ Figure Skating Training Planner
          </h1>
          <p className="text-xl text-gray-600">{getGreeting()}! Let's plan your practice.</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 space-y-6">
          {/* Skater Profile */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">👤 Skater Profile</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Skater Type</label>
                <select
                  className="w-full border rounded-lg p-2"
                  value={formData.skaterType}
                  onChange={(e) => setFormData({ ...formData, skaterType: e.target.value })}
                >
                  <option value="">Select type</option>
                  <option value="Adult">Adult</option>
                  <option value="Youth">Youth</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Test Level Passed</label>
                <select
                  className="w-full border rounded-lg p-2"
                  value={formData.testLevel}
                  onChange={(e) => setFormData({ ...formData, testLevel: e.target.value })}
                >
                  <option value="">Select level</option>
                  <option value="Pre-Preliminary">Pre-Preliminary</option>
                  <option value="Preliminary">Preliminary</option>
                  <option value="Pre-Bronze">Pre-Bronze</option>
                  <option value="Bronze">Bronze</option>
                  <option value="Pre-Silver">Pre-Silver</option>
                  <option value="Silver">Silver</option>
                  <option value="Pre-Gold">Pre-Gold</option>
                  <option value="Gold">Gold</option>
                </select>
              </div>
            </div>
          </div>

          {/* Current Skills */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">🎯 Current Skills</h2>
            <p className="text-sm text-blue-600 mb-4">
              ℹ️ If between two options, choose the lower level.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Jumps</label>
                <select
                  className="w-full border rounded-lg p-2"
                  value={formData.jumps}
                  onChange={(e) => setFormData({ ...formData, jumps: e.target.value })}
                >
                  <option value="">Select level</option>
                  <option value="Waltz jump, Toe loop">Waltz jump, Toe loop</option>
                  <option value="Salchow">Salchow</option>
                  <option value="Loop">Loop</option>
                  <option value="Flip">Flip</option>
                  <option value="Lutz">Lutz</option>
                  <option value="Axel">Axel</option>
                  <option value="Double jumps">Double jumps</option>
                  <option value="Advanced (beyond options)">Advanced (beyond options)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Spins</label>
                <select
                  className="w-full border rounded-lg p-2"
                  value={formData.spins}
                  onChange={(e) => setFormData({ ...formData, spins: e.target.value })}
                >
                  <option value="">Select level</option>
                  <option value="Two-foot spin">Two-foot spin</option>
                  <option value="One-foot spin">One-foot spin</option>
                  <option value="Scratch spin">Scratch spin</option>
                  <option value="Sit spin">Sit spin</option>
                  <option value="Camel spin">Camel spin</option>
                  <option value="Combination spins">Combination spins</option>
                  <option value="Advanced (beyond options)">Advanced (beyond options)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Training Focus */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎓 Training Focus</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {['Jumps', 'Spins', 'Footwork', 'Edges', 'Flexibility', 'Strength', 'Balance', 'Musicality'].map((focus) => (
                <label key={focus} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.trainingFocus.includes(focus)}
                    onChange={() => toggleArrayItem('trainingFocus', focus)}
                    className="w-4 h-4"
                  />
                  <span>{focus}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Time & Effort */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">⏱️ Time & Effort</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Available Time: {formData.availableTime} minutes
                </label>
                <input
                  type="range"
                  min="15"
                  max="180"
                  step="15"
                  value={formData.availableTime}
                  onChange={(e) => setFormData({ ...formData, availableTime: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Intensity</label>
                  <select
                    className="w-full border rounded-lg p-2"
                    value={formData.intensity}
                    onChange={(e) => setFormData({ ...formData, intensity: e.target.value })}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Time of Day</label>
                  <select
                    className="w-full border rounded-lg p-2"
                    value={formData.timeOfDay}
                    onChange={(e) => setFormData({ ...formData, timeOfDay: e.target.value })}
                  >
                    <option value="">Select time</option>
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Training Mode */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🏃 Training Mode</h2>
            <div className="flex gap-3 flex-wrap">
              {['Off-ice', 'On-ice', 'Combined'].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setFormData({ ...formData, trainingMode: mode })}
                  className={`px-4 py-2 rounded-lg border-2 transition ${
                    formData.trainingMode === mode
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛠️ Equipment Available</h2>
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              {['Resistance bands', 'Yoga mat', 'Foam roller', 'Balance board', 'Jump harness', 'Spinner'].map((equip) => (
                <label key={equip} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.equipment.includes(equip)}
                    onChange={() => toggleArrayItem('equipment', equip)}
                    className="w-4 h-4"
                  />
                  <span>{equip}</span>
                </label>
              ))}
            </div>
            <input
              type="text"
              placeholder="Other equipment (optional)"
              className="w-full border rounded-lg p-2"
              value={formData.otherEquipment}
              onChange={(e) => setFormData({ ...formData, otherEquipment: e.target.value })}
            />
          </div>

          {/* Readiness Check */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">💪 Readiness Check</h2>
            <div className="space-y-3">
              {[
                'Feeling good',
                'Minor soreness',
                'Significant soreness/pain',
                'Not enough rest / poor sleep',
                'Not enough food / low energy',
                'High stress / high pressure',
                'Returning from injury',
              ].map((ready) => (
                <label key={ready} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.readiness.includes(ready)}
                    onChange={() => toggleArrayItem('readiness', ready)}
                    className="w-4 h-4"
                  />
                  <span>{ready}</span>
                </label>
              ))}
            </div>

            {(formData.readiness.includes('Significant soreness/pain') ||
              formData.readiness.includes('Returning from injury')) && (
              <div className="mt-4">
                <label className="block text-sm font-medium mb-2">Affected Area (optional)</label>
                <select
                  className="w-full border rounded-lg p-2"
                  value={formData.affectedArea}
                  onChange={(e) => setFormData({ ...formData, affectedArea: e.target.value })}
                >
                  <option value="">Select area</option>
                  <option value="Ankle">Ankle</option>
                  <option value="Knee">Knee</option>
                  <option value="Hip">Hip</option>
                  <option value="Back">Back</option>
                  <option value="Shoulder">Shoulder</option>
                  <option value="Wrist">Wrist</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            )}
          </div>

          {/* Generate Button with Loading Spinner */}
          <div className="relative">
            <button
              type="button"
              onClick={handleGeneratePlan}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Generating Your Plan...</span>
                </span>
              ) : (
                '✨ Generate Training Plan'
              )}
            </button>

            {/* Beautiful circular loading spinner overlay */}
            {loading && (
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <div className="relative w-12 h-12">
                  {/* Outer rotating circle */}
                  <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse"></div>
                  {/* Inner spinning circle */}
                  <div className="absolute inset-0 border-4 border-transparent border-t-white border-r-white rounded-full animate-spin"></div>
                  {/* Center dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
        </div>

        {/* Training Plan Display */}
        {plan && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">📋 Your Training Plan</h2>

            {plan.encouragement && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                <p className="text-green-800">{plan.encouragement}</p>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border p-3 text-left font-semibold">Time</th>
                    <th className="border p-3 text-left font-semibold">Exercise</th>
                    <th className="border p-3 text-left font-semibold">Description</th>
                    <th className="border p-3 text-left font-semibold">Equipment</th>
                    <th className="border p-3 text-left font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {plan.planRows?.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="border p-3 whitespace-nowrap">{row.time}</td>
                      <td className="border p-3 font-medium">{row.exercise}</td>
                      <td className="border p-3">{row.description}</td>
                      <td className="border p-3">{row.equipment}</td>
                      <td className="border p-3 text-sm text-gray-600">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chat Box */}
            <div className="mt-8 border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">💬 Ask Questions or Refine Your Plan</h3>

              <div className="space-y-3 mb-4 max-h-60 overflow-y-auto">
                {chatMessages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${
                      msg.role === 'user' ? 'bg-blue-100 ml-8' : 'bg-gray-100 mr-8'
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">
                      {msg.role === 'user' ? 'You' : 'Coach'}
                    </p>
                    <p>{msg.content}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ask a question or request modifications..."
                  className="flex-1 border rounded-lg p-3"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                  disabled={chatLoading}
                />
                <button
                  type="button"
                  onClick={handleChatSend}
                  disabled={chatLoading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium disabled:opacity-50"
                >
                  {chatLoading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
