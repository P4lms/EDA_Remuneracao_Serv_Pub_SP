var config = {
    style: 'mapbox://styles/p4lms/ckkd47e7i2k7q17litgb9bwij',
    accessToken: 'pk.eyJ1IjoicDRsbXMiLCJhIjoiY2trZDJkNmFmMGt1ZjJvcHJ3ODNsNXo1byJ9.9OqD3k6EL4cV5t_4aDbr7Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'Testando o storytelling com gráfico ',
    subtitle: 'Este é o primeiro teste com stroytelling com gráfico de mapa, tomara que dê certo logo de primera :D',
    byline: 'By P4lms',
    footer: '',
    chapters: [
        {
            id: 'teste-de-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-48.51211, -22.89032],
                zoom: 6.31,
                pitch: 26,
                bearing: -2.87
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'outro-id-teste',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
