/**
 * ELO Rating Algorithm Implementation
 * 
 * The formula used is R'a = Ra + K × (Sa - Ea)
 * where:
 * - R'a is the new rating of player A
 * - Ra is the current rating of player A
 * - K is a factor (usually between 16-32) that determines how much ratings change
 * - Sa is the actual score (1 for win, 0.5 for draw, 0 for loss)
 * - Ea is the expected score based on current ratings
 * 
 * Expected score formula: Ea = 1 / (1 + 10^((Rb-Ra)/400))
 */

// ELO factor - higher values mean bigger rating changes
const K_FACTOR = 32;

/**
 * Calculate expected score based on ELO ratings
 */
export function calculateExpectedScore(ratingA: number, ratingB: number): number {
  return 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
}

/**
 * Calculate new ELO ratings after a match
 * @param ratingA Current rating of player A
 * @param ratingB Current rating of player B
 * @param scoreA Actual score of player A (1 for win, 0.5 for draw, 0 for loss)
 * @returns New ratings for both players
 */
export function calculateNewElo(
  ratingA: number,
  ratingB: number,
  scoreA: number
): { newRatingA: number; newRatingB: number } {
  const expectedScoreA = calculateExpectedScore(ratingA, ratingB);
  const expectedScoreB = calculateExpectedScore(ratingB, ratingA);
  
  const scoreB = 1 - scoreA;
  
  // Calculate rating changes
  const newRatingA = Math.round(ratingA + K_FACTOR * (scoreA - expectedScoreA));
  const newRatingB = Math.round(ratingB + K_FACTOR * (scoreB - expectedScoreB));
  
  return { newRatingA, newRatingB };
} 