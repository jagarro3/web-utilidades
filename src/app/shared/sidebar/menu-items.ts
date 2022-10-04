import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Personal',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'EPUB',
        icon: 'fa fa-book',
        class: 'has-arrow',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/epub/estadisticas',
                title: 'Estadísticas EPUB',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/formula-one',
        title: 'Fórmula 1',
        icon: 'fa fa-flag-checkered',
        class: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: []
    }
];
