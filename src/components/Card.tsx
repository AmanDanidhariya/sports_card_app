import Image from 'next/image';

interface Props {
    image: string;
    name: string;
    description: string;
    sports_name: string;
}

const Card = ({ image, name, description, sports_name }: Props) => {
    return (
        <>
            <div className="col-span-2 shadow-2xl max-w-xs rounded overflow-hidden h-full ">
                <div className="w-full h-44">
                    <Image className="w-full h-full object-fit" src={image} alt={name} width={200} height={700} />
                </div>
                <div className="px-2 py-4 text-sm">
                    <div className="font-semibold text-xl mb-2">{name}</div>
                    <div className='dark:bg-slate-800 p-2 '>
                        <div className='flex'>
                            <div className='flex flex-col mx-2'>
                                <p className='text-gray-400 font-semibold'>Total Events</p>
                                <p className="text-gray-700 text-base dark:text-white">{description}</p>
                            </div>
                            <div className='flex flex-col mx-2'>
                                <p className='text-gray-400 font-semibold'>sports</p>
                                <p className="text-gray-700 text-base dark:text-white">{sports_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
