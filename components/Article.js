export default function Article({ date, time, title, imgSrc, tags = [] }) {
  return (
    <article className="bg-white">
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-[256/144] bg-gray-200">
          <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute left-0 bottom-0 bg-[#FFCC21] text-white px-2 py-1 text-sm">
          {date} {time}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h4 className="text-sm line-clamp-2 mb-2">{title}</h4>
        <div className="flex gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-sm text-[#FF963C]">#{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}