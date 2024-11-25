

const Nav2 = () => {
    const routes = [
        {
          id: 1,
          name: 'Home',
          path: '/',
        },
        {
          id: 2,
          name: 'About Us',
          path: '/about',
        },
        {
          id: 3,
          name: 'Services',
          path: '/services',
        },
        {
          id: 4,
          name: 'Contact',
          path: '/contact',
        },
        {
          id: 5,
          name: 'Profile',
          path: '/profile/:id',
        },
      ];
      
     
      
    return (
        <nav>
            <ul className="md:flex">
            {
                routes.map(route=><li className="mr-6" key={route.id}><a href={route.path}>{route.name}</a></li>)
            }
            </ul>
        </nav>
    );
};

export default Nav2;