// ============================================
// CARD DATA - EASY TO EDIT!
// ============================================
// Each card can have either an 'image' OR a 'youtubeId'
// - For images: use 'image' and 'imageAlt'
// - For YouTube videos: use 'youtubeId' (just the video ID from the URL)

(function() {
    'use strict';
    
    window.cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
            imageAlt: 'Majestic mountain peak covered in snow against a clear blue sky',
            title: 'Mountain Serenity',
            photographer: 'Elena Rodriguez',
            body: 'Discover the tranquil beauty of towering peaks where earth meets sky. These natural monuments have stood for millennia, witnessing the passage of time and offering refuge to those seeking peace and perspective. The crisp mountain air and breathtaking vistas remind us of nature\'s grandeur and our place within it.'
        },
        {
            youtubeId: 'dQw4w9WgXcQ',
            title: 'Cosmic Wonder',
            photographer: 'Marcus Chen',
            body: 'Gaze into the infinite expanse of our universe, where billions of stars paint the canvas of night. The cosmos beckons us to dream bigger, to question deeper, and to recognize the extraordinary beauty that exists beyond our atmosphere. Each point of light represents a sun, perhaps with its own worlds orbiting in the darkness.'
        },
        {
            image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
            imageAlt: 'Gentle ocean waves rolling onto a pristine sandy beach at sunset',
            title: 'Ocean Dreams',
            photographer: 'Sofia Andersson',
            body: 'Feel the rhythm of the tides as waves caress the shoreline in an eternal dance. The ocean holds mysteries in its depths and offers solace on its shores. Its vast blue expanse connects continents and cultures, while the sound of crashing waves provides nature\'s most soothing symphony for the soul.'
        },
        {
            image: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=600&fit=crop',
            imageAlt: 'Lush green forest with sunlight filtering through tall trees',
            title: 'Forest Sanctuary',
            photographer: 'James O\'Brien',
            body: 'Step into the cathedral of ancient trees where sunlight filters through emerald canopies. The forest breathes life into our world, purifying air and providing habitat for countless species. In this green sanctuary, time moves differently, and the whispers of leaves tell stories written over centuries of growth and renewal.'
        },
        {
            image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=600&fit=crop',
            imageAlt: 'Vibrant desert landscape with red rock formations under golden hour light',
            title: 'Desert Majesty',
            photographer: 'Amara Okafor',
            body: 'Witness the stark beauty of endless sands and sculptured stone, where life persists against all odds. The desert teaches resilience and adaptation, showcasing how beauty can flourish in the harshest conditions. As the sun paints the landscape in hues of amber and crimson, the desert reveals its hidden magic.'
        }
    ];
    
    console.log('cards01.js loaded successfully with', window.cardsData.length, 'cards');
})();
