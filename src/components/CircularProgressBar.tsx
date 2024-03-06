type Props = {
    progress: number,
}

export default function CircularProgressBar({ progress }: Props) {
    const circumference = 50 * 2 * Math.PI 
    return (
    //     <div className="flex items-center flex-wrap max-w-md px-10  shadow-xl rounded-2xl h-16">
            <div className="flex items-center justify-center -m-6 overflow-hidden   rounded-full">
                <svg className="w-32 h-32 transform -rotate-90"   aria-hidden="true">
                    <circle
                        className="text-[#ff5df3]"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                    <circle
                        className="text-[#4f9dff]"
                        strokeWidth="10"
                        strokeDasharray={circumference}
                        strokeDashoffset={`${circumference - progress / 100 * circumference}`}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                    />
                </svg>
                <span className="absolute text-2xl text-white" x-text={`${progress}%`}>{progress}% <br/>Used</span>
            </div>
        // </div >
    )
}
