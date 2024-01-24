interface AppRoutesPropsRouteI {
    path: string;
    exact?: boolean;
    element: React.ComponentType<any>;
}

interface AppRoutesPropsI {
    routes: AppContentPropsRouteI[];
    routeStart: string
}