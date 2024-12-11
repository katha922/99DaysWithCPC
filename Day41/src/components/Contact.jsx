

const Contact = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20 my-16">
            <h1 className="font-bold text-2xl text-center mt-20">Contact Me</h1>
            <p className="text-center mt-4 text-slate-600 mb-10">Please fill out the form bellow to contact me</p>
            <div className="justify-center flex">
                <form action="">
                    <h1>Send Your Message</h1>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="name">Name</label>
                        <input className="shadow border rounded py-2 w-full px-3 appearance-none" id="name" type="text" placeholder="Name"></input>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="name">Email</label>
                        <input className="shadow border rounded py-2 w-full px-3 appearance-none" id="email" type="email" placeholder="Email"></input>
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-2" htmlFor="name">Message</label>
                        <input className="shadow border rounded py-2 w-full px-3 appearance-none" id="name" type="text" placeholder="Message"></input>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;