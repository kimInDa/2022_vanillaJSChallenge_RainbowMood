const quotesList = [
    {
    quote: "끝을 맺기를 처음과 같이 하면 실패가 없다.",
    author: "노자",
    },
    {
    quote: "사랑은 늙는 다는 것을 모른다.",
    author: "스탕달",
    },
    {
    quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아간다.",
    author: "앙드레 말로",
    },
    {
    quote: "아는 것을 안다하고, 모르는 것을 모른다하는 것이 말의 근본이다.",
    author: "순자",
    },
    {
    quote: "오늘 죽을 것처럼 행동하고 영원히 살 것처럼 배워라.",
    author: "간디",
    },
    {
    quote: "가난하되 만족하면 더 할 나위 없이 부자다.",
    author: "세익스피어",
    },
    {
    quote: "지식에 투자하는 것이 가장 이윤이 높다.",
    author: "프랭클린",
    },
    {
    quote: "생각함으로써 생기고 노력함으로써 이루어지며 교만함으로써 실패한다.",
    author: "지자",
    },
    {
    quote: "무소유란 아무 것도 갖지 않은 것이 아니라. 불필요한 것을 갖지 않는다는 뜻이다.",
    author: "법정",
    },
    {
    quote: "행운의 여신은 용기 있는 자를 좋아한다.",
    author: "버질",
    },   
];
const chosenQotes = quotesList[Math.floor(Math.random() * quotesList.length)];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
quote.innerText = `" ${chosenQotes.quote} "`;
author.innerText = `- ${chosenQotes.author} -`;

