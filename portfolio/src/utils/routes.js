import {useRoutes} from 'hookrouter';
import Portfolio from '../pages/Portfolio';
import Projects from '../pages/Projects';

const routes = {
    '/': () => <Portfolio />,
    '/portfolio': () => <Portfolio />,
    '/projects': () => <Projects />,
};
	
const goToRoute = () => {
    const routeResult = useRoutes(routes);
    return routeResult;
}

export default goToRoute;