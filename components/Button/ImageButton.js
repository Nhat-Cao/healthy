export default function ImageButton({ image, title, subtitle, onClick }) {
  return (
    <div className="group relative cursor-pointer" onClick={onClick}>
      {/* Background Image Container */}
      <div className="aspect-square relative overflow-hidden">
        {/* Border Overlay */}
        <div className="absolute inset-0 border-[24px] border-yellow-400 z-20" />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Background Image */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover grayscale"
        />

        {/* Centered Text */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center p-4">
          <h3 className="text-2xl font-bold tracking-wider mb-2">{title}</h3>
          <p className="text-sm bg-[#FF963C] text-center px-4 py-2">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}