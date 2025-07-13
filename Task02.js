
        class GuessingGame {
            constructor() {
                this.targetNumber = 0;
                this.attempts = 0;
                this.maxRange = 100;
                this.gameActive = true;
                this.stats = this.loadStats();
                
                this.initializeElements();
                this.setupEventListeners();
                this.startNewGame();
                this.updateStatsDisplay();
            }

            initializeElements() {
                this.guessInput = document.getElementById('guessInput');
                this.submitBtn = document.getElementById('submitBtn');
                this.feedback = document.getElementById('feedback');
                this.gradientCircle = document.getElementById('gradientCircle');
                this.attemptsDisplay = document.getElementById('attempts');
                this.newGameBtn = document.getElementById('newGameBtn');
                this.currentAttemptsDisplay = document.getElementById('currentAttempts');
                this.bestScoreDisplay = document.getElementById('bestScore');
                this.gamesPlayedDisplay = document.getElementById('gamesPlayed');
                this.minRangeDisplay = document.getElementById('minRange');
                this.maxRangeDisplay = document.getElementById('maxRange');
            }

            setupEventListeners() {
                this.submitBtn.addEventListener('click', () => this.makeGuess());
                this.guessInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') this.makeGuess();
                });
                this.newGameBtn.addEventListener('click', () => this.startNewGame());
                
                // Difficulty selector
                document.querySelectorAll('.difficulty-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('active'));
                        e.target.classList.add('active');
                        this.maxRange = parseInt(e.target.dataset.range);
                        this.maxRangeDisplay.textContent = this.maxRange;
                        this.guessInput.max = this.maxRange;
                        this.startNewGame();
                    });
                });
            }

            startNewGame() {
                this.targetNumber = Math.floor(Math.random() * this.maxRange) + 1;
                this.attempts = 0;
                this.gameActive = true;
                this.updateAttemptsDisplay();
                this.feedback.textContent = 'Make your first guess!';
                this.guessInput.value = '';
                this.guessInput.disabled = false;
                this.submitBtn.disabled = false;
                this.resetCircleStyle();
                console.log('Target number:', this.targetNumber); // For debugging
            }

            makeGuess() {
                if (!this.gameActive) return;

                const guess = parseInt(this.guessInput.value);
                
                if (isNaN(guess) || guess < 1 || guess > this.maxRange) {
                    this.feedback.textContent = `Please enter a number between 1 and ${this.maxRange}!`;
                    this.guessInput.classList.add('shake');
                    setTimeout(() => this.guessInput.classList.remove('shake'), 500);
                    return;
                }

                this.attempts++;
                this.updateAttemptsDisplay();
                this.updateCircleStyle(guess);
                
                if (guess === this.targetNumber) {
                    this.handleCorreectGuess();
                } else {
                    this.handleIncorrectGuess(guess);
                }
                
                this.guessInput.value = '';
            }

            handleCorreectGuess() {
                this.feedback.textContent = `🎉 Congratulations! You found ${this.targetNumber} in ${this.attempts} attempts!`;
                this.gameActive = false;
                this.guessInput.disabled = true;
                this.submitBtn.disabled = true;
                
                this.updateStats();
                this.createConfetti();
                this.gradientCircle.classList.add('pulse');
                setTimeout(() => this.gradientCircle.classList.remove('pulse'), 500);
            }

            handleIncorrectGuess(guess) {
                const difference = Math.abs(guess - this.targetNumber);
                const percentage = (difference / this.maxRange) * 100;
                
                let hint = '';
                if (percentage < 5) hint = '🔥 Very Hot!';
                else if (percentage < 15) hint = '♨️ Hot!';
                else if (percentage < 30) hint = '🌡️ Warm';
                else if (percentage < 50) hint = '❄️ Cool';
                else hint = '🧊 Cold!';
                
                const direction = guess > this.targetNumber ? 'Too High!' : 'Too Low!';
                this.feedback.textContent = `${direction} ${hint}`;
            }

            updateCircleStyle(guess) {
                const difference = Math.abs(guess - this.targetNumber);
                const proximity = 1 - (difference / this.maxRange);
                
                // Create color based on proximity
                let color;
                if (proximity > 0.9) color = '#ff1744'; // Very close - red
                else if (proximity > 0.7) color = '#ff9800'; // Close - orange
                else if (proximity > 0.5) color = '#ffeb3b'; // Medium - yellow
                else if (proximity > 0.3) color = '#2196f3'; // Far - blue
                else color = '#9c27b0'; // Very far - purple
                
                const intensity = Math.max(0.3, proximity);
                this.gradientCircle.style.boxShadow = `0 0 ${50 * intensity}px ${color}`;
                this.gradientCircle.style.filter = `hue-rotate(${360 * (1 - proximity)}deg) brightness(${0.8 + 0.4 * proximity})`;
            }

            resetCircleStyle() {
                this.gradientCircle.style.boxShadow = '0 0 50px rgba(255, 255, 255, 0.3)';
                this.gradientCircle.style.filter = 'none';
            }

            updateAttemptsDisplay() {
                this.attemptsDisplay.textContent = this.attempts;
                this.currentAttemptsDisplay.textContent = this.attempts;
            }

            updateStats() {
                this.stats.gamesPlayed++;
                if (this.stats.bestScore === 0 || this.attempts < this.stats.bestScore) {
                    this.stats.bestScore = this.attempts;
                }
                this.saveStats();
                this.updateStatsDisplay();
            }

            updateStatsDisplay() {
                this.bestScoreDisplay.textContent = this.stats.bestScore || '-';
                this.gamesPlayedDisplay.textContent = this.stats.gamesPlayed;
            }

            loadStats() {
                const saved = localStorage.getItem('gradientGuessingGameStats');
                return saved ? JSON.parse(saved) : { bestScore: 0, gamesPlayed: 0 };
            }

            saveStats() {
                localStorage.setItem('gradientGuessingGameStats', JSON.stringify(this.stats));
            }

            createConfetti() {
                const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffd93d', '#6bcf7f'];
                
                for (let i = 0; i < 30; i++) {
                    setTimeout(() => {
                        const confetti = document.createElement('div');
                        confetti.className = 'confetti';
                        confetti.style.left = Math.random() * 100 + '%';
                        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                        confetti.style.animationDelay = Math.random() * 2 + 's';
                        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                        
                        document.body.appendChild(confetti);
                        
                        setTimeout(() => {
                            confetti.remove();
                        }, 5000);
                    }, i * 100);
                }
            }
        }

        // Initialize the game when the page loads
        document.addEventListener('DOMContentLoaded', () => {
            new GuessingGame();
        });