export default function ColumnCategory() {
  const categories = [
    { key: 'column', title: 'RECOMMENDED\nCOLUMN', subtitle: 'オススメ' },
    { key: 'diet', title: 'RECOMMENDED\nDIET', subtitle: 'ダイエット' },
    { key: 'beauty', title: 'RECOMMENDED\nBEAUTY', subtitle: '美容' },
    { key: 'health', title: 'RECOMMENDED\nHEALTH', subtitle: '健康' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <div
            key={category.key}
            className="bg-[#2E2E2E] h-40 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#2E2E2E]/90 transition-colors"
          >
            <h3 className="text-[#FFCC21] text-xl font-normal tracking-wider mb-2 whitespace-pre-line">
              {category.title}
            </h3>
            <div className="w-14 h-[1px] bg-white my-2" />
            <p className="text-white text-base">{category.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
