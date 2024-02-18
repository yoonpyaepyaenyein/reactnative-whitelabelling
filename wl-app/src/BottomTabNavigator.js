import modules from './modules';
import { createBottomTabNavigator } from 'react-navigation-tabs';

const modules = [events, museums, hikes];

const routes = modules.map(module => {
  const Route = module.renderModule;
  Route.navigationOptions = {
    tabBarLabel: module.title,
    tabBarIcon: () => <Icon name={module.icon} />,
  };
  return Route;
});

export default createBottomTabNavigator(routes);
