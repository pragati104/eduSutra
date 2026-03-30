import Image from "next/image";

const ProfileCard = ({ data }) => {
  return (
    <div class="wrapper p-4 md:w-60 w-[100%] mx-auto rounded-xl flex items-center md:justify-center justify-between md:flex-col flex-row   bg-fuchsia-100">
      <div class="img-area h-36 w-36 flex items-center justify-center bg-primaryLight rounded-[50%]">
        <div class="inner-area rounded-[50%] ">
          <Image
            width={150}
            height={150}
            src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="rwg"
            className="rounded-[50%] object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div class="name text-[#31344b] font-medium text-xl mt-2.5 mb-1">
          {data.name}
        </div>
        <div class="about text-[#44476a] font-normal text-base">
          Rank {data.score}
        </div>
        <div class="about text-[#44476a] font-normal text-base">
          {data.exam}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
