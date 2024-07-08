function createRank(entry) {
    const rankContainer = document.createElement('div');
    rankContainer.className = 'rank-container menu-item';

    rankContainer.setAttribute('data-rank', "card"+entry.rank)

    const rankItemIcon = document.createElement('div');
    rankItemIcon.className = 'rank-item icon';
    const iconImg = document.createElement('img');
    iconImg.src = entry.enemy;
    rankItemIcon.appendChild(iconImg);
    const rankNumber = document.createElement('div');
    rankNumber.className = 'rank-number';
    rankNumber.textContent = entry.rank;
    rankItemIcon.appendChild(rankNumber);

    const rankItem = document.createElement('div');
    rankItem.className = 'rank-item';

    const playerPanel = document.createElement('div');
    playerPanel.className = 'player-panel';

    const dottedLineDiv = document.createElement('div');
    dottedLineDiv.className = 'dotted-line-div';

    const playerName = document.createElement('div');
    playerName.className = 'player-name'

    const crewDiv = document.createElement('div');
    crewDiv.className = 'crew';
    crewDiv.textContent = entry.prefix;

    const pnameDiv = document.createElement('div');
    pnameDiv.className = 'pname';
    pnameDiv.textContent = entry.player;

    playerName.appendChild(crewDiv);
    playerName.appendChild(pnameDiv);

    dottedLineDiv.appendChild(playerName);

    playerPanel.appendChild(dottedLineDiv);

    const characterRow = document.createElement('div');
    characterRow.className = 'character-row';

    entry.chars.forEach(char => {
        const charImg = document.createElement('img');
        charImg.src = char;
        characterRow.appendChild(charImg);
    });

    playerPanel.appendChild(characterRow);

    rankItem.appendChild(rankItemIcon);
    rankItem.appendChild(playerPanel);

    rankContainer.appendChild(rankItemIcon);
    rankContainer.appendChild(rankItem);

    return rankContainer;
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the button using its ID
    const button = document.getElementById('myButton');

    const ranks = [
        {
            rank: 1,
            player: "Shard",
            prefix: "",
            enemy: 'assets/shard/icon.png',
            chars: ['assets/shard/mario.png', 'assets/shard/brawler.png'],
        },
        {
            rank: 2,
            player: "XLNC",
            prefix: "LS",
            enemy: 'assets/xlnc/icon.png',
            chars: ['assets/xlnc/yoshi.png'],
        },
        {
            rank: 3,
            player: "Whirlpool",
            prefix: "ITT",
            enemy: 'assets/whirlpool/icon.png',
            chars: ['assets/whirlpool/rob.png'],
        },
        {
            rank: 4,
            player: "insect",
            prefix: "HTC",
            enemy: 'assets/insect/icon.png',
            chars: ['assets/insect/seph.png', 'assets/insect/wolf.png', 'assets/insect/falco.png'],
        },
        {
            rank: 5,
            player: "MeatBurger",
            prefix: "",
            enemy: 'assets/meatburger/icon.png',
            chars: ['assets/meatburger/shulk.png'],
        },
        {
            rank: 6,
            player: "Lexxure",
            prefix: "",
            enemy: 'assets/lexxure/icon.png',
            chars: ['assets/lexxure/snake.png'],
        },
        {
            rank: 7,
            player: "Danila",
            prefix: "HTC",
            enemy: 'assets/danila/icon.png',
            chars: ['assets/danila/bayo.png', 'assets/danila/cloud.png'],
        },
        {
            rank: 8,
            player: "Dr. Miami",
            prefix: "LS",
            enemy: 'assets/miami/icon.png',
            chars: ['assets/miami/incin.png', 'assets/miami/bayo.png'],
        },
        {
            rank: 9,
            player: "Phin!",
            prefix: "SHIDD",
            enemy: 'assets/phin/icon.png',
            chars: ['assets/phin/gunner.png'],
        },
        {
            rank: 10,
            player: "Zweben",
            prefix: "UC",
            enemy: 'assets/zweben/icon.png',
            chars: ['assets/zweben/joker.png'],
        },
    ]

    const rankingsContainer = document.getElementById('rankings-container');
    ranks.forEach(rank => {
        const rankContainer = createRank(rank);
        rankingsContainer.appendChild(rankContainer);
    })

    const menuItems = document.querySelectorAll('.menu-item');
    const cards = document.querySelectorAll('.card');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const cardId = this.getAttribute('data-rank');
            cards.forEach(card => {
                card.style.display = 'none'; // Hide all cards
            });

            document.getElementById(cardId).style.display = 'block'; // Show the selected card
            menuItems.forEach(ite =>{
                ite.classList.remove('glowy');
            })

            if (!(cardId === "card11")) {
                item.classList.add('glowy');
            }
        });
    });

    // Show the first card by default
    if (cards.length > 0) {
        cards[0].style.display = 'block';
        menuItems[0].classList.add('glowy')
    }
});
