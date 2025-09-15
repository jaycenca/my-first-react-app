export default function Photo() {
    return (
        <>
            // This doesn't quite work!
            <h1>Hedy Lamarr's Todos</h1>
            <img 
            src="https://i.imgur.com/yXOvdOSs.jpg" 
            alt="Hedy Lamarr" 
            class="photo"
            />
            <div>
                <ul>
                    <li>Invent new traffic lights</li>
                    <li>Rehearse a movie scene</li>
                    <li>Improve the spectrum technology</li>
                </ul>
            </div>
        </>
    );
}