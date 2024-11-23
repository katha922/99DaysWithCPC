import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-around items-center border-b-2 p-4'>
            <h1 className='text-4xl font-bold'>Collect Knowledge</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;