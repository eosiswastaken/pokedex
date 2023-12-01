export default function Card() {
    return (
        <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
            <div className="w-[128px] h-[112px] rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <div className="h-full w-full flex flex-col items-center justify-around bg-gray-800 back">
                    <div><span>175</span><span>Pikachu</span><span>O</span></div>
                    <div>image</div>
                    <div className="flex">gen1</div>
                </div>
            </div>
        </div>
    );
}