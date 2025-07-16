import { useState } from 'react'

function Gallery() {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const panels = [
        {  image: "https://cdna.artstation.com/p/assets/images/images/088/717/104/4k/rhiannon-chamberlain-1-02.jpg?1749001544" },
        {  image: "https://cdna.artstation.com/p/assets/images/images/087/737/528/large/rhiannon-chamberlain-cam1-0000222.jpg?1746561672" },
        {  image: "https://i.pinimg.com/736x/52/85/cd/5285cd9f10f64a810dcc95152d046128.jpg" },
        {  image: "https://i.pinimg.com/736x/82/99/30/8299301f136fe21971ce5ccf794d26db.jpg" }

    ];

    const handleClick = (index) => {
        setExpandedIndex(index);
    };

    return (
        <main className="w-screen h-screen bg-black overflow-hidden">
            <div className="h-full w-full overflow-hidden flex items-center justify-center p-4 relative"
                 style={{
                     backgroundImage: `url(${panels[expandedIndex].image})`,
                     backgroundRepeat: "no-repeat",
                     backgroundSize: "cover"
                 }}
            >
                <div className="inset-0 absolute bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>
                <div className="flex w-full max-w-7xl h-[80vh] gap-2 items-center justify-center z-10">
                    {panels.map((panel, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(index)}
                            className={`
              h-full rounded-2xl bg-white cursor-pointer
              transition-all duration-500 ease-in-out overflow-hidden
              ${expandedIndex === index ? 'w-[60%]' : 'w-[10%] hover:bg-gray-200'}
              min-w-[40px] block
            `}
                        >
                            <img src={panel.image} alt="" className='w-full h-full object-cover object-top'/>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Gallery