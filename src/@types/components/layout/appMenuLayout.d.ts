interface AppMenusItemsPropsDataI
{
    component: React.ElementType;
    name: string;
    badge?: {
        color: string;
        text: string;
    };
    icon?: React.ReactNode;
    to?: string;
    items?: AppSidebarNavItem[];
}

interface AppMenusPropsDataI {
    text?: string;
    url?: string;
    icon?: string;
    children?: AppMenusPropsDataI
}

interface AppMenusPropsI {
    menu?: AppMenusPropsDataI[];            //for backend, after to process and convert like AppMenusItemsPropsDataI
    menuItems?: AppMenusItemsPropsDataI[];  //for hardcoded menu, defined on project
    isFromApi?: boolean
}


interface AppMenusSideBarPropsI {
    items: AppMenusItemsPropsDataI[];
}