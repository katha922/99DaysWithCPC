

const About = () => {
    return (
        <div name="About">
            <h1 className="font-bold text-2xl text-center mt-20">About Me</h1>
            <p className="text-center mt-4 text-slate-600 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Adipisci doloremque expedita ipsam hic tempore rem<br></br> accusamus quae beatae cum natus!</p>
            <div className="flex justify-center mb-10 gap-8">
                <div className="bg-blue-200 p-6 rounded">
                    <h3 className="font-bold mb-4">Languages</h3>
                    <h4>HTML, CSS, JavaScript, React Js, Next Js</h4>
                </div>
                <div className="bg-blue-200 p-6 rounded">
                    <h3 className="font-bold mb-4">Education</h3>
                    <h4>B.Tech in Computer Science</h4>
                </div>
                <div className="bg-blue-200 p-6 rounded">
                    <h3 className="font-bold mb-4">Projects</h3>
                    <h4>Build More Then 5 Projects</h4>
                </div>
            </div>
            
            
        </div>
    );
};

export default About;