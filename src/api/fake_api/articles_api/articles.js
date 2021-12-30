const articles = [
  {
    id: '1',
    title: 'Article1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam officia iusto expedita eaque officiis cumque corrupti adipisci odio ad harum.',
    dateCreate: '',
  },
  {
    id: '2',
    title: 'Article2',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, sed. Recusandae harum beatae asperiores voluptatum eaque eum voluptatem consectetur iure consequuntur!',
    dateCreate: '',
  },
  {
    id: '3',
    title: 'Article3',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto repellendus sed ipsa fuga facilis ea.',
    dateCreate: '',
  },
  {
    id: '4',
    title: 'Article4',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reprehenderit illo reiciendis eveniet architecto adipisci aliquid molestiae veniam, quas maxime, commodi rerum tempora. Commodi, maxime.',
    dateCreate: '',
  },
  {
    id: '5',
    title: 'Article5',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe odit dicta in minus sit nihil iste! Quae, cumque!',
    dateCreate: '',
  },
  {
    id: '6',
    title: 'Article6',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
  {
    id: '7',
    title: 'Article7',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
  {
    id: '8',
    title: 'Article8',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
  {
    id: '9',
    title: 'Article9',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
  {
    id: '10',
    title: 'Article10',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis qui modi maxime nisi hic. Veniam minus dolorem voluptas rerum esse!',
    dateCreate: '',
  },
]

function fetchArticles() {
  return new Promise((res) => {
    setTimeout(() => res(articles), 1000)
  })
}

export { fetchArticles }
