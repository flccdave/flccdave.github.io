// Geometry Flashcard Data
const geometryCards = [
    { q: "What is the sum of interior angles in a triangle?", a: "180 degrees" },
    { q: "Define a Pythagorean Triple.", a: "Three positive integers a, b, and c, such that a² + b² = c²." },
    { q: "What is the area of a circle?", a: "πr²" },
    { q: "How many sides does a nonagon have?", a: "9 sides" },
    { q: "What is a polyhedron?", a: "A three-dimensional solid made of flat polygonal faces." }
];

// Register the subject with the main application
if (typeof registerSubject === 'function') {
    registerSubject('geometry', geometryCards);
}
