'use client'
import React from 'react'
import Card from '@/components/Card';


interface CardProps {
    id: number;
    name: string;
    image: string;
    total_events: string;
    sports_name: string;
    advertisement: boolean;
}

const page: React.FC = () => {
    const cardData: CardProps[] = [
        {
            "id": 978293747,
            "name": "card1",
            "image": "/images/player1.png",
            "total_events": "48 events",
            "sports_name": "Football",
            "advertisement": false
        },
        {
            "id": 9283468968,
            "name": "card2",
            "image": "/images/player2.png",
            "total_events": "28 events",
            "sports_name": "Basketball",
            "advertisement": false
        },
        {
            "id": 32548,
            "name": "card3",
            "image": "/images/player3.png",
            "total_events": "15 events",
            "sports_name": "Tennis",
            "advertisement": false
        },
        {
            "id": 80928309,
            "name": "card4",
            "image": "/images/player1.png",
            "total_events": "15 events",
            "sports_name": "IceHocky",
            "advertisement": false
        },
        {
            "id": 3253,
            "name": "Advertisement title",
            "image": "/images/poster.png",
            "total_events": " events",
            "sports_name": "ad",
            "advertisement": true
        }
    ]


    return (
        <>
            <div className="h-screen p-4 dark:bg-slate-700">
                <div className=" grid grid-cols-10 gap-4 items-center justify-center h-1/2">
                    {cardData.map((card) => (
                        <Card
                            key={card.id}
                            image={card.image}
                            name={card.name}
                            description={card.total_events}
                            sports_name={card.sports_name}
                        />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#2c9cf0] my-4 px-4 py-1 rounded-md hover:bg-white hover:text-[#2c9cf0] duration-200 '>
                        See More
                    </button>
                </div>
                <div className='p-4 h-1/2'>
                    <h1 className='font-bold text-4xl text-center'>Collection Spotlight</h1>
                    <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                    <div className=" grid grid-cols-12 gap-4 items-center justify-center h-full dark:bg-slate-700 p-4">

                        {cardData.slice(0, 3).map((card) => {
                            return (
                                <div key={card.id} className='col-span-4'>
                                    <Card
                                        image={card.image}
                                        name={card.name}
                                        description={card.total_events}
                                        sports_name={card.sports_name}
                                    />
                                </div>
                            )

                        })}

                    </div>
                </div>


            </div >

        </>
    )
}

export default page