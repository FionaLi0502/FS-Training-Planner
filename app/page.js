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
    availableTime: 60, // 15–180
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
      if (data.error) setError(data.error);
      else setPlan(data);
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

  // ---- Pastel UI helpers ----
  const cardBase =
    'bg-white/85 backdrop-blur-xl rounded-2xl shadow-[0_10px_35px_rgba(15,23,42,0.08)] border border-white/60';
  const labelBase = 'block text-sm font-medium text-slate-700 mb-2';
  const inputBase =
    'w-full rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-200 transition';
  const selectBase = `${inputBase} pr-10`;
  const chipBase =
    'inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition select-none';
  const chipOff = 'bg-white/70 border-slate-200 text-slate-700 hover:bg-slate-50';

  const sectionTitle = (emoji, title, badgeClass) => (
    <div className="flex items-center gap-3 mb-4">
      <span
        className={`inline-flex items-center justify-center w-10 h-10 rounded-2xl ${badgeClass}`}
      >
        {emoji}
      </span>
      <h2 className="text-xl md:text-2xl font-semibold text-slate-800">{title}</h2>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-sky-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-6 md:px-8 md:py-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/60 px-4 py-2 shadow-sm">
            <span className="text-lg">⛸️</span>
            <span className="text-sm text-slate-600">
              {getGreeting()}! Let’s plan your practice.
            </span>
          </div>

          <h1 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
            Figure Skating Training Planner
          </h1>
          <p className="mt-2 text-slate-600">Simple plan • Clean layout • Quick chat help</p>
        </div>

        {/* Main Form */}
        <div className={`${cardBase} p-5 md:p-8 mb-6 md:mb-8 space-y-8`}>
          {/* Skater Profile */}
          <div>
            {sectionTitle('👤', 'Skater Profile', 'bg-pink-100 text-pink-700')}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label className={labelBase}>Skater Type</label>
                <select
                  className={selectBase}
                  value={formData.skaterType}
                  onChange={(e) =>
                    setFormData({ ...formData, skaterType: e.target.value })
                  }
                >
                  <option value="">Select type</option>
                  <option value="Adult">Adult</option>
                  <option value="Youth">Youth</option>
                </select>
              </div>

              <div>
                <label className={labelBase}>Test Level Passed</label>
                <select
                  className={selectBase}
                  value={formData.testLevel}
                  onChange={(e) =>
                    setFormData({ ...formData, testLevel: e.target.value })
                  }
                >
                  <option value="">Select level</option>
                  <option value="No test passed">No test passed</option>
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
            {sectionTitle('🎯', 'Current Skills', 'bg-emerald-100 text-emerald-700')}
            <div className="flex items-start gap-2 rounded-xl bg-emerald-50/70 border border-emerald-100 px-4 py-3 mb-4">
              <span className="text-emerald-700">ℹ️</span>
              <p className="text-sm text-emerald-800">
                If your skill falls between two options, choose the lower level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              <div>
                <label className={labelBase}>Jumps</label>
                <select
                  className={selectBase}
                  value={formData.jumps}
                  onChange={(e) => setFormData({ ...formData, jumps: e.target.value })}
                >
                  <option value="">Select level</option>
                  <option value="Haven't started jumps">Haven't started jumps</option>
                  <option value="Waltz jump">Waltz jump</option>
                  <option value="Toe loop / Salchow">Toe loop / Salchow</option>
                  <option value="Loop / Flip">Loop / Flip</option>
                  <option value="Lutz">Lutz</option>
                  <option value="Axel in progress">Axel in progress</option>
                  <option value="Axel landed">Axel landed</option>
                  <option value="Working on doubles">Working on doubles</option>
                  <option value="Advanced (beyond options)">Advanced (beyond options)</option>
                </select>
              </div>

              <div>
                <label className={labelBase}>Spins</label>
                <select
                  className={selectBase}
                  value={formData.spins}
                  onChange={(e) => setFormData({ ...formData, spins: e.target.value })}
                >
                  <option value="">Select level</option>
                  <option value="Haven't started spins">Haven't started spins</option>
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
            {sectionTitle('🎓', 'Training Focus', 'bg-yellow-100 text-yellow-700')}
            <div className="flex flex-wrap gap-2">
              {[
                'Jumps',
                'Spins',
                'Footwork',
                'Edges',
                'Flexibility',
                'Strength',
                'Balance',
                'Musicality',
              ].map((focus) => {
                const on = formData.trainingFocus.includes(focus);
                return (
                  <button
                    key={focus}
                    type="button"
                    onClick={() => toggleArrayItem('trainingFocus', focus)}
                    className={`${chipBase} ${
                      on
                        ? 'bg-sky-100 border-sky-200 text-sky-800 shadow-sm'
                        : chipOff
                    }`}
                    aria-pressed={on}
                  >
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${
                        on ? 'bg-sky-500' : 'bg-slate-300'
                      }`}
                    />
                    {focus}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time & Effort */}
          <div>
            {sectionTitle('⏱️', 'Time & Effort', 'bg-sky-100 text-sky-700')}
            <div className="space-y-5">
              <div className="rounded-2xl bg-white/60 border border-slate-200 p-4 md:p-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-slate-700">Available Time</label>
                  <span className="text-sm font-semibold text-slate-900">
                    {formData.availableTime} min
                  </span>
                </div>

                <input
                  type="range"
                  min="15"
                  max="180"
                  step="15"
                  value={formData.availableTime}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      availableTime: parseInt(e.target.value, 10),
                    })
                  }
                  className="w-full accent-sky-500"
                />

                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>15</span>
                  <span>60</span>
                  <span>120</span>
                  <span>180</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <div>
                  <label className={labelBase}>Intensity</label>
                  <select
                    className={selectBase}
                    value={formData.intensity}
                    onChange={(e) => setFormData({ ...formData, intensity: e.target.value })}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div>
                  <label className={labelBase}>Time of Day</label>
                  <select
                    className={selectBase}
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

          {/* Training Location */}
          <div>
            {sectionTitle('🏃', 'Training Location', 'bg-purple-100 text-purple-700')}
            <div className="flex flex-wrap gap-2">
              {['Off-ice', 'On-ice', 'Combined'].map((mode) => {
                const on = formData.trainingMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setFormData({ ...formData, trainingMode: mode })}
                    className={`${chipBase} ${
                      on
                        ? 'bg-purple-100 border-purple-200 text-purple-800 shadow-sm'
                        : chipOff
                    }`}
                    aria-pressed={on}
                  >
                    {mode}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Equipment */}
          <div>
            {sectionTitle('🛠️', 'Equipment', 'bg-orange-100 text-orange-700')}
            <div className="flex flex-wrap gap-2 mb-3">
              {[
                'Resistance bands',
                'Yoga mat',
                'Foam roller',
                'Balance board',
                'Spinner',
                'Light weights',
              ].map((equip) => {
                const on = formData.equipment.includes(equip);
                return (
                  <button
                    key={equip}
                    type="button"
                    onClick={() => toggleArrayItem('equipment', equip)}
                    className={`${chipBase} ${
                      on
                        ? 'bg-orange-100 border-orange-200 text-orange-800 shadow-sm'
                        : chipOff
                    }`}
                    aria-pressed={on}
                  >
                    {equip}
                  </button>
                );
              })}
            </div>

            <input
              type="text"
              placeholder="Other equipment (optional)"
              className={inputBase}
              value={formData.otherEquipment}
              onChange={(e) => setFormData({ ...formData, otherEquipment: e.target.value })}
            />
          </div>

          {/* Readiness */}
          <div>
            {sectionTitle('💪', 'Readiness Check', 'bg-rose-100 text-rose-700')}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                'Feeling good',
                'Minor soreness',
                'Significant soreness/pain',
                'Not enough rest / poor sleep',
                'Not enough food / low energy',
                'High stress / high pressure',
                'Returning from injury',
              ].map((ready) => {
                const on = formData.readiness.includes(ready);
                return (
                  <button
                    key={ready}
                    type="button"
                    onClick={() => toggleArrayItem('readiness', ready)}
                    className={`${chipBase} ${
                      on
                        ? 'bg-rose-100 border-rose-200 text-rose-800 shadow-sm'
                        : chipOff
                    } justify-start w-full`}
                    aria-pressed={on}
                  >
                    <span
                      className={`inline-block w-2.5 h-2.5 rounded-full ${
                        on ? 'bg-rose-500' : 'bg-slate-300'
                      }`}
                    />
                    <span className="text-left">{ready}</span>
                  </button>
                );
              })}
            </div>

            {(formData.readiness.includes('Significant soreness/pain') ||
              formData.readiness.includes('Returning from injury')) && (
              <div className="mt-4">
                <label className={labelBase}>Affected Area (optional)</label>
                <select
                  className={selectBase}
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

          {/* Generate */}
          <button
            type="button"
            onClick={handleGeneratePlan}
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 text-white font-semibold py-4 px-6 text-lg shadow-[0_12px_30px_rgba(59,130,246,0.22)] transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-3">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Generating Your Plan...</span>
              </span>
            ) : (
              '✨ Generate Training Plan'
            )}
          </button>

          {error && (
            <div className="rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 px-4 py-3">
              <div className="font-semibold mb-1">Something went wrong</div>
              <div className="text-sm">{error}</div>
            </div>
          )}
        </div>

        {/* Plan Output */}
        {plan && (
          <div className={`${cardBase} p-5 md:p-8 mb-6 md:mb-8`}>
            <div className="flex items-center justify-between gap-4 mb-5">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">📋 Your Training Plan</h2>
              <span className="text-sm text-slate-500">Preview + refine</span>
            </div>

            {plan.encouragement && (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-700">🌿</span>
                  <p className="text-emerald-900">{plan.encouragement}</p>
                </div>
              </div>
            )}

            {/* ✅ MOBILE: Card view */}
            <div className="md:hidden space-y-3">
              {plan.planRows?.map((row, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs font-semibold text-slate-500">{row.time}</div>
                      <div className="text-base font-bold text-slate-900 mt-1">{row.exercise}</div>
                    </div>

                    {row.notes ? (
                      <span className="shrink-0 text-[11px] px-2 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-200">
                        Notes
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-3 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {row.description}
                  </div>

                  <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-slate-600">
                    <div className="rounded-xl bg-slate-50/60 border border-slate-200 px-3 py-2">
                      <span className="font-semibold text-slate-700">Equipment: </span>
                      {row.equipment || '—'}
                    </div>
                    <div className="rounded-xl bg-slate-50/60 border border-slate-200 px-3 py-2">
                      <span className="font-semibold text-slate-700">Purpose: </span>
                      {row.notes || '—'}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ DESKTOP: Table view */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 bg-white/70">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-sky-100/90 text-sky-900">
                    <th className="border-b border-slate-200 p-3 text-left font-semibold whitespace-nowrap">
                      Time
                    </th>
                    <th className="border-b border-slate-200 p-3 text-left font-semibold whitespace-nowrap">
                      Exercise
                    </th>
                    <th className="border-b border-slate-200 p-3 text-left font-semibold">
                      Description
                    </th>
                    <th className="border-b border-slate-200 p-3 text-left font-semibold whitespace-nowrap">
                      Equipment
                    </th>
                    <th className="border-b border-slate-200 p-3 text-left font-semibold">
                      Notes
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {plan.planRows?.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white/60' : 'bg-slate-50/60'}
                    >
                      <td className="border-b border-slate-200 p-3 whitespace-nowrap text-slate-700 text-sm">
                        {row.time}
                      </td>
                      <td className="border-b border-slate-200 p-3 font-semibold text-slate-900 text-sm">
                        {row.exercise}
                      </td>
                      <td className="border-b border-slate-200 p-3 text-slate-700 text-sm leading-relaxed">
                        {row.description}
                      </td>
                      <td className="border-b border-slate-200 p-3 text-slate-700 text-sm">
                        {row.equipment}
                      </td>
                      <td className="border-b border-slate-200 p-3 text-slate-600 text-sm leading-relaxed">
                        {row.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chat */}
            <div className="mt-8 border-t border-slate-200/70 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  💬 Ask Questions or Refine Your Plan
                </h3>
                <span className="text-sm text-slate-500">Coach chat</span>
              </div>

              <div className="space-y-3 mb-4 max-h-44 md:max-h-64 overflow-y-auto pr-1">
                {chatMessages.map((msg, index) => {
                  const isUser = msg.role === 'user';
                  return (
                    <div
                      key={index}
                      className={`rounded-2xl px-4 py-3 shadow-sm border ${
                        isUser
                          ? 'bg-sky-50 border-sky-100 ml-2 md:ml-6'
                          : 'bg-white/70 border-slate-200 mr-2 md:mr-6'
                      }`}
                    >
                      <p className="text-xs font-semibold text-slate-600 mb-1">
                        {isUser ? 'You' : 'Coach'}
                      </p>
                      <p className="text-slate-800 leading-relaxed whitespace-pre-line">
                        {msg.content}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Ask a question or request modifications..."
                  className={`${inputBase} flex-1`}
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleChatSend()}
                  disabled={chatLoading}
                />

                <button
                  type="button"
                  onClick={handleChatSend}
                  disabled={chatLoading}
                  className="w-full sm:w-auto rounded-2xl bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-900 hover:to-slate-800 text-white px-5 md:px-6 py-3 font-semibold shadow-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {chatLoading ? 'Sending...' : 'Send'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 md:mt-10 space-y-3">
          <div className="text-xs text-slate-500">
            Built for personal learning + practice planning ✨
          </div>
          
          <a
            href="https://github.com/FionaLi0502/FS-Training-Planner/tree/main"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-sm font-medium shadow-lg transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
