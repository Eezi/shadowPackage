import { shadowMaker, cardsContainerMaker, cardMaker } from './index.js'

shadowMaker({
    padding: true,
    shadow_type: 'medium'
});

cardsContainerMaker({
    cards_size: 'small'
})

cardMaker({
    boxShadow: true
});