import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { RatingData, ReviewData } from "../../assets/data/ReviewData";

function Reviews() {
  return (
    <div className=' p-4 md:p-8 pb-12'>
      <h2 className='text-lg text-semibold mb-2'>Reviews</h2>
      <div className="review flex flex-col gap-24 w-full lg:flex-row ">
        <div className="reviewGraph w-full flex flex-col gap-2 lg:w-1/3">
            <p className='text-3xl text-light text-blue-500'>9.6/10</p>
            {
                RatingData.map((data,index) => {
                    return (
                        <div key={index}>
                            <div className="labelProgress flex justify-between text-sm">
                                <p>{data.name}</p>
                                <p>{`${data.rating}/10`}</p>
                            </div>
                            <ProgressBar 
                            percent={data.rating * 100 / 10}
                            height={5}
                            />
                        </div>
                    )
                })
            }
           
            


        </div>
        <div className="reviewText text-sm md:text-base w-full flex flex-col gap-4">
            {
                ReviewData.map((data,index) => {
                    return (
                        <div className="border-b-2 pb-2" key={index}>
                            <div className="flex justify-between">
                                <div>
                                    <p className="font-bold md:text-lg">{data.title}</p>
                                    <p className="text-sm text-gray-400">{data.userName}</p>
                                </div>  
                                <div className="flex gap-6 items-start" > 
                                    <p className="text-green-600 md:text-base">{data.ratingText}</p>
                                    <div className="bg-green-100 rounded-full px-4 ">
                                        <p className=" text-green-600 align-center">{data.rating}</p>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="flex justify-between text-sm md:text-base content-end">
                                <div>
                                    <p>{data.ratingMessage}</p>
                                    <ul className="list-disc ml-8">
                                        {data.pointers.map((point,index) => {
                                            return(
                                                <li key={index} >{point}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="flex flex-col md:justify-end text-xs md:text-sm text-gray-400">
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
