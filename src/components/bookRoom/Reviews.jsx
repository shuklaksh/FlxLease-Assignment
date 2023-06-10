import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { RatingData, ReviewData } from "../../assets/data/ReviewData";

function Reviews() {
  return (
    <div className=' p-8 pb-12'>
      <h2 className='text-lg text-semibold mb-2'>Reviews</h2>
      <div className="review flex gap-24 w-full">
        <div className="reviewGraph w-1/3 flex flex-col gap-2">
            <p className='text-3xl text-light text-blue-500'>9.6/10</p>
            {
                RatingData.map((data) => {
                    return (
                        <>
                            <div className="labelProgress flex justify-between text-sm">
                                <p>{data.name}</p>
                                <p>{`${data.rating}/10`}</p>
                            </div>
                            <ProgressBar 
                            percent={data.rating * 100 / 10}
                            height={5}
                            />
                        </>
                    )
                })
            }
           
            


        </div>
        <div className="reviewText w-full flex flex-col gap-4">
            {
                ReviewData.map((data) => {
                    return (
                        <div className="border-b-2 pb-2">
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-bold text-lg">{data.title}</p>
                                    <p className="text-sm text-gray-400">{data.userName}</p>
                                </div>  
                                <div className="flex gap-6 items-start" > 
                                    <p className="text-green-600 text-base">{data.ratingText}</p>
                                    <div className="bg-green-100 rounded-full px-4 ">
                                        <p className=" text-green-600 align-center">{data.rating}</p>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="flex justify-between content-end">
                                <div>
                                    <p>{data.ratingMessage}</p>
                                    <ul className="list-disc ml-8">
                                        {data.pointers.map((point) => {
                                            return(
                                                <li>{point}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-end text-sm text-gray-400">
                                    <p>Reviewed on</p>
                                    <p>{data.date}</p>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Reviews
