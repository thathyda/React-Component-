export default function FeedBack() {
  return (
    <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-base-100 dark:text-gray-100">
      <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
        <img
          src="https://i.pinimg.com/236x/c5/ec/52/c5ec52d3afb7835851bf583481a731ba.jpg"
          alt="Pic"
          className="object-cover object-center w-full h-full rounded dark:bg-blue-500"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">KiSiKa Sake</h2>
          <span className="text-sm dark:text-gray-400">Discover the enchanting world of anime at Picture Anime Shop! Immerse yourself in a kaleidoscope of vibrant characters and captivating stories. From classic favorites to the latest releases, our shop offers a treasure trove of anime art and merchandise to ignite your passion. Step into a realm where imagination knows no bounds - visit Picture Anime Shop today and bring your favorite anime to life!</span>
        </div>
      </div>
    </div>
  );
}
