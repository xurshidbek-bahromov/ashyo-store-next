const CategorySkeleton = () => {
  return (
    <div className="flex justify-center flex-wrap gap-6">
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className="w-24 h-5 bg-gray-300 rounded-md animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default CategorySkeleton;
