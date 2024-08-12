export default function Retro () {
    return (
        <div>
            <h2>Project Retrospective</h2>
            <p>Overall, I'm pretty happy with how this project turned out given my lack of knowledge about cryptocurrency. It's not the most flashy app that I've ever built, but it does that job. Here are a few things that I thought went well about the project, and some things that I think could be improved.</p>
            <h3>What went well:</h3>
            <ul>
                <li>It works! The app meets all of the fundamental requirements set out in the project brief. It took me a while to really understand what some of the words meant (like ticker, brc20, etc.), but I tried to focus on doing what I do best, which is building web applications</li>
                <li>I'm pleased with how the design turned out. I tried to mimic the Ordinal Bots styles relatively closely, so that it would look unified with their current brand identity. Of course, with more time I could have made it more sleek and responsive, but it's pretty serviceable as is.</li>
                <li>It was fun to learn about cryptocurrency! I've never really had a reason to learn about it before, so it was interesting to learn about how it works, and how I could interact with it using the Ordinals Bot API.</li>
            </ul>
            <h3>What could be improved:</h3>
            <ul>
                <li>It would have been nice to be able to implement more of the bonus features. I checked all the required boxes, but there were a few features ("Render a display for current bitcoin block & current price" and "“Connect a Wallet” button & functionality) that I wasn't able to get to.</li>
                <li>More robust error handling. The next step I would take if this were intended to be a production application would be to add more error handling capabilities, form validation, and fallbacks.</li>
                <li>Testing. After adding better error handling, it would be instructive to write some basic unit tests for all the moving parts. It's not the most complicated app in the world, just a few API calls really, so testing isn't really SUPER necessary, but it's always good practice.</li>
            </ul>
        </div>
    )
}