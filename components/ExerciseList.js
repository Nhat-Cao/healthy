export default function ExerciseList() {
  const items = new Array(12).fill(0).map((_, i) => ({
    id: i + 1,
    name: '家事全般（立位・軽い）',
    kcal: '26kcal',
    duration: '10 min'
  }));

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="bg-gray-900 text-white p-4 rounded">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-lg text-white-400 pr-4">MY EXERCISE</span>
            <span className="text-lg">2021.05.21</span>
          </div>
        </div>

        {/* Exercise list container */}
        <div
          className="mt-4 h-60 md:h-60 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 pr-2 custom-scrollbar"
        >
          {items.map(it => (
            <div key={it.id} className="flex items-center border-b border-gray-700 pb-2">
              {/* Bullet */}
              <span className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></span>
              
              {/* Exercise */}
              <div className="flex justify-between items-center w-full">
                <div>
                  <div className="text-sm">{it.name}</div>
                  <div className="text-xs text-[#FFCC21]">{it.kcal}</div>
                </div>
                <div className="text-sm text-[#FFCC21]">{it.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Chrome, Edge, Safari */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #FFCC21; 
          border-radius: 9999px;
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #FFCC21 transparent;
        }
      `}</style>
    </div>
  )
}