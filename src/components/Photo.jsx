const Photo = () => {
  return (
    <div className="relative order-1 lg:order-2 flex justify-center w-full h-100 md:mt-10">
      <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px] mt-5">
        <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite]"></div>

        <div className="absolute inset-3 rounded-full border border-purple-500/15 animate-[spin_15s_linear_infinite_reverse]"></div>

        <div className="absolute inset-8 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-full blur-2xl"></div>

        <div className="absolute inset-8 rounded-full overflow-hidden bg-white shadow-2xl">
          <img
            alt="Ankit Singh — Full Stack Developer"
            className="w-full h-full object-cover"
            src="/dpp.png"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-blue-200/20 to-transparent"></div>
        </div>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white backdrop-blur-md border border-gray-200 px-5 py-2.5 rounded-full whitespace-nowrap flex items-center gap-2 shadow-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>

          <span className="text-md font-medium">
            Open to Work
          </span>
        </div>
      </div>
    </div>
  );
};

export default Photo;