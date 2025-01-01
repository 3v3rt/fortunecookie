import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [], // Use CommonModule instead of BrowserModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'ui';

  // Hardcoded list of quotes
  quotes: string[] = [
    "Patience is the key to success.",
    "Fortune favors the bold.",
    "A journey of a thousand miles begins with a single step.",
    "Happiness depends upon ourselves.",
    "Success is not final, failure is not fatal.",
    "The best way to predict the future is to create it.",
    "Dream big and dare to fail.",
    "Action is the foundational key to all success.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Believe you can and you're halfway there."
  ];

  // Index for the current quote
  currentQuoteIndex: number = -1;

  // Animation state
  animationState: string = 'hidden';

  // Function to handle input field changes
  onInputChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    const value = Number(inputValue); // Convert to a number
    this.currentQuoteIndex = Math.abs(value) % this.quotes.length;
  }

  // Function to pick a random quote
  onFeelingLucky(): void {
    this.currentQuoteIndex = Math.floor(Math.random() * this.quotes.length);
  }

  // Getter to return the current quote
  get currentQuote(): string {
    if (this.currentQuoteIndex == -1) {
      return "";
    }
    return this.quotes[this.currentQuoteIndex];
  }
}
