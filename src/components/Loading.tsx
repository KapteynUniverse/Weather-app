const Loading = () => {
  return (
    <div className="mb-[clamp(3rem,1.092rem+8.142vw,5rem)] animate-pulse">
      <div className="wrapper">
        <h1 className="text-preset-2 text-center my-[clamp(3rem,1.857rem+2.381vw,4rem)]">
          <span aria-hidden>How's the sky looking today?</span>
          <span className="sr-only">Loading the Forecast</span>
        </h1>

        <div aria-hidden>
          {/* Search bar placeholder */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-md:w-full md:max-w-[41.125rem] mx-auto mb-[clamp(2rem,0.857rem+2.381vw,3rem)] h-[7.75rem] sm:h-[3.5rem]">
            <div className="flex-1 bg-neutral-800 rounded-xl" />
            <div className="bg-blue-500 rounded-xl sm:w-[7.125rem] max-sm:flex-1" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center ">
            <div>
              {/* Current weather + details skeleton */}
              <div className="flex flex-col items-center gap-[clamp(1.25rem,0.986rem+1.127vw,2rem)] mb-8 md:mb-12 ">
                <div className="custom-bg rounded-[1.5rem] w-[clamp(20rem,11.429rem+42.857vw,50rem)] h-[17.875rem]" />
                <div className="flex justify-center gap-[clamp(1rem,0.824rem+0.751vw,1.5rem)] flex-wrap">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="card-bg rounded-xl w-[clamp(10.219rem,9.812rem+1.737vw,11.375rem)] h-[7.375rem]"
                    />
                  ))}
                </div>
              </div>

              {/* Daily forecast skeleton */}
              <div className="flex flex-wrap gap-4 justify-center">
                {[...Array(7)].map((_, i) => (
                  <div
                    key={i}
                    className="card-bg w-[6.25rem] h-[10.3125rem] rounded-xl"
                  />
                ))}
              </div>
            </div>

            <div className="bg-neutral-800 rounded-[1.5rem] w-[clamp(20rem,2.143rem+89.286vw,45rem)] md:w-[clamp(45rem,66rem+-46.667vw,24rem)] h-full px-[clamp(1rem,0.523rem+2.036vw,1.5rem)] py-[clamp(1.25rem,1.011rem+1.018vw,1.5rem)]">
              {/* Hourly forecast skeleton */}
              <div className="flex flex-col gap-4">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-neutral-700 outline-neutral-600 outline-1 h-[3rem] rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
