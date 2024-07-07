// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the button using its ID
    const button = document.getElementById('myButton');

    const ranks = [
        {
            player: "Shard",
            prefix: "",
            enemy: 'assets/shard/icon.png',
            chars: ['assets/shard/mario.png', 'assets/shard/brawler.png'],
        },
        {
            player: "XLNC",
            prefix: "LS",
            enemy: 'assets/xlnc/icon.png',
            chars: ['assets/xlnc/yoshi.png'],
        },
        {
            player: "Whirlpool",
            prefix: "ITT",
            enemy: 'assets/whirlpool/icon.png',
            chars: ['assets/whirlpool/rob.png'],
        },
        {
            player: "Insect",
            prefix: "HTC",
            enemy: 'assets/insect/icon.png',
            chars: ['assets/insect/seph.png', 'assets/insect/wolf.png', 'assets/insect/falco.png'],
        },
        {
            player: "Meatburger",
            prefix: "",
            enemy: 'assets/meatburger/icon.png',
            chars: ['assets/meatburger/shulk.png'],
        },
        {
            player: "Lexxure",
            prefix: "",
            enemy: 'assets/lexxure/icon.png',
            chars: ['assets/lexxure/snake.png'],
        },
        {
            player: "Danila",
            prefix: "HTC",
            enemy: 'assets/danila/icon.png',
            chars: ['assets/danila/bayo.png', 'assets/danila/cloud.png'],
        },
        {
            player: "Dr. Miami",
            prefix: "LS",
            enemy: 'assets/miami/icon.png',
            chars: ['assets/miami/incin.png', 'assets/miami/bayo.png'],
        },
        {
            player: "Phin!",
            prefix: "SHIDD",
            enemy: 'assets/phin/icon.png',
            chars: ['assets/phin/gunner.png'],
        },
        {
            player: "Zweben",
            prefix: "UC",
            enemy: 'assets/zweben/icon.png',
            chars: ['assets/zweben/joker.png'],
        },
    ]
    
    // Add a click event listener to the button
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
});
