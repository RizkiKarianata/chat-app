
import HomePage from '../pages/home.f7.html';
import NotFoundPage from '../pages/404.f7.html';

import RegisterPage from '../pages/register.f7.html';
import ChatPage from '../pages/chat.f7.html';

var routes = [
{
	path: '/',
	component: HomePage,
},
{
	path: '/register/',
	component: RegisterPage,
},
{
	path: '/chat/',
	component: ChatPage,
},
{
	path: '(.*)',
	component: NotFoundPage,
},
];

export default routes;