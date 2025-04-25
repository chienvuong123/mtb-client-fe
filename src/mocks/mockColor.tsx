export const renderColorCircle = (color: string) => {
  const colorMap: Record<string, string> = {
    black: 'bg-black',
    white: 'bg-white border border-gray-300',
    gray: 'bg-gray-400',
    navy: 'bg-indigo-900',
    purple: 'bg-purple-300',
    lime: 'bg-yellow-400',
    olive: 'bg-olive-700',
    pink: 'bg-pink-200',
    teal: 'bg-teal-400',
    cream: 'bg-amber-500',
  };

  return (
    <div
      className={`sm: w-7 sm: h-4 md:w-10 md:h-5 rounded-full mx-1 ${
        colorMap[color] || color
      }`}
    />
  );
};
