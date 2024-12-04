// // // // import React, { useState } from 'react';
// // // // // import './swap.css'; // Reusing the same CSS styling as provided
// // // // import './WhatCanIMake.css';


// // // // const WhatCanIMake = () => {
// // // //     const [ingredientsUsed, setIngredientsUsed] = useState('');
// // // //     const [ingredientsExcluded, setIngredientsExcluded] = useState('');
// // // //     const [recipes, setRecipes] = useState([]);

// // // //     const handleFindRecipes = async () => {
// // // //         try {
// // // //             // Prepare the payload for the POST request
// // // //             const payload = {
// // // //                 ingredientUsed: ingredientsUsed,
// // // //                 ingredientNotUsed: ingredientsExcluded,
// // // //             };

// // // //             const response = await fetch(
// // // //                 'https://cosylab.iiitd.edu.in/recipe-search/recipesAdvanced?pageSize=10',
// // // //                 {
// // // //                     method: 'POST',
// // // //                     headers: {
// // // //                         'Content-Type': 'application/json',
// // // //                     },
// // // //                     body: JSON.stringify(payload),
// // // //                 }
// // // //             );

// // // //             if (response.ok) {
// // // //                 const data = await response.json();
// // // //                 if (data.success === "true" && data.payload) {
// // // //                     setRecipes(data.payload);
// // // //                 } else {
// // // //                     alert("No recipes found for the given ingredients.");
// // // //                 }
// // // //             } else {
// // // //                 alert("Failed to fetch recipes. Please try again.");
// // // //             }
// // // //         } catch (error) {
// // // //             console.error('Error:', error);
// // // //             alert('An error occurred. Please try again later.');
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="swap-background">
// // // //             <div className="swap-container">
// // // //                 <h2>What Can I Make?</h2>
// // // //                 <p>Enter the ingredients you have, and we'll suggest recipes you can make!</p>
// // // //                 <div className="input-group">
// // // //                     <textarea
// // // //                         placeholder="Enter ingredients you have (comma-separated): e.g., onion, tomato, garlic"
// // // //                         className="swap-input"
// // // //                         value={ingredientsUsed}
// // // //                         onChange={(e) => setIngredientsUsed(e.target.value)}
// // // //                     />
// // // //                     <textarea
// // // //                         placeholder="Enter ingredients to exclude (comma-separated): e.g., milk, peanuts"
// // // //                         className="swap-input"
// // // //                         value={ingredientsExcluded}
// // // //                         onChange={(e) => setIngredientsExcluded(e.target.value)}
// // // //                     />
// // // //                     <button className="swap-button" onClick={handleFindRecipes}>
// // // //                         Find Recipes
// // // //                     </button>
// // // //                 </div>

// // // //                 {recipes.length > 0 && (
// // // //                     <div className="swap-alternatives">
// // // //                         <h3>Recipes You Can Make:</h3>
// // // //                         <ul className="alternative-list">
// // // //                             {recipes.map((recipe, index) => (
// // // //                                 <li key={index} className="alternative-item">
// // // //                                     <strong>{recipe.Recipe_title}</strong> <br />
// // // //                                     <img
// // // //                                         src={recipe.img_url || "https://via.placeholder.com/150"}
// // // //                                         alt={recipe.Recipe_title}
// // // //                                         style={{ width: "100px", borderRadius: "5px" }}
// // // //                                     />
// // // //                                     <p><strong>Calories:</strong> {recipe.Calories || "N/A"}</p>
// // // //                                     <p><strong>Cook Time:</strong> {recipe.cook_time || "N/A"} mins</p>
// // // //                                     <p><strong>Prep Time:</strong> {recipe.prep_time || "N/A"} mins</p>
// // // //                                 </li>
// // // //                             ))}
// // // //                         </ul>
// // // //                     </div>
// // // //                 )}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default WhatCanIMake;



// // // import React, { useState } from 'react';
// // // import './WhatCanIMake.css';

// // // const WhatCanIMake = () => {
// // //     const [ingredientsUsed, setIngredientsUsed] = useState('');
// // //     const [ingredientsExcluded, setIngredientsExcluded] = useState('');
// // //     const [recipes, setRecipes] = useState([]);

// // //     const handleFindRecipes = async () => {
// // //         try {
// // //             // Prepare the prompt for ChatGPT
// // //             const prompt = `
// // //             I have the following ingredients: ${ingredientsUsed}.
// // //             I want to exclude these ingredients: ${ingredientsExcluded}.
// // //             Suggest 5 recipes I can make using these constraints. For each recipe, include:
// // //             - Title
// // //             - Image URL
// // //             - Description
// // //             - Calories
// // //             - Cook Time
// // //             - Prep Time.
// // //             `;

// // //             // Make a POST request to ChatGPT API
// // //             const response = await fetch('/chatGPT-api-endpoint', {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                 },
// // //                 body: JSON.stringify({ prompt }),
// // //             });

// // //             if (response.ok) {
// // //                 const data = await response.json();
// // //                 const parsedRecipes = JSON.parse(data.message); // Assuming the response includes a JSON string

// // //                 if (parsedRecipes.length > 0) {
// // //                     setRecipes(parsedRecipes);
// // //                 } else {
// // //                     alert("No recipes found for the given ingredients.");
// // //                 }
// // //             } else {
// // //                 alert("Failed to fetch recipes. Please try again.");
// // //             }
// // //         } catch (error) {
// // //             console.error('Error:', error);
// // //             alert('An error occurred. Please try again later.');
// // //         }
// // //     };

// // //     return (
// // //         <div className="swap-background">
// // //             <div className="swap-container">
// // //                 <h2>What Can I Make?</h2>
// // //                 <p>Enter the ingredients you have, and we'll suggest recipes you can make!</p>
// // //                 <div className="input-group">
// // //                     <textarea
// // //                         placeholder="Enter ingredients you have (comma-separated): e.g., onion, tomato, garlic"
// // //                         className="swap-input"
// // //                         value={ingredientsUsed}
// // //                         onChange={(e) => setIngredientsUsed(e.target.value)}
// // //                     />
// // //                     <textarea
// // //                         placeholder="Enter ingredients to exclude (comma-separated): e.g., milk, peanuts"
// // //                         className="swap-input"
// // //                         value={ingredientsExcluded}
// // //                         onChange={(e) => setIngredientsExcluded(e.target.value)}
// // //                     />
// // //                     <button className="swap-button" onClick={handleFindRecipes}>
// // //                         Find Recipes
// // //                     </button>
// // //                 </div>

// // //                 {recipes.length > 0 && (
// // //                     <div className="swap-alternatives">
// // //                         <h3>Recipes You Can Make:</h3>
// // //                         <ul className="alternative-list">
// // //                             {recipes.map((recipe, index) => (
// // //                                 <li key={index} className="alternative-item">
// // //                                     <strong>{recipe.title}</strong> <br />
// // //                                     <img
// // //                                         src={recipe.image || "https://via.placeholder.com/150"}
// // //                                         alt={recipe.title}
// // //                                         style={{ width: "100px", borderRadius: "5px" }}
// // //                                     />
// // //                                     <p><strong>Description:</strong> {recipe.description}</p>
// // //                                     <p><strong>Calories:</strong> {recipe.calories || "N/A"}</p>
// // //                                     <p><strong>Cook Time:</strong> {recipe.cookTime || "N/A"} mins</p>
// // //                                     <p><strong>Prep Time:</strong> {recipe.prepTime || "N/A"} mins</p>
// // //                                 </li>
// // //                             ))}
// // //                         </ul>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default WhatCanIMake;



// // import React, { useState } from 'react';
// // import './WhatCanIMake.css';

// // const WhatCanIMake = () => {
// //     const [ingredientsUsed, setIngredientsUsed] = useState('');
// //     const [ingredientsExcluded, setIngredientsExcluded] = useState('');
// //     const [recipes, setRecipes] = useState([]);

// //     const handleFindRecipes = async () => {
// //         try {
// //             const apiKey = "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";
// //             const url = "https://api.openai.com/v1/chat/completions";

// //             // Prepare the messages payload
// //             const messages = [
// //                 {
// //                     role: "system",
// //                     content: "You are a helpful assistant that provides recipes based on available ingredients.",
// //                 },
// //                 {
// //                     role: "user",
// //                     content: `I have the following ingredients: ${ingredientsUsed}.
// //                     I want to exclude these ingredients: ${ingredientsExcluded}.
// //                     Suggest 5 recipes I can make using these constraints. For each recipe, include:
// //                     - Title
// //                     - Image URL
// //                     - Description
// //                     - Calories
// //                     - Cook Time
// //                     - Prep Time.`,
// //                 },
// //             ];

// //             // Make the POST request to OpenAI API
// //             const response = await fetch(url, {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                     Authorization: `Bearer ${apiKey}`,
// //                 },
// //                 body: JSON.stringify({
// //                     model: "gpt-4", // Use the appropriate model
// //                     messages: messages,
// //                     max_tokens: 1000,
// //                     temperature: 0.7,
// //                 }),
// //             });

// //             if (response.ok) {
// //                 const data = await response.json();
// //                 const generatedText = data.choices[0].message.content;

// //                 // Parse the response into JSON
// //                 const parsedRecipes = JSON.parse(generatedText);

// //                 if (parsedRecipes.length > 0) {
// //                     setRecipes(parsedRecipes);
// //                 } else {
// //                     alert("No recipes found for the given ingredients.");
// //                 }
// //             } else {
// //                 const errorData = await response.json();
// //                 console.error("API Error:", errorData);
// //                 alert("Failed to fetch recipes. Please check your API key or input.");
// //             }
// //         } catch (error) {
// //             console.error("Error:", error);
// //             alert("An error occurred. Please try again later.");
// //         }
// //     };

// //     return (
// //         <div className="swap-background">
// //             <div className="swap-container">
// //                 <h2>What Can I Make?</h2>
// //                 <p>Enter the ingredients you have, and we'll suggest recipes you can make!</p>
// //                 <div className="input-group">
// //                     <textarea
// //                         placeholder="Enter ingredients you have (comma-separated): e.g., onion, tomato, garlic"
// //                         className="swap-input"
// //                         value={ingredientsUsed}
// //                         onChange={(e) => setIngredientsUsed(e.target.value)}
// //                     />
// //                     <textarea
// //                         placeholder="Enter ingredients to exclude (comma-separated): e.g., milk, peanuts"
// //                         className="swap-input"
// //                         value={ingredientsExcluded}
// //                         onChange={(e) => setIngredientsExcluded(e.target.value)}
// //                     />
// //                     <button className="swap-button" onClick={handleFindRecipes}>
// //                         Find Recipes
// //                     </button>
// //                 </div>

// //                 {recipes.length > 0 && (
// //                     <div className="swap-alternatives">
// //                         <h3>Recipes You Can Make:</h3>
// //                         <ul className="alternative-list">
// //                             {recipes.map((recipe, index) => (
// //                                 <li key={index} className="alternative-item">
// //                                     <strong>{recipe.title}</strong> <br />
// //                                     {/* <img
// //                                         src={recipe.image || "https://via.placeholder.com/150"}
// //                                         alt={recipe.title}
// //                                         style={{ width: "100px", borderRadius: "5px" }}
// //                                     /> */}
// //                                     <p><strong>Description:</strong> {recipe.description}</p>
// //                                     <p><strong>Calories:</strong> {recipe.calories || "N/A"}</p>
// //                                     <p><strong>Cook Time:</strong> {recipe.cookTime || "N/A"} mins</p>
// //                                     <p><strong>Prep Time:</strong> {recipe.prepTime || "N/A"} mins</p>
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default WhatCanIMake;
// import React, { useState } from 'react';
// import './WhatCanIMake.css';

// const WhatCanIMake = () => {
//     const [ingredientsUsed, setIngredientsUsed] = useState('');
//     const [ingredientsExcluded, setIngredientsExcluded] = useState('');
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleFindRecipes = async () => {
//         setLoading(true);
//         setError('');
//         setRecipes([]);

//         try {
//             const apiKey = "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";
//             const url = "https://api.openai.com/v1/chat/completions";

//             const messages = [
//                 {
//                     role: "system",
//                     content: "You are a helpful assistant that generates recipes in valid JSON format.",
//                 },
//                 {
//                     role: "user",
//                     content: `
//                     I have the following ingredients: ${ingredientsUsed}.
//                     I want to exclude these ingredients: ${ingredientsExcluded}.
//                     Suggest 5 recipes I can make. For each recipe, provide a JSON object with:
//                     - "title" (string)
//                     - "image" (string URL or placeholder)
//                     - "description" (string)
//                     - "calories" (number)
//                     - "cookTime" (number, in minutes)
//                     - "prepTime" (number, in minutes).

//                     Ensure the response is ONLY a valid JSON array of objects, no extra text or explanations.`,
//                 },
//             ];

//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${apiKey}`,
//                 },
//                 body: JSON.stringify({
//                     model: "gpt-4",
//                     messages: messages,
//                     max_tokens: 1000,
//                     temperature: 0.7,
//                 }),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log("API Response:", data); // Log the raw response for debugging

//                 const generatedText = data.choices[0]?.message?.content;
//                 console.log("Generated Text (Raw):", generatedText); // Log the raw GPT response

//                 let parsedRecipes;
//                 try {
//                     parsedRecipes = JSON.parse(generatedText);
//                 } catch (jsonError) {
//                     console.error("JSON Parsing Error:", jsonError);
//                     setError("Failed to parse API response. Please try again.");
//                     return;
//                 }

//                 if (Array.isArray(parsedRecipes) && parsedRecipes.length > 0) {
//                     setRecipes(parsedRecipes);
//                 } else {
//                     setError("No recipes found for the given ingredients.");
//                 }
//             } else {
//                 const errorData = await response.json();
//                 console.error("API Error Response:", errorData);
//                 setError("Failed to fetch recipes. Please check your input or API key.");
//             }
//         } catch (error) {
//             console.error("Network/Fetch Error:", error);
//             setError("A network error occurred. Please try again later.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="swap-background">
//             <div className="swap-container">
//                 <h2>What Can I Make?</h2>
//                 <p>Enter the ingredients you have, and we'll suggest recipes you can make!</p>
//                 <div className="input-group">
//                     <textarea
//                         placeholder="Enter ingredients you have (comma-separated): e.g., onion, tomato, garlic"
//                         className="swap-input"
//                         value={ingredientsUsed}
//                         onChange={(e) => setIngredientsUsed(e.target.value)}
//                     />
//                     <textarea
//                         placeholder="Enter ingredients to exclude (comma-separated): e.g., milk, peanuts"
//                         className="swap-input"
//                         value={ingredientsExcluded}
//                         onChange={(e) => setIngredientsExcluded(e.target.value)}
//                     />
//                     <button className="swap-button" onClick={handleFindRecipes} disabled={loading}>
//                         {loading ? "Loading..." : "Find Recipes"}
//                     </button>
//                 </div>

//                 {error && <div className="error-message">{error}</div>}

//                 {recipes.length > 0 && (
//                     <div className="swap-alternatives">
//                         <h3>Recipes You Can Make:</h3>
//                         <ul className="alternative-list">
//                             {recipes.map((recipe, index) => (
//                                 <li key={index} className="alternative-item">
//                                     <strong>{recipe.title}</strong> <br />
//                                     {/* <img
//                                         src={recipe.image || "https://via.placeholder.com/150"}
//                                         alt={recipe.title}
//                                         style={{ width: "100px", borderRadius: "5px" }}
//                                     /> */}
//                                     <p><strong>Description:</strong> {recipe.description}</p>
//                                     <p><strong>Calories:</strong> {recipe.calories || "N/A"}</p>
//                                     <p><strong>Cook Time:</strong> {recipe.cookTime || "N/A"} mins</p>
//                                     <p><strong>Prep Time:</strong> {recipe.prepTime || "N/A"} mins</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default WhatCanIMake;



import React, { useState } from 'react';
import './WhatCanIMake.css';

const WhatCanIMake = () => {
    const [ingredientsUsed, setIngredientsUsed] = useState('');
    const [ingredientsExcluded, setIngredientsExcluded] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFindRecipes = async () => {
        setLoading(true);
        setError('');
        setRecipes([]);

        try {
            const apiKey = "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";
            const url = "https://api.openai.com/v1/chat/completions";

            const messages = [
                {
                    role: "system",
                    content: "You are a helpful assistant that generates recipes in valid JSON format.",
                },
                {
                    role: "user",
                    content: `
                    I have the following ingredients: ${ingredientsUsed}.
                    I want to exclude these ingredients: ${ingredientsExcluded}.
                    Suggest 5 recipes I can make. For each recipe, provide a JSON object with:
                    - "title" (string)
                    - "image" (string URL or placeholder)
                    - "description" (string)
                    - "calories" (number)
                    - "cookTime" (number, in minutes)
                    - "prepTime" (number, in minutes).

                    Ensure the response is ONLY a valid JSON array of objects, no extra text or explanations.`,
                },
            ];

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: messages,
                    max_tokens: 1000,
                    temperature: 0.7,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("API Response:", data); // Log the raw response for debugging

                const generatedText = data.choices[0]?.message?.content;
                console.log("Generated Text (Raw):", generatedText); // Log the raw GPT response

                let parsedRecipes;
                try {
                    parsedRecipes = JSON.parse(generatedText);
                } catch (jsonError) {
                    console.error("JSON Parsing Error:", jsonError);
                    setError("Failed to parse API response. Please try again.");
                    return;
                }

                if (Array.isArray(parsedRecipes) && parsedRecipes.length > 0) {
                    setRecipes(parsedRecipes);
                } else {
                    setError("No recipes found for the given ingredients.");
                }
            } else {
                const errorData = await response.json();
                console.error("API Error Response:", errorData);
                setError("Failed to fetch recipes. Please check your input or API key.");
            }
        } catch (error) {
            console.error("Network/Fetch Error:", error);
            setError("A network error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="swap-background">
            <div className="swap-container">
                <h2>What Can I Make?</h2>
                <p>Enter the ingredients you have, and we'll suggest recipes you can make!</p>
                <div className="input-group">
                    <textarea
                        placeholder="Enter ingredients you have (comma-separated): e.g., onion, tomato, garlic"
                        className="swap-input"
                        value={ingredientsUsed}
                        onChange={(e) => setIngredientsUsed(e.target.value)}
                    />
                    <textarea
                        placeholder="Enter ingredients to exclude (comma-separated): e.g., milk, peanuts"
                        className="swap-input"
                        value={ingredientsExcluded}
                        onChange={(e) => setIngredientsExcluded(e.target.value)}
                    />
                    <button className="swap-button" onClick={handleFindRecipes} disabled={loading}>
                        {loading ? "Loading..." : "Find Recipes"}
                    </button>
                </div>

                {error && <div className="error-message">{error}</div>}

                {recipes.length > 0 && (
                    <div className="swap-alternatives">
                        <h3>Recipes You Can Make:</h3>
                        <div className="scrollable-container">
                            <ul className="alternative-list">
                                {recipes.map((recipe, index) => (
                                    <li key={index} className="alternative-item">
                                        <strong>{recipe.title}</strong> <br />
                                        <p><strong>Description:</strong> {recipe.description}</p>
                                        <p><strong>Calories:</strong> {recipe.calories || "N/A"}</p>
                                        <p><strong>Cook Time:</strong> {recipe.cookTime || "N/A"} mins</p>
                                        <p><strong>Prep Time:</strong> {recipe.prepTime || "N/A"} mins</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WhatCanIMake;
