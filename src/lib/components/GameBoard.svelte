<script lang="ts">
  import { createDeck } from '../game';
  import type { Card } from '../game-types'

  let deck:Card[] = $state([]);
  let discardDeck:Card[] = $state([]);
  let currentCard:Card | null = $state(null);
  let totalCards:number = 0;
  let score = $state(0);
  let modal = $state(false);

  const startGame = () => {
    deck = createDeck();
    totalCards = deck.length;
    score = 0;
    currentCard = deck.pop();
  }
  
  const resolveCard = (numScored = 0) => {
    score += numScored * currentCard.weight;
    discardDeck = [currentCard, ...discardDeck];
    if (deck.length > 0) {
      currentCard = deck.pop();
    }
  }

  const openInfo = () => {
    modal = true;
    console.log(modal);
  }

  const closeInfo = () => {
    modal = false;
    console.log(modal);
  }

</script>
{#if !currentCard && deck.length === 0}
  <main class="new-game">
    <h1>Dart Dojo</h1>
    <p>Throw three darts for each challenge! Complete all 59 challenges for a final score.</p>
    <button on:click = {startGame}>New Game</button>
    <h3>Score: {score}</h3>
  </main>
{:else if currentCard && deck.length === 0}
  <main class="new-game">
    <h3>Score: {score}</h3>
    <p>Refresh to start another game.</p>
  </main>
{:else}
  <main class="game">
    <article class={currentCard.level} on:click={openInfo}>
      <h2>{currentCard.label}</h2>
      <p>{currentCard.weight} {currentCard.weight > 1 ? 'Points' : 'Point'} Each &#9432;</p>
    </article>
    <section>
      <nav class={currentCard.type} >
        <!-- TODO: Move into button component -->
        {#if currentCard.type === 'boolean'}
          <button on:click={() => resolveCard(0)}>0</button>
          <button on:click={() => resolveCard(1)}>1</button>
        {:else if currentCard.type === 'three'}
          <button on:click={() => resolveCard(0)}>0</button>
          <button on:click={() => resolveCard(1)}>1</button>
          <button on:click={() => resolveCard(2)}>2</button>
          <button on:click={() => resolveCard(3)}>3</button>
        {:else if currentCard.type === 'nine'}
          <button class="zero" on:click={() => resolveCard(0)}>0</button>
          <button on:click={() => resolveCard(1)}>1</button>
          <button on:click={() => resolveCard(2)}>2</button>
          <button on:click={() => resolveCard(3)}>3</button>
          <button on:click={() => resolveCard(4)}>4</button>
          <button on:click={() => resolveCard(5)}>5</button>
          <button on:click={() => resolveCard(6)}>6</button>
          <button on:click={() => resolveCard(7)}>7</button>
          <button on:click={() => resolveCard(8)}>8</button>
          <button on:click={() => resolveCard(9)}>9</button>
        {:else}
          Error!
        {/if}
      </nav>
    </section>
    <aside class="score">
      <h3>Score: {score} <span class="progress">({discardDeck.length + 1}/{totalCards})</span></h3>
    </aside>
    <aside class="info" class:hidden={!modal} on:click={closeInfo}> <p class="close">X</p>
      <p>{currentCard.instructions}</p>
    </aside>
  </main>
  {/if}

<style>

  h1, h2, h3, h4, h5, h6 {
    margin: .5rem 0;
    font-family: 'Ruda', sans-serif;
  }
  h3 span.progress {
    font-weight: 400;
    font-size: 1.25rem;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100dvh;
  }
  main.new-game {
    justify-content: center;
    padding: .5rem;
  }

  main.new-game button {
    margin: .5rem 0;
    font-size: clamp(1rem, 6vw, 6rem);
    background-image: linear-gradient(hsl(270, 20%, 90%), hsl(270, 20%, 80%));
    color: #222;
  }

  main.new-game button:active {
    background-image: linear-gradient(hsl(270, 20%, 70%) 10%, hsl(270, 20%, 80%));
  }

  main.game {
    justify-content: stretch;
  }
  p {
    text-align: center;
    margin: 0.5rem;
  }
  article {
    width: 100%;
    color: white;
    text-align: center;
  }

  article.grey {
    background-color: grey;
  }
  article.green {
    background-color: green;
  }
  article.yellow {
    background-color: yellow;
    color: black;
  }
  article.red {
    background-color: maroon;
  }
  article.goat {
    background-color: purple;
  }

  article h2 {
    margin-bottom: 0;
  }

  section {
    flex: auto;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  button {
    padding: 0.4rem 1rem;
    font-size: clamp(1rem, 10vw, 8rem);
    color: #444;
    background-image: linear-gradient(hsl(90, 0%, 95%) 10%, hsl(120, 0%, 85%));
    border: 1px solid #999;
  }
  
  button:active {
    background-image: linear-gradient(hsl(90, 0%, 70%) 10%, hsl(120, 0%, 80%));
  }

  nav {
    border: 0.25rem solid darkgrey;
    display: flex;
    flex-direction: column;
    min-width: 70vw;
    max-width: 1024px;
    background-color: darkgrey;
    gap: 0.25rem;
  }

  nav.three button, nav.boolean button {
    aspect-ratio: 3 / 1;
  }

  nav.nine {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  nav.nine button {
    aspect-ratio: 1 / 1;
  }
  nav.nine button.zero {
    grid-column: span 3;
    aspect-ratio: 3 / 1;
  }

  .score {
    width: 100%;
    text-align: center;
    font-size: clamp(1rem, 8vw, 8rem);
    background-color: black;
    color: white;
    padding: 0.5em;
  }
  .score h3 {
    margin: 0;
  }

  .info {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    margin: 1rem;
    padding: 2rem 1rem;
    transform: translateY(-50%);
    
    background: white;
    border: 3px solid #555;
    border-radius: 2rem;
    font-size: 1.5rem;
  }
  .info .close {
    position: absolute;
    right: 1rem;
    top: 0;
  }
  .hidden {
    display: none;
  }
</style>