export default function Indicator({ count = 1 }) {
  return (
    <div className="absolute -top-1 left-5 w-4 h-4 bg-[#EA6C00] rounded-full flex items-center justify-center">
      <span className="text-white text-[10px] leading-none">{count}</span>
    </div>
  );
}