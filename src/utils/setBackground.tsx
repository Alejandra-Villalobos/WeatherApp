export const setBackgroundFunc = (icon: string | undefined) => {
  switch (icon) {
    case "clear-day":
      return "bg-gradient-to-t from-sky-400 to-yellow-500";
    case "clear-night":
      return "bg-gradient-to-b from-black to-blue-900";
    case "cloudy":
    case "partly-cloudy-day":
    case "fog":
      return "bg-gradient-to-t from-blue-400 to-stone-500";
    case "rain":
      return `before:absolute
      before:inset-0
      before:block
      before:bg-gradient-to-t
      before:from-stone-300
      before:to-blue-700
      before:z-[-5] bg-rain-gif`;
    case "snow":
      return `before:inset-0
      before:block
      before:bg-gradient-to-b
      before:from-stone-300
      before:to-blue-600
      before:z-[-5] bg-snow-gif`;
    case "wind":
      return "bg-gradient-to-t from-stone-300 to-stone-500";
    case "partly-cloudy-night":
      return "bg-gradient-to-t from-blue-900 to-stone-500";
  }
};
