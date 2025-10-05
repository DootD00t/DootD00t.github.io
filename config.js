var config = {
    style: 'mapbox://styles/mapbox/standard-satellite',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiamdyYXk0NTYiLCJhIjoiY21mMnJxMmozMDQ3MjJqb2h3aDV2cjYwaiJ9.sUv6f1_4hFgb9DP8tZZXtg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Your Title Goes Here',
    subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    byline: 'By a I.M. Amapper',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: 'Nature For People',
            image: './assets/NaturePeople.jpeg',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [-122.53231, 37.74344],
                zoom: 7.75,
                pitch: 0,
                bearing: 0
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
            id: 'first_identifier',
            alignment: 'left',
            hidden: false,
            title: 'Nature For People',
            image: './assets/NaturePeople.jpg',
            description: 'The first chapter contains a title, image, and camera view for San Francisco, California. Update the chapter data to make it your own.',
            location: {
                center: [-122.53231, 37.74344],
                zoom: 7.75,
                pitch: 0,
                bearing: 0
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
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Southwest Santa Rosa Heat Action Planning',
            image: './assets/washington-dc.jpg',
            description: 'description goes here - in this layer ill have a polygon with southwest santa rosa',
            location: {
                center: [-122.73354, 38.42592],
                zoom: 12.71,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Gilroy and East San Jose Resiliency Hub',
            image: './assets/GilroyPic.jpg',
            description: 'description here - gilroy city polygon here',
            location: {
                center: [-121.57698, 37.00463],
                zoom: 12.44,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Solano Together',
            image: './assets/SolanoTogetherLogo.avif',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-121.93790, 38.32703],
                zoom: 9.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'full',
            hidden: false,
            title: 'People for Watershed Resilience',
            image: '',
            description: 'this is a transition chapter',
            location:{
                center: [-121.93790, 38.32703],
                zoom: 9.25,
                pitch: 0,
                bearing: 0
            },
            customClass: 'large-text',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Marin Climate Justice Collaborative',
            image: '',
            description: 'Description Here: ',
            location: {
                center: [-122.51350, 37.96908],
                zoom: 9.25,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Oakland-Alamenda Adaptation Comitee',
            image: '',
            description: 'Description Here: ',
            location: {
                center: [-122.26530, 37.78837],
                zoom: 12.41,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Bay Adapt and the Regional Shoreline Adaptation Plan',
            image: '',
            description: 'Description Here: Layer Can Include Point Data of Workshop Locations(North Richmond, East Palo Alto, Suisun City, San Rafael and East Oakland',
            location: {
                center: [-122.29103, 37.71784],
                zoom: 9.44,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'nine-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Solano Bayshore Resiliency and Resilient Roots',
            image: '',
            description: 'Can be one or two chapters',
            location: {
                center: [-122.12614, 38.17379],
                zoom: 10.63,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }




    ]
};
