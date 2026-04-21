import content from '../data/content.json';

/**
 * Simulates a network delay between 1000–1500ms.
 * Randomly fails ~10% of the time to demo error state.
 */
function simulateNetwork(data) {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 500;
    setTimeout(() => {
      if (Math.random() < 0.1) {
        reject(new Error('Network error: failed to fetch content.'));
      } else {
        resolve(data);
      }
    }, delay);
  });
}

/**
 * Fetches hero + navigation data from content.json.
 * @returns {Promise<{ hero: object, navigation: object }>}
 */
export async function fetchHeroContent() {
  const { hero, navigation } = content;
  return simulateNetwork({ hero, navigation });
}

/**
 * Fetches featuresSection + carousel config from content.json.
 * @returns {Promise<{ featuresSection: object, carousel: object }>}
 */
export async function fetchFeaturesContent() {
  const { featuresSection, carousel } = content;
  return simulateNetwork({ featuresSection, carousel });
}
