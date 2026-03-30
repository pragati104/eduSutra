import { useTimer } from 'react-timer-hook'

function MyTimer({ expiryTimestamp }) {
   const { seconds, minutes, hours } = useTimer({
      expiryTimestamp,
      onExpire: () => console.warn('onExpire called'),
   })

   const formatTime = (time) => {
      return String(time).padStart(2, '0')
   }

   return (
      <div className=" flex items-center gap-0.5 md:text-2xl text-lg w-fit">
         <div className="p-1 rounded-md shadow-md bg-white">
            <p className="shadow-md rounded-md p-1 bg-black text-white w-12 font-semibold items-center flex justify-center">
               {formatTime(hours)}
            </p>
         </div>
         :
         <div className="p-1 rounded-md shadow-md bg-white">
            <p className="shadow-md rounded-md p-1 bg-black text-white w-12 font-semibold items-center flex justify-center">
               {formatTime(minutes)}
            </p>
         </div>
         :
         <div className="p-1 rounded-md shadow-md bg-white">
            <p className=" shadow-md rounded-md p-1 bg-black text-white w-12 font-semibold items-center flex justify-center">
               {formatTime(seconds)}
            </p>
         </div>
      </div>
   )
}

export default MyTimer
