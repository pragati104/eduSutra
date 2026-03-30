const SingleNews = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div
        className="bg-cover bg-center text-center overflow-hidden"
        style={{
          minHeight: "500px",
          backgroundImage:
            "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')",
        }}
        title="Woman holding a mug"
      ></div>

      <div className="max-w-3xl mx-auto">
        <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div className="bg-white relative top-0 -mt-32 p-5 sm:p-10">
            <h1 className="text-gray-900 font-bold text-3xl mb-2">
              Revenge of the Never Trumpers
            </h1>
            <div className="text-gray-700 text-xs mt-2">
              Written By:
              <span className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Ahmad Sultani
              </span>{" "}
              In
              <span className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Election
              </span>
              ,
              <span className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Politics
              </span>
            </div>
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <h3 className="text-2xl font-bold my-5">
              #1. What is Lorem Ipsum?
            </h3>
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </blockquote>
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #Election, #people, #Election2020, #trump, #Joe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
