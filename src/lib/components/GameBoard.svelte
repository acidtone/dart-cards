<script lang="ts">
  import { createDeck } from '../game';
  import type { Card } from '../game-types'

  let deck:Card[] = $state([]);
  let discardDeck:Card[] = $state([]);
  let currentCard:Card | null = $state(null);
  let score = $state(0);

  const startGame = () => {
    deck = createDeck();
    score = 0;
    currentCard = deck.pop();
  }
  
  const resolveCard = (numScored = 0) => {
    score += numScored * currentCard.weight;
    discardDeck = [currentCard, ...discardDeck];
    if (deck.length > 0) {
      currentCard = deck.pop();
    } else {
      currentCard = null;
    }
  }

</script>
{#if !currentCard}
  <main class="new-game">
    <button class=".new-game" on:click = {startGame}>New Game</button>
    <h3>Score: {score}</h3>
  </main>
{:else}
  <main class="game">
    <article class={currentCard.level}>
      <h2>{currentCard.label}</h2>
      <p>{currentCard.weight} {currentCard.weight > 1 ? 'Points' : 'Point'} Each</p>
    </article>
    <section>
      <nav class={currentCard.type}>
    
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
    <aside>
      <h3>Score: {score}</h3>
    </aside>
  </main>
{/if}

<style>
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
  }
  main.new-game {
    justify-content: center;
  }
  main.game {
    justify-content: stretch;
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
    background-color: purple;``
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
    border: 4px solid darkgrey;;
    padding: 0.5rem 1rem;
    font-size: clamp(1rem, 8vw, 8rem);
  }

  
  nav {
    display: flex;
    flex-direction: column;
    min-width: 75vw;
    max-width: 1024px;
  }
  nav.nine {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  nav.nine button.zero {
    grid-column: span 3;
  }

  aside {
    width: 100%;
    text-align: center;
    font-size: clamp(1rem, 8vw, 8rem);
    background-color: black;
    color: white;
    padding: 0.5em;
  }
  aside h3 {
    margin: 0;
  }
</style>