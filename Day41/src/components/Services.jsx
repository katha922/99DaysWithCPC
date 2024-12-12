import service from "../../public/images/services.webp"

const Services = () => {
    return (
        <div name="Services">
            <h1 className="font-bold text-2xl text-center mt-20 mb-10">Services</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mx-8">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={service} alt="Responsive Web Design" className=" " />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">Responsive Web Design</h3>
                            <p className="text-gray-600">Crafting websites that look great on any device.</p>
                        </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={service} alt="Responsive Web Design" className=" " />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">Responsive Web Design</h3>
                            <p className="text-gray-600">Crafting websites that look great on any device.</p>
                        </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={service} alt="Responsive Web Design" className=" " />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">Responsive Web Design</h3>
                            <p className="text-gray-600">Crafting websites that look great on any device.</p>
                        </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={service} alt="Responsive Web Design" className=" " />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">Responsive Web Design</h3>
                            <p className="text-gray-600">Crafting websites that look great on any device.</p>
                        </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={service} alt="Responsive Web Design" className=" " />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">Responsive Web Design</h3>
                            <p className="text-gray-600">Crafting websites that look great on any device.</p>
                        </div>
                </div>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={service} alt="Responsive Web Design" className="" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold mb-2">Responsive Web Design</h3>
                            <p className="text-gray-600">Crafting websites that look great on any device.</p>
                        </div>
                </div>
                
            </div>
        </div>
    );
};

export default Services;